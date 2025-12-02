"use client";

import * as React from "react";

type Role = "user" | "assistant";

interface ChatMessage {
  role: Role;
  content: string;
}

const STORAGE_SID_KEY = "tsc_chat_sid";
const STORAGE_LOG_KEY = "tsc_chat_log";

export default function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [sessionId, setSessionId] = React.useState<string>("");
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  // Initialize session + restore history
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    let sid = window.localStorage.getItem(STORAGE_SID_KEY);
    if (!sid) {
      sid = (globalThis.crypto?.randomUUID?.() ?? `${Date.now()}`) as string;
      window.localStorage.setItem(STORAGE_SID_KEY, sid);
    }
    setSessionId(sid);

    const saved = window.localStorage.getItem(STORAGE_LOG_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ChatMessage[];
        setMessages(parsed);
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  // Persist messages
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_LOG_KEY, JSON.stringify(messages));
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || !sessionId) return;

    const userMsg: ChatMessage = { role: "user", content: input.trim() };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          messages: nextMessages,
        }),
      });

      if (!res.ok) {
        const txt = await res.text();
        console.error("Chat error:", txt);
        setMessages([
          ...nextMessages,
          {
            role: "assistant",
            content:
              "I ran into an error while responding. Please try again in a moment.",
          },
        ]);
      } else {
        const data = (await res.json()) as { reply: string };
        const assistantMsg: ChatMessage = {
          role: "assistant",
          content: data.reply ?? "",
        };
        setMessages([...nextMessages, assistantMsg]);
      }
    } catch (err) {
      console.error("Network error:", err);
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content:
            "I couldn't reach the chat service. Is the backend running?",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  }

  return (
    <>
      {/* Floating launcher button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-indigo-600 text-white px-4 py-3 shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        aria-label="Open Daryl Smith Consulting Assistant"
      >
        {open ? "×" : "Chat"}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-96 max-h-[70vh] rounded-2xl bg-gray-900 text-gray-100 shadow-2xl border border-gray-800 flex flex-col">
          <div className="p-3 border-b border-gray-800 flex items-center justify-between">
            <div>
              <div className="font-semibold text-sm">Daryl Smith Consulting Assistant</div>
              <div className="text-xs text-gray-400">
                Ask about AI builds, cloud migration & hosting, or web presence.
              </div>
            </div>
            {/* you could put a small logo or icon here later */}
          </div>

          <div className="flex-1 p-3 space-y-3 overflow-y-auto text-sm">
            {messages.length === 0 && (
              <div className="text-gray-400 text-xs">
                I can walk through our AI solutions, cloud migration and hosting
                approach, or how we build standout web presence. Ask a question
                to get started.
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user" ? "text-right" : "text-left"
                }
              >
                <div
                  className={
                    "inline-block px-3 py-2 rounded-xl max-w-[80%] " +
                    (m.role === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-800 text-gray-100")
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-left">
                <div className="inline-block px-3 py-2 rounded-xl bg-gray-800 text-gray-300 text-xs">
                  Thinking…
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-gray-800 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 rounded-lg bg-gray-800 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="Ask about services, pricing approach, or process…"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !sessionId}
              className="px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
