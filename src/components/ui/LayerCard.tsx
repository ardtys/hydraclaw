"use client";

import { motion } from "framer-motion";
import { Badge } from "./Badge";

interface LayerCardProps {
  layer: {
    id: string;
    tag: string;
    name: string;
    headline: string;
    description: string;
    details: readonly string[];
    stack: readonly string[];
    audience: string;
    audienceDetail: string;
    revenue: string;
    revenueDetail: string;
    color: string;
    features?: readonly string[];
  };
  index: number;
  isActive?: boolean;
}

const colorClasses: Record<string, { border: string; text: string; glow: string; bg: string }> = {
  web1: {
    border: "border-web1/30 hover:border-web1/60",
    text: "text-web1",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    bg: "bg-web1/5",
  },
  web2: {
    border: "border-web2/30 hover:border-web2/60",
    text: "text-web2",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    bg: "bg-web2/5",
  },
  web25: {
    border: "border-web25/30 hover:border-web25/60",
    text: "text-web25",
    glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
    bg: "bg-web25/5",
  },
  web3: {
    border: "border-web3/30 hover:border-web3/60",
    text: "text-web3",
    glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    bg: "bg-web3/5",
  },
  web4: {
    border: "border-web4/30 hover:border-web4/60",
    text: "text-web4",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    bg: "bg-web4/5",
  },
};

export function LayerCard({ layer, index }: LayerCardProps) {
  const colors = colorClasses[layer.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        relative rounded-2xl border bg-hydra-bg-card/50 backdrop-blur-sm
        transition-all duration-500 overflow-hidden
        ${colors.border} ${colors.glow}
      `}
    >
      {/* Layer number indicator */}
      <div className={`absolute top-0 left-0 w-1 h-full ${colors.bg}`} />

      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
          <Badge variant={layer.color as "web1" | "web2" | "web25" | "web3" | "web4"} glow>
            {layer.tag}
          </Badge>
          <h3 className={`text-xl lg:text-2xl font-bold font-[family-name:var(--font-syne)] ${colors.text}`}>
            {layer.name}
          </h3>
        </div>

        {/* Headline */}
        <p className={`text-lg font-medium mb-4 ${colors.text}`}>
          {layer.headline}
        </p>

        {/* Description */}
        <p className="text-hydra-text-muted text-base mb-6 leading-relaxed">
          {layer.description}
        </p>

        {/* Details list */}
        <div className="mb-6 space-y-2">
          <p className="text-xs text-hydra-text-dim uppercase tracking-wider mb-3">Key Capabilities</p>
          {layer.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-${layer.color}`} />
              <p className="text-sm text-hydra-text-muted leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-xs text-hydra-text-dim uppercase tracking-wider mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {layer.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-hydra-bg-elevated text-hydra-text-muted border border-hydra-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Grid info - Audience & Revenue */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-hydra-border/50">
          <div>
            <p className="text-xs text-hydra-text-dim uppercase tracking-wider mb-2">Target Audience</p>
            <p className={`text-sm font-medium mb-1 ${colors.text}`}>{layer.audience}</p>
            <p className="text-sm text-hydra-text-muted leading-relaxed">{layer.audienceDetail}</p>
          </div>
          <div>
            <p className="text-xs text-hydra-text-dim uppercase tracking-wider mb-2">Revenue Model</p>
            <p className={`text-sm font-medium mb-1 ${colors.text}`}>{layer.revenue}</p>
            <p className="text-sm text-hydra-text-muted leading-relaxed">{layer.revenueDetail}</p>
          </div>
        </div>

        {/* Features for Web 4.0 */}
        {layer.features && (
          <div className="mt-6 pt-6 border-t border-hydra-border/50">
            <p className="text-xs text-hydra-text-dim uppercase tracking-wider mb-3">Agent Capabilities</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {layer.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm text-hydra-text-muted">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-web4 flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
