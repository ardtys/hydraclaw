"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared";
import { ROADMAP } from "@/lib/constants";

export function Roadmap() {
  return (
    <SectionWrapper>
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-web25 font-medium uppercase tracking-wider mb-4"
        >
          Timeline
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4"
        >
          Roadmap
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-hydra-text-muted max-w-2xl mx-auto"
        >
          From genesis to dominance — our path to building the most powerful agent swarm
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Horizontal line (desktop) */}
        <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-hydra-border" />

        {/* Vertical line (mobile) */}
        <div className="lg:hidden absolute top-0 bottom-0 left-4 w-px bg-hydra-border" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
          {ROADMAP.map((phase, index) => {
            const isCurrent = phase.status === "current";

            return (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative pl-10 lg:pl-0"
              >
                {/* Timeline dot (mobile) */}
                <div
                  className={`
                    lg:hidden absolute left-2 top-0 w-4 h-4 rounded-full border-2 transform -translate-x-1/2
                    ${
                      isCurrent
                        ? "bg-web4 border-web4 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                        : "bg-hydra-bg border-hydra-border-glow"
                    }
                  `}
                />

                {/* Timeline dot (desktop) */}
                <div className="hidden lg:flex justify-center mb-6">
                  <div
                    className={`
                      w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 bg-hydra-bg
                      ${
                        isCurrent
                          ? "border-web4 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                          : "border-hydra-border-glow"
                      }
                    `}
                  >
                    <div className={`w-2 h-2 rounded-full ${isCurrent ? "bg-web4 animate-pulse" : "bg-hydra-text-dim"}`} />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`
                    rounded-xl border p-6 bg-hydra-bg-card/50 transition-all duration-300
                    ${
                      isCurrent
                        ? "border-web4/30 hover:border-web4/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                        : "border-hydra-border hover:border-hydra-border-glow"
                    }
                  `}
                >
                  {/* Quarter badge */}
                  <div
                    className={`
                      inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium mb-3
                      ${
                        isCurrent
                          ? "bg-web4/10 text-web4 border border-web4/30"
                          : "bg-hydra-bg-elevated text-hydra-text-muted border border-hydra-border"
                      }
                    `}
                  >
                    {phase.quarter}
                  </div>

                  {/* Phase name */}
                  <h3
                    className={`text-xl font-semibold font-[family-name:var(--font-syne)] mb-2 ${
                      isCurrent ? "text-web4" : "text-hydra-text"
                    }`}
                  >
                    {phase.phase}
                  </h3>

                  {/* Phase description */}
                  <p className="text-sm text-hydra-text-muted mb-4 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-hydra-text-muted"
                      >
                        <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${isCurrent ? "bg-web4" : "bg-hydra-text-dim"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
