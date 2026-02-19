"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared";
import { CodeBlock } from "@/components/ui";
import { QUICKSTART_SOLANA, QUICKSTART_BASE } from "@/lib/constants";

export function QuickStart() {
  const [activeChain, setActiveChain] = useState<"solana" | "base">("solana");

  return (
    <SectionWrapper id="docs">
      {/* Section header */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-web4 font-medium uppercase tracking-wider mb-4"
        >
          Quick Start
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4"
        >
          Deploy in 30 Seconds
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-hydra-text-muted max-w-2xl mx-auto"
        >
          One command to install. One command to deploy. Pure simplicity.
        </motion.p>
      </div>

      {/* Chain tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mb-6"
      >
        <div className="inline-flex rounded-lg border border-hydra-border bg-hydra-bg-card/50 p-1">
          <button
            onClick={() => setActiveChain("solana")}
            className={`
              px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
              ${
                activeChain === "solana"
                  ? "bg-web2 text-white shadow-md"
                  : "text-hydra-text-muted hover:text-hydra-text"
              }
            `}
          >
            Solana
          </button>
          <button
            onClick={() => setActiveChain("base")}
            className={`
              px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
              ${
                activeChain === "base"
                  ? "bg-web1 text-white shadow-md"
                  : "text-hydra-text-muted hover:text-hydra-text"
              }
            `}
          >
            Base
          </button>
        </div>
      </motion.div>

      {/* Code block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <CodeBlock
          code={activeChain === "solana" ? QUICKSTART_SOLANA : QUICKSTART_BASE}
          language="bash"
        />
      </motion.div>

      {/* Steps summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
      >
        <div className="text-center p-4">
          <div className="w-10 h-10 rounded-full bg-web4/10 border border-web4/30 flex items-center justify-center mx-auto mb-3">
            <span className="text-web4 font-mono font-bold">1</span>
          </div>
          <p className="text-sm text-hydra-text-muted">Install CLI with one command</p>
        </div>
        <div className="text-center p-4">
          <div className="w-10 h-10 rounded-full bg-web4/10 border border-web4/30 flex items-center justify-center mx-auto mb-3">
            <span className="text-web4 font-mono font-bold">2</span>
          </div>
          <p className="text-sm text-hydra-text-muted">Configure your agent strategy</p>
        </div>
        <div className="text-center p-4">
          <div className="w-10 h-10 rounded-full bg-web4/10 border border-web4/30 flex items-center justify-center mx-auto mb-3">
            <span className="text-web4 font-mono font-bold">3</span>
          </div>
          <p className="text-sm text-hydra-text-muted">Deploy and start hunting</p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
