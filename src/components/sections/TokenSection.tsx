"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared";
import { Button, Badge } from "@/components/ui";
import { TOKEN_TIERS, TOKENOMICS, TOKEN_CONTRACT_ADDRESS } from "@/lib/constants";

export function TokenSection() {
  return (
    <SectionWrapper id="token">
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-web3 font-medium uppercase tracking-wider mb-4"
        >
          Tokenomics
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4"
        >
          <span className="text-web3">$HYDRA</span> Token
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-hydra-text-muted max-w-2xl mx-auto"
        >
          Stake for access. Earn protocol revenue. Govern the swarm.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Token info card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-web3/30 bg-hydra-bg-card/50 p-6 lg:p-8 relative overflow-hidden hover:border-web3/50 transition-colors duration-300"
        >
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-web3/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            {/* Token badge */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-web3 to-web3/50 flex items-center justify-center">
                <span className="text-xl font-bold text-hydra-bg">H</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-web3">
                  $HYDRA
                </h3>
                <p className="text-sm text-hydra-text-muted">Protocol Token</p>
              </div>
            </div>

            {/* Token badge */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="web4" glow>Protocol Token</Badge>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-hydra-bg-elevated/50 border border-hydra-border">
                <p className="text-xs text-hydra-text-dim uppercase tracking-wider mb-1">Launch</p>
                <p className="text-sm text-hydra-text font-medium">Fair Launch</p>
              </div>
              <div className="p-4 rounded-lg bg-hydra-bg-elevated/50 border border-hydra-border">
                <p className="text-xs text-hydra-text-dim uppercase tracking-wider mb-1">Utility</p>
                <p className="text-sm text-hydra-text font-medium">Access + Revenue</p>
              </div>
            </div>

            {/* Contract Address */}
            <div className="mb-6">
              <p className="text-xs text-hydra-text-dim uppercase tracking-wider mb-2">Contract Address</p>
              <div className="w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg border border-hydra-border bg-hydra-bg-elevated/50">
                <code className="text-xs font-mono text-hydra-text-muted">
                  {TOKEN_CONTRACT_ADDRESS}
                </code>
                <span className="text-xs text-web3 bg-web3/10 px-2 py-0.5 rounded-full">Coming Soon</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="amber" glow className="flex-1">
                Buy $HYDRA →
              </Button>
              <Button variant="outline" className="flex-1">
                View Chart →
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Tokenomics breakdown */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl border border-hydra-border bg-hydra-bg-card/50 p-6 lg:p-8"
        >
          <h3 className="text-lg font-semibold font-[family-name:var(--font-syne)] text-hydra-text mb-6">
            Token Distribution
          </h3>

          {/* Distribution bars with details */}
          <div className="space-y-5">
            {TOKENOMICS.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-hydra-text-muted font-medium">{item.label}</span>
                  <span className={`font-mono font-medium text-${item.color}`}>
                    {item.percentage}%
                  </span>
                </div>
                <div className="h-2.5 rounded-full bg-hydra-bg-elevated overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className={`h-full rounded-full bg-${item.color}`}
                  />
                </div>
                <p className="text-xs text-hydra-text-dim leading-relaxed pl-2 border-l border-hydra-border/30">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Visual pie representation */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {/* Pie slices */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeDasharray="100.53 150.8"
                  strokeDashoffset="0"
                  className="text-web4"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeDasharray="50.27 200.5"
                  strokeDashoffset="-100.53"
                  className="text-web2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeDasharray="37.7 213.1"
                  strokeDashoffset="-150.8"
                  className="text-web1"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeDasharray="37.7 213.1"
                  strokeDashoffset="-188.5"
                  className="text-web25"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeDasharray="25.13 225.66"
                  strokeDashoffset="-226.2"
                  className="text-web3"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tier access table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <h3 className="text-xl font-semibold font-[family-name:var(--font-syne)] text-hydra-text text-center mb-8">
          Holder Tiers
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOKEN_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className={`
                rounded-xl border p-6 bg-hydra-bg-card/50 hover:bg-hydra-bg-card transition-all duration-300
                ${tier.name === "Diamond" ? "border-web2/50 hover:border-web2 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]" : "border-hydra-border hover:border-hydra-border-glow"}
              `}
            >
              <div className="text-3xl mb-3">{tier.icon}</div>
              <h4 className="text-lg font-semibold text-hydra-text mb-1">{tier.name}</h4>
              <p className="text-xs text-hydra-text-muted mb-2">{tier.requirement}</p>
              <p className="text-sm text-hydra-text-dim mb-4 leading-relaxed">{tier.description}</p>
              <ul className="space-y-2">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="text-sm text-hydra-text-muted flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-web4 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
