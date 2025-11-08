# tts-backend/server.py
import os, time, uuid, shutil
from typing import Optional, Dict
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
import numpy as np
import soundfile as sf
from chatterbox.tts import ChatterboxTTS

OUT_DIR = "/app/out"
os.makedirs(OUT_DIR, exist_ok=True)

sessions: Dict[str, dict] = {}

print("Loading Chatterbox (CPU)…")
model = ChatterboxTTS.from_pretrained(device="cpu")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://techsmithconsulting.com",
        "https://www.techsmithconsulting.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def _new_sid(given: Optional[str]) -> str:
    return given or str(uuid.uuid4())

def _cleanup_stale(max_age=3600):
    now = time.time()
    for sid, meta in list(sessions.items()):
        if now - meta["ts"] > max_age:
            try:
                if os.path.exists(meta["path"]):
                    os.remove(meta["path"])
            finally:
                sessions.pop(sid, None)

def _save_wav(path, tensor, sr):
    data = tensor.squeeze().detach().cpu().numpy().astype(np.float32)
    sf.write(path, data, sr)

@app.post("/synthesize")
async def synthesize(
    text: str = Form(...),
    session_id: Optional[str] = Form(None),
    voice_prompt: Optional[UploadFile] = File(None),
):
    _cleanup_stale()
    sid = _new_sid(session_id)
    if sid in sessions:
        old = sessions[sid]["path"]
        if os.path.exists(old):
            os.remove(old)

    prompt_path = None
    if voice_prompt is not None:
        prompt_path = os.path.join(OUT_DIR, f"{sid}-prompt.wav")
        with open(prompt_path, "wb") as f:
            shutil.copyfileobj(voice_prompt.file, f)

    wav = model.generate(text, audio_prompt_path=prompt_path)
    out_path = os.path.join(OUT_DIR, f"{sid}.wav")
    _save_wav(out_path, wav, model.sr)
    sessions[sid] = {"path": out_path, "ts": time.time()}

    return {"session_id": sid, "play_url": f"/play/{sid}"}

@app.get("/play/{sid}")
def play(sid: str):
    meta = sessions.get(sid)
    if not meta or not os.path.exists(meta["path"]):
        return JSONResponse({"error": "not found"}, status_code=404)
    return FileResponse(meta["path"], media_type="audio/wav", filename="speech.wav")

@app.post("/delete")
async def delete(session_id: Optional[str] = Form(None)):
    sid = _new_sid(session_id)
    meta = sessions.pop(sid, None)
    if meta and os.path.exists(meta["path"]):
        os.remove(meta["path"])
    prompt_path = os.path.join(OUT_DIR, f"{sid}-prompt.wav")
    if os.path.exists(prompt_path):
        os.remove(prompt_path)
    return {"ok": True}
