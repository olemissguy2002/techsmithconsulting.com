"use client";

import { useState } from "react";

export default function SiteChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full bg-[#37CC97] text-black font-semibold px-4 py-3 shadow-lg hover:bg-[#2dbb87] transition"
      >
        {open ? "Close Chat" : "Chat with AI"}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-80 h-[480px] rounded-xl bg-white shadow-2xl overflow-hidden">
          {/* Placeholder chat UI */}
          <iframe
            src="about:blank"
            className="w-full h-full bg-[#111]"
            title="AI Chatbot"
          />

          {/* Replace the iframe later with: */}
          {/* - Bedrock streaming chat */}
          {/* - Our own FastAPI / Node API handler */}
        </div>
      )}
    </>
  );
}
