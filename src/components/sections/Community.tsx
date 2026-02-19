"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared";

export function Community() {
  return (
    <SectionWrapper>
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-web4 font-medium uppercase tracking-wider mb-4"
        >
          Community
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4"
        >
          Join the Swarm
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-hydra-text-muted max-w-2xl mx-auto"
        >
          Connect with developers, traders, and degens building the future of autonomous trading
        </motion.p>
      </div>

      {/* Twitter/X card - centered */}
      <div className="flex justify-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-md rounded-xl border border-hydra-border bg-hydra-bg-card/50 p-6 hover:border-hydra-border-glow transition-colors duration-300"
        >
          <div className="mb-6">
            <h3 className="font-semibold text-hydra-text text-lg">Twitter/X</h3>
            <p className="text-xs text-hydra-text-muted">@hydra_claw</p>
          </div>

          <div className="mb-6">
            <div className="text-2xl font-bold text-hydra-text mb-1">45.2k</div>
            <p className="text-sm text-hydra-text-muted">
              Followers receiving alpha updates and announcements
            </p>
          </div>

          <a
            href="https://x.com/hydra_claw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2.5 rounded-lg border border-hydra-border bg-hydra-bg-elevated text-sm text-hydra-text-muted hover:text-hydra-text hover:border-hydra-border-glow transition-colors"
          >
            Follow @hydra_claw →
          </a>
        </motion.div>
      </div>

      {/* Single social link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a
          href="https://x.com/hydra_claw"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-hydra-border bg-hydra-bg-card text-sm text-hydra-text-muted hover:text-hydra-text hover:border-hydra-border-glow transition-colors"
        >
          Twitter/X
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
