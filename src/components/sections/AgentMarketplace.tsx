"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared";
import { Badge, Button } from "@/components/ui";
import { AGENTS } from "@/lib/constants";

export function AgentMarketplace() {
  return (
    <SectionWrapper id="agents">
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-web2 font-medium uppercase tracking-wider mb-4"
        >
          Agent Types
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4"
        >
          Agent Marketplace
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-hydra-text-muted max-w-2xl mx-auto"
        >
          Pre-built agent templates for every trading strategy. Deploy instantly or build your own.
        </motion.p>
      </div>

      {/* Agent grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AGENTS.map((agent, index) => {
          const isLive = agent.status === "live";

          return (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`
                group relative rounded-xl border p-6 bg-hydra-bg-card/50 backdrop-blur-sm
                transition-all duration-300 hover:bg-hydra-bg-card
                ${
                  isLive
                    ? "border-web4/30 hover:border-web4/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                    : "border-hydra-border hover:border-hydra-border-glow"
                }
              `}
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4">
                <Badge variant={isLive ? "live" : "coming"}>
                  {isLive ? "Live" : "Coming Soon"}
                </Badge>
              </div>

              {/* Risk & Capital badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-0.5 text-xs rounded-md border ${
                  agent.riskLevel === "High"
                    ? "bg-red-500/10 text-red-400 border-red-500/30"
                    : agent.riskLevel === "Medium"
                    ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                    : agent.riskLevel === "Low"
                    ? "bg-green-500/10 text-green-400 border-green-500/30"
                    : "bg-hydra-bg-elevated text-hydra-text-dim border-hydra-border"
                }`}>
                  {agent.riskLevel} Risk
                </span>
                <span className="px-2 py-0.5 text-xs rounded-md bg-hydra-bg-elevated text-hydra-text-muted border border-hydra-border">
                  Min: {agent.minCapital}
                </span>
              </div>

              {/* Content */}
              <h3
                className={`text-lg font-semibold mb-1 ${
                  isLive ? "text-hydra-text" : "text-hydra-text-muted"
                }`}
              >
                {agent.name}
              </h3>
              <p className={`text-sm font-medium mb-3 ${isLive ? "text-web4" : "text-hydra-text-dim"}`}>
                {agent.tagline}
              </p>
              <p className="text-sm text-hydra-text-muted leading-relaxed mb-4">
                {agent.description}
              </p>

              {/* Features list */}
              <div className="space-y-1.5">
                {agent.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-hydra-text-dim">
                    <span className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 ${isLive ? "bg-web4" : "bg-hydra-text-dim"}`} />
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
                {agent.features.length > 3 && (
                  <p className="text-xs text-hydra-text-dim pl-3">+{agent.features.length - 3} more features</p>
                )}
              </div>

              {/* Hover effect for live agents */}
              {isLive && (
                <div className="mt-4 pt-4 border-t border-hydra-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-web4">
                    Deploy now →
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Button variant="outline" size="lg">
          Build Your Own Agent →
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
