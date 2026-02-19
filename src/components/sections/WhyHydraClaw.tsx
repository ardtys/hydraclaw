"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared";
import { OLD_WAY_ITEMS, HYDRA_WAY_ITEMS } from "@/lib/constants";

export function WhyHydraClaw() {
  return (
    <SectionWrapper id="protocol">
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-web2 font-medium uppercase tracking-wider mb-4"
        >
          Why HydraClaw
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4"
        >
          Cut One Head, Two Grow Back
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-hydra-text-muted max-w-3xl mx-auto"
        >
          Trading bots existing di market penuh dengan masalah: bloated, lambat, mahal, dan tertutup.
          HydraClaw hadir dengan pendekatan berbeda — lightweight, open, dan didesain untuk edge hardware.
        </motion.p>
      </div>

      {/* Comparison grid */}
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {/* The Old Way */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-2xl border border-hydra-border/50 bg-hydra-bg-card/30 p-6 lg:p-8"
        >
          <div className="relative">
            <h3 className="text-xl font-semibold font-[family-name:var(--font-syne)] text-hydra-text-muted mb-6 flex items-center gap-3">
              <span className="w-3 h-0.5 bg-red-500/50" />
              The Old Way
            </h3>

            <ul className="space-y-6">
              {OLD_WAY_ITEMS.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400/50 flex-shrink-0" />
                    <span className="text-hydra-text-muted text-base font-medium">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-sm text-hydra-text-dim leading-relaxed pl-4 border-l border-hydra-border/30 ml-0.5">
                    {item.detail}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* The Hydra Way */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative rounded-2xl border border-web4/30 bg-hydra-bg-card/50 p-6 lg:p-8 hover:border-web4/50 transition-colors duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-web4/5 to-transparent rounded-2xl pointer-events-none" />

          <div className="relative">
            <h3 className="text-xl font-semibold font-[family-name:var(--font-syne)] text-web4 mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-web4 animate-pulse" />
              The Hydra Way
            </h3>

            <ul className="space-y-6">
              {HYDRA_WAY_ITEMS.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-web4 flex-shrink-0" />
                    <span className="text-hydra-text text-base font-medium">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-sm text-hydra-text-muted leading-relaxed pl-4 border-l border-web4/30 ml-0.5">
                    {item.detail}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center text-hydra-text-muted mt-12 text-lg"
      >
        While their bot is still booting,{" "}
        <span className="text-web4 font-medium">yours already sniped 50 tokens</span>.
      </motion.p>
    </SectionWrapper>
  );
}
