"use client";

import * as React from "react";
import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";
import FloatingLogo from "@/components/FloatingLogo";

const API_BASE =
  process.env.NEXT_PUBLIC_TTS_API_BASE || "http://localhost:3000/api/tts";

export default function Page() {
  const [sessionId, setSessionId] = React.useState<string>("");
  const [text, setText] = React.useState<string>("");
  const [voiceFile, setVoiceFile] = React.useState<File | null>(null);
  const [playUrl, setPlayUrl] = React.useState<string>("");
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  // ✅ Initialize sessionId on mount (browser only)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}`;
    setSessionId(id);

    // Clean up when tab closes or reloads
    const onBeforeUnload = () => {
      const fd = new FormData();
      fd.append("session_id", id);
      navigator.sendBeacon?.(`${API_BASE}/delete`, fd);
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, []);

  // ✅ Main synthesize call
  async function synthesize() {
    if (!text.trim()) return;
    if (!sessionId) {
      alert("Session not ready — please reload and try again.");
      return;
    }

    const fd = new FormData();
    fd.append("text", text);
    fd.append("session_id", sessionId);
    if (voiceFile) fd.append("voice_prompt", voiceFile, voiceFile.name);

    const res = await fetch(`${API_BASE}/synthesize`, { method: "POST", body: fd });
    if (!res.ok) {
      alert("Synthesis failed.");
      return;
    }

    const data = await res.json(); // { session_id, play_url }
    const sid = data.session_id || sessionId;
    const url = `${API_BASE}${data.play_url ?? `/play/${sid}`}`;
    setPlayUrl(url);

    setTimeout(() => {
      audioRef.current?.load();
      audioRef.current?.play().catch(() => {});
    }, 100);
  }

  // ✅ Delete old file when text changes
  async function onTextChange(next: string) {
    if (playUrl && sessionId) {
      const fd = new FormData();
      fd.append("session_id", sessionId);
      fetch(`${API_BASE}/delete`, { method: "POST", body: fd }).catch(() => {});
      setPlayUrl("");
    }
    setText(next);
  }

  return (
    <main className="relative pb-16">
      {/* Floating logo & tagline (matches other marketing pages) */}
      <FloatingLogo />

      <PageHeroVideo
        folder="AI Portfolio/tts"
        title="Text-to-Speech Studio"
        subtitle="Prototype custom voices safely in the browser, powered by Daryl Smith Consulting’s Chatterbox stack."
        fullScreen={false}
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 -mt-12 md:-mt-16">
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-lg shadow-2xl overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(55,204,151,0.12),_transparent_55%)] opacity-70 pointer-events-none hidden lg:block" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] p-6 sm:p-10">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#37CC97]/80">
                  Chatterbox Playground
                </p>
                <h2 className="text-3xl font-semibold text-white mt-2">
                  Generate speech and audition custom voice emulation from audio files.
                </h2>
                <p className="text-base text-gray-300 mt-3">
                  This is a very small and cost effective POC (Proof of Concept). Please note that It may take anywhere from 45 seconds to 3+ minutes to hear the result depending upon length of text prompt and other factors. Performance will be dramatically increased for production implementations.
                </p>
                <p className="text-base text-gray-300 mt-3">
                  If you wish to experiment with different voice samples for emulation and do not have your own, a fairly large collection of samples are available from Hugging Face for download at{" "}
                  <a
                    href="https://huggingface.co/spaces/Inferless/Open-Source-TTS-Gallary"
                    className="underline text-[#37CC97] hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://huggingface.co/spaces/Inferless/Open-Source-TTS-Gallary
                  </a>
                  .
                </p>
                <p className="text-base text-gray-300 mt-3">
                  Every session is temporary—when you adjust the script or close the tab, we clean up the audio for you.
                </p>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-200" htmlFor="tts-text">
                  Script
                </label>
                <textarea
                  id="tts-text"
                  value={text}
                  onChange={(e) => onTextChange(e.target.value)}
                  rows={6}
                  className="w-full rounded-2xl border border-white/15 bg-black/40 p-4 text-white placeholder:text-gray-500 focus:border-[#37CC97] focus:outline-none transition"
                  placeholder="Hello from Daryl Smith Consulting..."
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-200" htmlFor="voice-prompt">
                  Voice sample to emulate (WAV, optional)
                </label>
                <input
                  id="voice-prompt"
                  type="file"
                  accept="audio/wav"
                  onChange={(e) => setVoiceFile(e.target.files?.[0] || null)}
                  className="block w-full text-sm text-gray-300 file:mr-4 file:rounded-xl file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:tracking-wide file:text-white hover:file:bg-white/20"
                />
                <p className="text-xs text-gray-400">
                  Upload a clean, dry sample (15-30 seconds) to nudge the model toward your voice print.
                </p>
              </div>

              <button
                disabled={!sessionId}
                onClick={synthesize}
                className="inline-flex items-center justify-center rounded-2xl bg-[#37CC97] px-6 py-3 font-semibold text-black transition hover:bg-[#2ea77c] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sessionId ? "Synthesize" : "Preparing session..."}
              </button>
            </div>

            <div className="space-y-6 rounded-2xl border border-white/10 bg-black/40 p-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Output</h3>
                <p className="text-sm text-gray-400 mt-1">
                  When synthesis is ready we auto-play below. Swap scripts to clear previous clips.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
                <audio ref={audioRef} controls src={playUrl || undefined} className="w-full" />
              </div>
              <div className="space-y-4 text-sm text-gray-300">
                <p className="font-semibold text-white">Tips</p>
                <ul className="list-disc space-y-2 pl-5 text-gray-400">
                  <li>Use punctuation for pacing—commas for short pauses, ellipses for dramatic breaks.</li>
                  <li>Try multiple runs with the same prompt to capture subtle delivery changes.</li>
                  <li>Leave this tab open while reviewing; the session cleans up automatically when you bounce.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
