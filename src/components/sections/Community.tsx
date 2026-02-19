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

      {/* Stats and social grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {/* GitHub stats card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-xl border border-hydra-border bg-hydra-bg-card/50 p-6 hover:border-hydra-border-glow transition-colors duration-300"
        >
          <div className="mb-6">
            <h3 className="font-semibold text-hydra-text text-lg">GitHub</h3>
            <p className="text-xs text-hydra-text-muted">Open Source</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <span className="text-2xl font-bold text-hydra-text block">2.4k</span>
              <span className="text-xs text-hydra-text-muted">Stars</span>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-hydra-text block">340</span>
              <span className="text-xs text-hydra-text-muted">Forks</span>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-hydra-text block">89</span>
              <span className="text-xs text-hydra-text-muted">Contributors</span>
            </div>
          </div>

          <a
            href="https://github.com/hydraclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2.5 rounded-lg border border-hydra-border bg-hydra-bg-elevated text-sm text-hydra-text-muted hover:text-hydra-text hover:border-hydra-border-glow transition-colors"
          >
            View Repository →
          </a>
        </motion.div>

        {/* Discord card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="rounded-xl border border-web2/30 bg-hydra-bg-card/50 p-6 hover:border-web2/50 transition-colors duration-300"
        >
          <div className="mb-6">
            <h3 className="font-semibold text-hydra-text text-lg">Discord</h3>
            <p className="text-xs text-hydra-text-muted">Chat with the team</p>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-web4 animate-pulse" />
              <span className="text-sm text-web4">12.5k members online</span>
            </div>
            <p className="text-sm text-hydra-text-muted">
              Join discussions, get support, and connect with other swarm deployers
            </p>
          </div>

          <a
            href="https://discord.gg/hydraclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2.5 rounded-lg bg-web2 text-white text-sm font-medium hover:bg-web2/90 transition-colors"
          >
            Join Discord →
          </a>
        </motion.div>

        {/* Twitter card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="rounded-xl border border-hydra-border bg-hydra-bg-card/50 p-6 hover:border-hydra-border-glow transition-colors duration-300"
        >
          <div className="mb-6">
            <h3 className="font-semibold text-hydra-text text-lg">Twitter/X</h3>
            <p className="text-xs text-hydra-text-muted">@hydraclaw</p>
          </div>

          <div className="mb-6">
            <div className="text-2xl font-bold text-hydra-text mb-1">45.2k</div>
            <p className="text-sm text-hydra-text-muted">
              Followers receiving alpha updates and announcements
            </p>
          </div>

          <a
            href="https://twitter.com/hydraclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2.5 rounded-lg border border-hydra-border bg-hydra-bg-elevated text-sm text-hydra-text-muted hover:text-hydra-text hover:border-hydra-border-glow transition-colors"
          >
            Follow @hydraclaw →
          </a>
        </motion.div>
      </div>

      {/* Additional social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a
          href="https://t.me/hydraclaw"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-hydra-border bg-hydra-bg-card text-sm text-hydra-text-muted hover:text-hydra-text hover:border-hydra-border-glow transition-colors"
        >
          Telegram
        </a>
        <a
          href="https://github.com/hydraclaw"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-hydra-border bg-hydra-bg-card text-sm text-hydra-text-muted hover:text-hydra-text hover:border-hydra-border-glow transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/hydraclaw"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-hydra-border bg-hydra-bg-card text-sm text-hydra-text-muted hover:text-hydra-text hover:border-hydra-border-glow transition-colors"
        >
          Twitter
        </a>
        <a
          href="https://discord.gg/hydraclaw"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-hydra-border bg-hydra-bg-card text-sm text-hydra-text-muted hover:text-hydra-text hover:border-hydra-border-glow transition-colors"
        >
          Discord
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
