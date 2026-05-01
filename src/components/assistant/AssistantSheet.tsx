"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RUO_ASSISTANT_DISCLAIMER } from "@/lib/ruo";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const SUGGESTIONS = [
  "What does HPLC purity actually measure?",
  "How is monoisotopic mass calculated?",
  "How long is reconstituted peptide stable at 2-8°C?",
  "What does endotoxin <0.5 EU/mg mean?",
];

const CANNED: Record<string, string> = {
  default:
    "I can answer questions about peptide chemistry, characterization techniques, and product handling for laboratory research. I do not provide dosing, medical, or human-use guidance.",
  hplc:
    "Reverse-phase HPLC at 220 nm separates peptides by hydrophobicity. The peak-area-percent of the target peak relative to total peak area, after subtracting solvent and gradient artifacts, is reported as purity.",
  mass:
    "Monoisotopic mass is calculated by summing the mass of the most abundant isotope of each atom in the molecular formula. ESI-MS observes [M+H]+, [M+2H]2+, and so on; deconvolution recovers the neutral mass.",
  storage:
    "Stability windows depend on solvent, pH, and temperature. The product page lists the validated range. As a general rule, lyophilized vials store at -20°C; reconstituted material at 2-8°C is short-term.",
  endo:
    "Endotoxin is measured by LAL or rFC assay and reported in EU/mg. <0.5 EU/mg is a research-grade specification; injectable-grade is far stricter. peptriva publishes the measured value on every COA.",
};

function answerFor(text: string) {
  const t = text.toLowerCase();
  if (t.includes("hplc") || t.includes("purity")) return CANNED.hplc;
  if (t.includes("mass") || t.includes("monoisotopic")) return CANNED.mass;
  if (t.includes("stable") || t.includes("storage") || t.includes("reconstitut"))
    return CANNED.storage;
  if (t.includes("endotoxin") || t.includes("eu/mg")) return CANNED.endo;
  return CANNED.default;
}

export function AssistantSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi — I'm peptriva's research assistant. Ask me about chemistry, characterization, or handling. I cannot help with human use.",
    },
  ]);
  const [input, setInput] = useState("");

  function send(text: string) {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: answerFor(text) }]);
    }, 350);
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[var(--brand-midnight)]/40 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed right-0 top-0 z-50 h-full w-full sm:max-w-md bg-white shadow-pop flex flex-col"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between p-5 border-b border-[var(--border)]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--brand-blurple)]" />
              <Dialog.Title className="font-display text-lg tracking-tight text-[var(--brand-midnight)]">
                Research assistant
              </Dialog.Title>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-[var(--surface)]"
              aria-label="Close assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="px-5 py-3 bg-[var(--surface)] border-b border-[var(--border)]">
            <p className="text-[11px] text-[var(--brand-slate)] leading-relaxed">
              {RUO_ASSISTANT_DISCLAIMER}
            </p>
          </div>

          <div className="flex-1 overflow-auto p-5 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-[var(--brand-midnight)] text-white px-4 py-2.5 text-sm"
                    : "mr-auto max-w-[85%] rounded-2xl rounded-bl-md bg-[var(--surface)] text-[var(--brand-midnight)] px-4 py-2.5 text-sm"
                }
              >
                {m.text}
              </div>
            ))}
            {messages.length === 1 && (
              <div className="pt-2 space-y-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="block w-full text-left text-xs px-3 py-2 rounded-lg border border-[var(--border)] hover:border-[var(--brand-blurple)] hover:text-[var(--brand-blurple)]"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-4 border-t border-[var(--border)] flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about characterization or handling…"
              className="flex-1 h-10 px-4 text-sm rounded-full bg-[var(--surface)] border border-[var(--border)] focus:outline-none focus:border-[var(--brand-blurple)]"
            />
            <Button type="submit" size="icon" variant="gradient" aria-label="Send">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
