"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { SectionWrapper } from "@/components/shared";
import { Badge, Button } from "@/components/ui";
import { LAYERS, USER_JOURNEY } from "@/lib/constants";

const colorClasses: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  web1: {
    border: "border-web1/30 hover:border-web1/60",
    text: "text-web1",
    bg: "bg-web1",
    glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]",
  },
  web2: {
    border: "border-web2/30 hover:border-web2/60",
    text: "text-web2",
    bg: "bg-web2",
    glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]",
  },
  web25: {
    border: "border-web25/30 hover:border-web25/60",
    text: "text-web25",
    bg: "bg-web25",
    glow: "hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]",
  },
  web3: {
    border: "border-web3/30 hover:border-web3/60",
    text: "text-web3",
    bg: "bg-web3",
    glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]",
  },
  web4: {
    border: "border-web4/30 hover:border-web4/60",
    text: "text-web4",
    bg: "bg-web4",
    glow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]",
  },
};

export default function LayersPage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-web25/30 bg-web25/10 text-web25 text-sm font-medium mb-6">
              Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-6">
              5 Layers. One <span className="text-web4">Unified</span> Protocol.
            </h1>
            <p className="text-xl text-hydra-text-muted leading-relaxed mb-8">
              HydraClaw isn't just a trading bot — it's a full-stack protocol bridging
              Web1 through Web4 in one integrated ecosystem.
            </p>
            <p className="text-lg text-hydra-text-muted leading-relaxed">
              Each layer has a specific function, different target audience, and sustainable revenue model.
              Together, they form a mutually reinforcing flywheel.
            </p>
          </motion.div>

          {/* Layer indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center gap-2 mt-12"
          >
            {LAYERS.map((layer) => (
              <a
                key={layer.id}
                href={`#${layer.id}`}
                className={`w-12 h-2 rounded-full ${colorClasses[layer.color].bg} opacity-60 hover:opacity-100 transition-opacity`}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Layer Details */}
      {LAYERS.map((layer, index) => {
        const colors = colorClasses[layer.color];
        return (
          <SectionWrapper key={layer.id} id={layer.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`rounded-3xl border ${colors.border} ${colors.glow} bg-hydra-bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500`}
            >
              {/* Layer indicator bar */}
              <div className={`h-1 ${colors.bg}`} />

              <div className="p-8 lg:p-12">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                  <div>
                    <Badge variant={layer.color as "web1" | "web2" | "web25" | "web3" | "web4"} glow>
                      {layer.tag}
                    </Badge>
                    <h2 className={`text-3xl lg:text-4xl font-bold font-[family-name:var(--font-syne)] ${colors.text} mt-4`}>
                      {layer.name}
                    </h2>
                    <p className={`text-xl font-medium ${colors.text}/80 mt-2`}>
                      {layer.headline}
                    </p>
                  </div>
                  <div className={`text-8xl font-bold font-mono ${colors.text}/10`}>
                    0{index + 1}
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-hydra-text-muted leading-relaxed mb-8 max-w-4xl">
                  {layer.description}
                </p>

                {/* Key Capabilities */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-hydra-text-dim uppercase tracking-wider mb-4">
                    Key Capabilities
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {layer.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-lg bg-hydra-bg-elevated/50 border border-hydra-border/50"
                      >
                        <span className={`mt-1 w-2 h-2 rounded-full ${colors.bg} flex-shrink-0`} />
                        <p className="text-sm text-hydra-text-muted leading-relaxed">{detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-hydra-text-dim uppercase tracking-wider mb-4">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {layer.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 text-sm rounded-lg ${colors.border} bg-hydra-bg-elevated text-hydra-text border`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Audience & Revenue Grid */}
                <div className="grid lg:grid-cols-2 gap-6 pt-8 border-t border-hydra-border/50">
                  <div className="p-6 rounded-xl bg-hydra-bg-elevated/30 border border-hydra-border/50">
                    <h3 className="text-sm font-medium text-hydra-text-dim uppercase tracking-wider mb-3">
                      Target Audience
                    </h3>
                    <p className={`text-lg font-semibold ${colors.text} mb-2`}>{layer.audience}</p>
                    <p className="text-sm text-hydra-text-muted leading-relaxed">{layer.audienceDetail}</p>
                  </div>
                  <div className="p-6 rounded-xl bg-hydra-bg-elevated/30 border border-hydra-border/50">
                    <h3 className="text-sm font-medium text-hydra-text-dim uppercase tracking-wider mb-3">
                      Revenue Model
                    </h3>
                    <p className={`text-lg font-semibold ${colors.text} mb-2`}>{layer.revenue}</p>
                    <p className="text-sm text-hydra-text-muted leading-relaxed">{layer.revenueDetail}</p>
                  </div>
                </div>

                {/* Features for Web4 */}
                {"features" in layer && layer.features && (
                  <div className="mt-8 pt-8 border-t border-hydra-border/50">
                    <h3 className="text-sm font-medium text-hydra-text-dim uppercase tracking-wider mb-4">
                      Agent Capabilities
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {layer.features.map((feature: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-3 rounded-lg bg-web4/5 border border-web4/20"
                        >
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-web4 flex-shrink-0" />
                          <span className="text-sm text-hydra-text-muted leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </SectionWrapper>
        );
      })}

      {/* User Journey Section */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            User Journey Across Layers
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl mx-auto">
            How users interact with each layer on their journey from discovery to deployment
          </p>
        </motion.div>

        <div className="space-y-6">
          {USER_JOURNEY.map((step, index) => {
            const colors = colorClasses[step.color];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl border ${colors.border} bg-hydra-bg-card/50 p-6 lg:p-8`}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg}/10 border ${colors.border} flex items-center justify-center`}>
                      <span className={`text-2xl font-bold font-mono ${colors.text}`}>
                        {String(step.step).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className={`text-xl font-semibold ${colors.text} mb-2`}>{step.title}</h3>
                    <p className={`text-sm font-medium ${colors.text}/70 mb-3`}>{step.shortDesc}</p>
                    <p className="text-hydra-text-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* How Layers Connect */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-hydra-border bg-hydra-bg-card/50 p-8 lg:p-12"
        >
          <h2 className="text-3xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-6 text-center">
            How Layers Connect
          </h2>
          <p className="text-lg text-hydra-text-muted text-center mb-12 max-w-3xl mx-auto">
            Each layer doesn't stand alone — they form a mutually reinforcing flywheel
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                from: "Web 1.0",
                to: "Web 2.0",
                description: "SEO traffic from docs becomes dashboard sign-ups",
              },
              {
                from: "Web 2.0",
                to: "Web 2.5",
                description: "Dashboard users onboard wallets for trading",
              },
              {
                from: "Web 2.5",
                to: "Web 3.0",
                description: "Fiat users purchase $HYDRA to unlock features",
              },
              {
                from: "Web 3.0",
                to: "Web 4.0",
                description: "Token holders deploy AI agents for autonomous trading",
              },
            ].map((connection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-hydra-bg-elevated/50 border border-hydra-border/50"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-sm font-mono text-web4">{connection.from}</span>
                  <span className="text-hydra-text-dim">→</span>
                  <span className="text-sm font-mono text-web4">{connection.to}</span>
                </div>
                <p className="text-sm text-hydra-text-muted">{connection.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-8">
            {LAYERS.map((layer) => (
              <span
                key={layer.id}
                className={`w-8 h-8 rounded-full ${colorClasses[layer.color].bg} border-2 border-hydra-bg`}
              />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            All Layers Working as One
          </h2>
          <p className="text-lg text-hydra-text-muted mb-8 max-w-2xl mx-auto">
            Start your journey from any layer — everything is connected in one integrated protocol
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" glow>
              Start at Layer 1 (Docs)
            </Button>
            <Button variant="outline" size="lg">
              Jump to Layer 4 (Agents)
            </Button>
          </div>
        </motion.div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
