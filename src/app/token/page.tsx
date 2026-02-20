"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { SectionWrapper } from "@/components/shared";
import { Badge, Button } from "@/components/ui";
import { TOKEN_TIERS, TOKENOMICS } from "@/lib/constants";

export default function TokenPage() {
  return (
    <main className="min-h-screen bg-hydra-bg relative overflow-hidden">
      <div className="noise" />
      <div className="grid-pattern" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-web3/30 bg-web3/10 text-web3 text-sm font-medium mb-6">
              Tokenomics
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-6">
              <span className="text-web3">$HYDRA</span> Token
            </h1>
            <p className="text-xl text-hydra-text-muted leading-relaxed mb-8">
              Stake for access. Earn protocol revenue. Govern the swarm.
            </p>
            <p className="text-lg text-hydra-text-muted leading-relaxed">
              $HYDRA isn't just a governance token — it's the key to accessing
              the entire HydraClaw ecosystem and earning a share of protocol revenue.
            </p>
          </motion.div>

          {/* Token Logo & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center mt-12"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-web3 to-web3/50 flex items-center justify-center mb-8">
              <span className="text-4xl font-bold text-hydra-bg">H</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="web4" glow>Protocol Token</Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg">
                View Chart
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Token Utility */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Token Utility
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl mx-auto">
            $HYDRA provides real value to holders through various utilities within the ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Access Tiers",
              description: "The amount of $HYDRA you hold determines your access level to platform features. More tokens means more powerful tools at your disposal.",
              icon: "🔑",
              color: "web3",
            },
            {
              title: "Revenue Sharing",
              description: "Stakers receive a percentage of protocol fees. Revenue from agent marketplace, SaaS subscriptions, and fiat conversion is distributed to stakers.",
              icon: "💰",
              color: "web4",
            },
            {
              title: "Governance",
              description: "Vote on parameter changes, new features, and treasury allocation proposals. 1 token = 1 vote, with quadratic voting for fairness.",
              icon: "🗳️",
              color: "web2",
            },
            {
              title: "Marketplace Currency",
              description: "$HYDRA is the primary currency in the agent marketplace. Buy proven strategies from top performers, or sell your strategies to earn passive income.",
              icon: "🏪",
              color: "web25",
            },
            {
              title: "Staking Rewards",
              description: "Lock $HYDRA for a specific period and earn additional APY. Longer lock = higher rewards. Auto-compound available.",
              icon: "📈",
              color: "web1",
            },
            {
              title: "Priority Access",
              description: "Holders get early access to new features, beta programs, and exclusive events. Diamond tier gets a direct line to the core team.",
              icon: "⚡",
              color: "web3",
            },
          ].map((utility, index) => (
            <motion.div
              key={utility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border border-${utility.color}/30 bg-${utility.color}/5 p-6 hover:border-${utility.color}/50 transition-colors`}
            >
              <span className="text-4xl mb-4 block">{utility.icon}</span>
              <h3 className={`text-lg font-semibold text-${utility.color} mb-3`}>{utility.title}</h3>
              <p className="text-sm text-hydra-text-muted leading-relaxed">{utility.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Token Distribution */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Token Distribution
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl mx-auto">
            Fair launch with focus on community ownership
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Distribution Details */}
          <div className="space-y-6">
            {TOKENOMICS.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-hydra-border bg-hydra-bg-card/50 p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-hydra-text">{item.label}</h3>
                  <span className={`text-2xl font-bold font-mono text-${item.color}`}>
                    {item.percentage}%
                  </span>
                </div>
                <div className="h-3 rounded-full bg-hydra-bg-elevated overflow-hidden mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    className={`h-full rounded-full bg-${item.color}`}
                  />
                </div>
                <p className="text-sm text-hydra-text-muted leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Pie Chart */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
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
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl font-bold text-hydra-text">100%</span>
                  <p className="text-sm text-hydra-text-muted">Total Supply</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Holder Tiers */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Holder Tiers
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl mx-auto">
            The more $HYDRA you hold, the more benefits you receive
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOKEN_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                rounded-2xl border p-6 bg-hydra-bg-card/50 transition-all duration-300
                ${tier.name === "Diamond"
                  ? "border-web2/50 hover:border-web2 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]"
                  : "border-hydra-border hover:border-hydra-border-glow"
                }
              `}
            >
              <span className="text-5xl mb-4 block">{tier.icon}</span>
              <h3 className={`text-2xl font-bold font-[family-name:var(--font-syne)] mb-2 ${
                tier.name === "Diamond" ? "text-web2" : "text-hydra-text"
              }`}>
                {tier.name}
              </h3>
              <p className="text-sm font-mono text-web3 mb-3">{tier.requirement}</p>
              <p className="text-sm text-hydra-text-muted mb-6 leading-relaxed">{tier.description}</p>

              <div className="space-y-3 pt-4 border-t border-hydra-border/50">
                <p className="text-xs text-hydra-text-dim uppercase tracking-wider">Benefits</p>
                {tier.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      tier.name === "Diamond" ? "bg-web2" : "bg-web4"
                    }`} />
                    <span className="text-sm text-hydra-text-muted">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Staking */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-web4/30 bg-gradient-to-br from-web4/10 to-transparent p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="web4" glow>Staking</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mt-6 mb-4">
                Stake & Earn
              </h2>
              <p className="text-lg text-hydra-text-muted leading-relaxed mb-6">
                Lock $HYDRA to earn additional APY and a share of protocol revenue.
                The longer the lock period, the higher the rewards.
              </p>

              <div className="space-y-4">
                {[
                  { period: "30 Days", apy: "5%", bonus: "1x Revenue Share" },
                  { period: "90 Days", apy: "12%", bonus: "1.5x Revenue Share" },
                  { period: "180 Days", apy: "25%", bonus: "2x Revenue Share" },
                  { period: "365 Days", apy: "50%", bonus: "3x Revenue Share" },
                ].map((stake, idx) => (
                  <div
                    key={stake.period}
                    className="flex items-center justify-between p-4 rounded-lg bg-hydra-bg-elevated/50 border border-hydra-border/50"
                  >
                    <span className="text-hydra-text font-medium">{stake.period}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-web4 font-mono font-semibold">{stake.apy} APY</span>
                      <span className="text-xs text-hydra-text-muted">{stake.bonus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-hydra-border bg-hydra-bg-card/50 p-6">
                <h3 className="text-lg font-semibold text-hydra-text mb-4">Revenue Sources</h3>
                <div className="space-y-3">
                  {[
                    { source: "Agent Marketplace", percentage: "2-5% per transaction" },
                    { source: "SaaS Subscriptions", percentage: "20% of revenue" },
                    { source: "Fiat Conversion", percentage: "0.5-1% spread" },
                    { source: "Protocol Fees", percentage: "0.1% per trade" },
                  ].map((rev) => (
                    <div key={rev.source} className="flex items-center justify-between">
                      <span className="text-sm text-hydra-text-muted">{rev.source}</span>
                      <span className="text-sm font-mono text-web4">{rev.percentage}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-web3/30 bg-web3/5 p-6">
                <h3 className="text-lg font-semibold text-web3 mb-2">Auto-Compound</h3>
                <p className="text-sm text-hydra-text-muted leading-relaxed">
                  Enable auto-compound to automatically restake rewards.
                  Maximize APY without manual claiming.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* How to Buy */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            How to Buy $HYDRA
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl mx-auto">
            Simple steps to acquire $HYDRA tokens
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-web4/30 bg-hydra-bg-card/50 p-8"
          >
            <Badge variant="web4" glow>Get Started</Badge>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mt-4 mb-6">
              Buy $HYDRA
            </h3>
            <div className="space-y-4">
              {[
                "Install a compatible Web3 wallet",
                "Fund your wallet with cryptocurrency",
                "Visit the official HydraClaw exchange",
                "Connect wallet and set purchase amount",
                "Confirm transaction and receive $HYDRA",
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-web4/20 flex items-center justify-center">
                    <span className="text-sm font-mono font-semibold text-web4">{idx + 1}</span>
                  </span>
                  <p className="text-hydra-text-muted pt-1">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Join the Swarm
          </h2>
          <p className="text-lg text-hydra-text-muted mb-8 max-w-2xl mx-auto">
            Become a $HYDRA holder and start earning protocol revenue while accessing
            powerful AI trading agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Read Tokenomics Paper
            </Button>
          </div>
        </motion.div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
