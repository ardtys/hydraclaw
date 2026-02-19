"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { SectionWrapper } from "@/components/shared";
import { Badge, Button } from "@/components/ui";
import { AGENTS } from "@/lib/constants";

export default function AgentsPage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-web2/30 bg-web2/10 text-web2 text-sm font-medium mb-6">
              Agent Types
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-6">
              Agent <span className="text-web4">Marketplace</span>
            </h1>
            <p className="text-xl text-hydra-text-muted leading-relaxed mb-8">
              Pre-built agent templates for every trading strategy.
              Deploy instantly or customize to your needs.
            </p>
            <p className="text-lg text-hydra-text-muted leading-relaxed">
              Each agent is a standalone Rust binary that runs on edge hardware.
              Lightweight, fast, and fully customizable.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { value: "6", label: "Agent Types" },
              { value: "2", label: "Live Now" },
              { value: "<5MB", label: "Binary Size" },
              { value: "<10ms", label: "Boot Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-3xl font-bold font-[family-name:var(--font-syne)] text-web4">{stat.value}</span>
                <p className="text-sm text-hydra-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Agent Cards */}
      <SectionWrapper>
        <div className="space-y-8">
          {AGENTS.map((agent, index) => {
            const isLive = agent.status === "live";
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  rounded-3xl border bg-hydra-bg-card/50 backdrop-blur-sm overflow-hidden
                  transition-all duration-500
                  ${isLive
                    ? "border-web4/30 hover:border-web4/60 hover:shadow-[0_0_50px_rgba(16,185,129,0.15)]"
                    : "border-hydra-border hover:border-hydra-border-glow"
                  }
                `}
              >
                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge variant={isLive ? "live" : "coming"}>
                          {isLive ? "Live" : "Coming Soon"}
                        </Badge>
                        <span className={`px-3 py-1 text-xs rounded-full border ${
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
                        <span className="px-3 py-1 text-xs rounded-full bg-hydra-bg-elevated text-hydra-text-muted border border-hydra-border">
                          Min: {agent.minCapital}
                        </span>
                      </div>
                      <h2 className={`text-3xl font-bold font-[family-name:var(--font-syne)] mb-2 ${isLive ? "text-hydra-text" : "text-hydra-text-muted"}`}>
                        {agent.name}
                      </h2>
                      <p className={`text-lg font-medium mb-4 ${isLive ? "text-web4" : "text-hydra-text-dim"}`}>
                        {agent.tagline}
                      </p>
                      <p className="text-hydra-text-muted leading-relaxed max-w-3xl">
                        {agent.description}
                      </p>
                    </div>
                    {isLive && (
                      <Button variant="primary" glow className="flex-shrink-0">
                        Deploy Now
                      </Button>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-hydra-text-dim uppercase tracking-wider mb-4">
                      Features & Capabilities
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {agent.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className={`flex items-start gap-3 p-4 rounded-lg border ${
                            isLive
                              ? "bg-web4/5 border-web4/20"
                              : "bg-hydra-bg-elevated/50 border-hydra-border/50"
                          }`}
                        >
                          <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${isLive ? "bg-web4" : "bg-hydra-text-dim"}`} />
                          <p className="text-sm text-hydra-text-muted leading-relaxed">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technical specs for live agents */}
                  {isLive && (
                    <div className="pt-6 border-t border-hydra-border/50">
                      <h3 className="text-sm font-medium text-hydra-text-dim uppercase tracking-wider mb-4">
                        Technical Specifications
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                          { label: "Binary Size", value: "3.4MB" },
                          { label: "RAM Usage", value: "<5MB" },
                          { label: "Boot Time", value: "<10ms" },
                          { label: "Language", value: "Rust" },
                        ].map((spec) => (
                          <div key={spec.label} className="p-4 rounded-lg bg-hydra-bg-elevated/50 border border-hydra-border/50">
                            <p className="text-xs text-hydra-text-dim mb-1">{spec.label}</p>
                            <p className="text-lg font-mono font-semibold text-web4">{spec.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* How Agents Work */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            How Agents Work
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl mx-auto">
            The lifecycle of a HydraClaw agent from deployment to execution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Configure",
              description: "Edit hydra.toml to set strategy, risk parameters, and target tokens. All configuration in one human-readable file.",
            },
            {
              step: "02",
              title: "Deploy",
              description: "Run `hydraclaw deploy` to compile and start the agent. Binary is active within milliseconds.",
            },
            {
              step: "03",
              title: "Monitor",
              description: "Agent runs 24/7 and sends updates to the dashboard. Real-time PnL tracking and alert notifications.",
            },
            {
              step: "04",
              title: "Evolve",
              description: "Agent collects data and improves strategy over time. On-device ML for continuous optimization.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-hydra-border bg-hydra-bg-card/50 p-6"
            >
              <span className="text-4xl font-bold font-mono text-web4/20">{item.step}</span>
              <h3 className="text-lg font-semibold text-hydra-text mt-4 mb-3">{item.title}</h3>
              <p className="text-sm text-hydra-text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Swarm Intelligence */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-web4/30 bg-gradient-to-br from-web4/10 to-transparent p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="web4" glow>Coming Soon</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mt-6 mb-4">
                Swarm Intelligence
              </h2>
              <p className="text-lg text-hydra-text-muted leading-relaxed mb-6">
                Multiple agents can communicate and collaborate through a mesh network.
                Swarm Commander coordinates strategies for maximum efficiency.
              </p>
              <ul className="space-y-3">
                {[
                  "Agent-to-agent encrypted communication via libp2p",
                  "Coordinated entry/exit to avoid slippage",
                  "Portfolio-level risk management across agents",
                  "Signal sharing for collective intelligence",
                  "Automatic failover if one agent goes down",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-hydra-text-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-web4 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-hydra-bg-elevated/50 border border-hydra-border/50 flex items-center justify-center">
                {/* Visual representation of swarm */}
                <div className="relative w-48 h-48">
                  {/* Center node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-web4/20 border-2 border-web4 flex items-center justify-center">
                    <span className="text-xs font-mono text-web4">CMD</span>
                  </div>
                  {/* Orbiting nodes */}
                  {[0, 72, 144, 216, 288].map((deg, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute w-10 h-10 rounded-full bg-web4/10 border border-web4/50 flex items-center justify-center"
                      style={{
                        top: `${50 + 40 * Math.sin((deg * Math.PI) / 180)}%`,
                        left: `${50 + 40 * Math.cos((deg * Math.PI) / 180)}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        delay: idx * 0.3,
                        repeat: Infinity,
                      }}
                    >
                      <span className="text-[10px] font-mono text-web4/70">A{idx + 1}</span>
                    </motion.div>
                  ))}
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {[0, 72, 144, 216, 288].map((deg) => (
                      <line
                        key={deg}
                        x1="50%"
                        y1="50%"
                        x2={`${50 + 40 * Math.cos((deg * Math.PI) / 180)}%`}
                        y2={`${50 + 40 * Math.sin((deg * Math.PI) / 180)}%`}
                        stroke="rgba(16,185,129,0.3)"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Build Your Own */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Build Your Own Agent
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl mx-auto">
            Not satisfied with pre-built agents? Build your own custom agent with our SDK.
          </p>
        </motion.div>

        <div className="rounded-2xl border border-hydra-border bg-hydra-bg-card/50 overflow-hidden">
          <div className="p-4 bg-hydra-bg-elevated/50 border-b border-hydra-border flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/50" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <span className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-4 text-sm text-hydra-text-muted font-mono">custom_agent.rs</span>
          </div>
          <pre className="p-6 overflow-x-auto text-sm">
            <code className="text-hydra-text-muted font-mono">
{`use hydraclaw_sdk::prelude::*;

#[agent]
pub struct CustomAgent {
    config: AgentConfig,
    strategy: Box<dyn Strategy>,
}

impl CustomAgent {
    pub fn new(config: AgentConfig) -> Self {
        Self {
            config,
            strategy: Box::new(MyCustomStrategy::new()),
        }
    }
}

#[async_trait]
impl Agent for CustomAgent {
    async fn on_new_token(&self, token: Token) -> Result<Action> {
        // Your custom logic here
        let analysis = self.strategy.analyze(&token).await?;

        if analysis.should_buy {
            Ok(Action::Buy {
                token: token.address,
                amount: self.config.max_position,
                slippage: self.config.slippage,
            })
        } else {
            Ok(Action::Skip)
        }
    }

    async fn on_price_change(&self, token: Token, change: f64) -> Result<Action> {
        // React to price movements
        if change > self.config.take_profit {
            Ok(Action::Sell { token: token.address, percentage: 100 })
        } else if change < -self.config.stop_loss {
            Ok(Action::Sell { token: token.address, percentage: 100 })
        } else {
            Ok(Action::Hold)
        }
    }
}`}
            </code>
          </pre>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Read SDK Documentation
          </Button>
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
            Ready to Deploy Your First Agent?
          </h2>
          <p className="text-lg text-hydra-text-muted mb-8 max-w-2xl mx-auto">
            Start with Sniper Agent or Copy-Trade Agent that are already live.
            Setup in 5 minutes, no coding required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" glow>
              Deploy Sniper Agent
            </Button>
            <Button variant="amber" size="lg">
              Deploy Copy-Trade Agent
            </Button>
          </div>
        </motion.div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
