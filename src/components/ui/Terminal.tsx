"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TERMINAL_LINES } from "@/lib/constants";

interface TerminalProps {
  startAnimation?: boolean;
}

export function Terminal({ startAnimation = true }: TerminalProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [currentTyping, setCurrentTyping] = useState<{ lineIndex: number; text: string } | null>(
    null
  );

  useEffect(() => {
    if (!startAnimation) return;

    const timeouts: NodeJS.Timeout[] = [];

    TERMINAL_LINES.forEach((line, index) => {
      const timeout = setTimeout(() => {
        if (line.text.startsWith("$") || line.text.startsWith("✓") || line.text === "") {
          // Type these lines character by character
          let charIndex = 0;
          const typeInterval = setInterval(() => {
            if (charIndex <= line.text.length) {
              setCurrentTyping({ lineIndex: index, text: line.text.slice(0, charIndex) });
              charIndex++;
            } else {
              clearInterval(typeInterval);
              setVisibleLines((prev) => [...prev, index]);
              setCurrentTyping(null);
            }
          }, 25);
        } else {
          setVisibleLines((prev) => [...prev, index]);
        }
      }, line.delay);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [startAnimation]);

  return (
    <div className="relative w-full max-w-lg">
      {/* Terminal window */}
      <div className="rounded-lg border border-hydra-border bg-hydra-bg-card/80 backdrop-blur-sm overflow-hidden shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-hydra-border bg-hydra-bg-elevated/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-hydra-text-muted ml-2 font-mono">hydraclaw</span>
        </div>

        {/* Terminal content */}
        <div className="p-4 font-mono text-sm min-h-[280px]">
          <AnimatePresence>
            {TERMINAL_LINES.map((line, index) => {
              const isVisible = visibleLines.includes(index);
              const isTyping = currentTyping?.lineIndex === index;

              if (!isVisible && !isTyping) return null;

              const displayText = isTyping ? currentTyping.text : line.text;
              const isCommand = line.text.startsWith("$");
              const isSuccess = line.text.startsWith("✓");
              const isReady = line.text.includes("Ready");

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`
                    leading-relaxed
                    ${isCommand ? "text-hydra-text" : ""}
                    ${isSuccess ? "text-web4" : ""}
                    ${isReady ? "text-web3 mt-2" : ""}
                    ${!isCommand && !isSuccess && !isReady ? "text-hydra-text-muted" : ""}
                  `}
                >
                  {displayText}
                  {isTyping && (
                    <span className="inline-block w-2 h-4 ml-0.5 bg-web4 cursor-blink" />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Show cursor at end */}
          {visibleLines.length === TERMINAL_LINES.length && !currentTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2"
            >
              <span className="text-hydra-text">$</span>
              <span className="inline-block w-2 h-4 ml-1 bg-web4 cursor-blink" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Glow effect behind terminal */}
      <div className="absolute -inset-1 bg-gradient-to-r from-web1/20 via-web2/20 to-web4/20 rounded-lg blur-xl opacity-50 -z-10" />
    </div>
  );
}
