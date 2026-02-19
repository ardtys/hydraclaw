"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { SectionWrapper } from "@/components/shared";
import { Button } from "@/components/ui";
import { OLD_WAY_ITEMS, HYDRA_WAY_ITEMS, BENCHMARK_DATA, BENCHMARK_EXPLANATION } from "@/lib/constants";

export default function ProtocolPage() {
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
              Protocol Overview
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-6">
              Why <span className="text-web4">HydraClaw</span>?
            </h1>
            <p className="text-xl text-hydra-text-muted leading-relaxed mb-8">
              Existing trading bots in the market are full of problems: bloated, slow, expensive, and closed-source.
              HydraClaw takes a different approach — lightweight, open, and designed for edge hardware.
            </p>
            <p className="text-lg text-hydra-text-muted leading-relaxed">
              We're building a next-generation trading bot protocol that prioritizes efficiency, transparency,
              and accessibility. No expensive servers needed, no deep technical knowledge required —
              just $10 hardware and a few clicks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Problems with Current Trading Bots
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl">
            The crypto trading bot industry is dominated by inefficient and exploitative solutions.
            Here are the main problems we've identified:
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {OLD_WAY_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 lg:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-hydra-text mb-3">
                    {item.title}
                  </h3>
                  <p className="text-hydra-text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* The Solution Section */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-web4 mb-4">
            The HydraClaw Solution
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl">
            We built HydraClaw from the ground up with a different philosophy:
            minimalist, efficient, and open to everyone.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {HYDRA_WAY_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-web4/30 bg-web4/5 p-6 lg:p-8 hover:border-web4/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-web4/20 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-web4 animate-pulse" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-web4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-hydra-text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Technical Deep Dive */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Technical Deep Dive
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl mx-auto">
            {BENCHMARK_EXPLANATION.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {BENCHMARK_EXPLANATION.points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-hydra-border bg-hydra-bg-card/50 p-6"
            >
              <h3 className="text-lg font-semibold text-web4 mb-3">{point.title}</h3>
              <p className="text-hydra-text-muted leading-relaxed">{point.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Benchmark Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-hydra-border bg-hydra-bg-card/50 overflow-hidden"
        >
          <div className="p-6 border-b border-hydra-border">
            <h3 className="text-xl font-semibold text-hydra-text">Performance Benchmark</h3>
            <p className="text-sm text-hydra-text-muted mt-1">
              Tested on 0.8GHz ARM edge hardware (Orange Pi Zero)
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-hydra-border bg-hydra-bg-elevated/50">
                  <th className="text-left py-4 px-6 text-sm font-medium text-hydra-text-muted">Metric</th>
                  <th className="text-center py-4 px-6 text-sm font-medium text-web4">HydraClaw</th>
                  <th className="text-center py-4 px-6 text-sm font-medium text-hydra-text-muted">Node.js</th>
                  <th className="text-center py-4 px-6 text-sm font-medium text-hydra-text-muted">Python</th>
                  <th className="text-center py-4 px-6 text-sm font-medium text-hydra-text-muted">Go</th>
                </tr>
              </thead>
              <tbody>
                {BENCHMARK_DATA.map((row) => (
                  <tr key={row.metric} className="border-b border-hydra-border/50">
                    <td className="py-4 px-6 text-sm text-hydra-text font-medium">{row.metric}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex px-3 py-1 rounded-md bg-web4/10 text-web4 font-mono text-sm font-semibold">
                        {row.hydraclaw}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center text-sm text-hydra-text-muted font-mono">{row.node}</td>
                    <td className="py-4 px-6 text-center text-sm text-hydra-text-muted font-mono">{row.python}</td>
                    <td className="py-4 px-6 text-center text-sm text-hydra-text-muted font-mono">{row.go}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Core Principles */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Core Principles
          </h2>
          <p className="text-lg text-hydra-text-muted max-w-3xl mx-auto">
            The fundamental principles guiding HydraClaw development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Lightweight First",
              description: "Every feature must consider its impact on binary size and memory usage. If it's not essential, it doesn't get in.",
              color: "web1",
            },
            {
              title: "Open by Default",
              description: "All source code is open and auditable. No black boxes, no hidden fees, no data collection.",
              color: "web2",
            },
            {
              title: "Edge-Native",
              description: "Designed for cheap, low-power hardware. Deploy on Raspberry Pi, Orange Pi, or even a router.",
              color: "web3",
            },
            {
              title: "Community Owned",
              description: "Token holders have governance power. The roadmap is determined by the community, not VCs or founders.",
              color: "web4",
            },
          ].map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border border-${principle.color}/30 bg-${principle.color}/5 p-6`}
            >
              <h3 className={`text-lg font-semibold text-${principle.color} mb-3`}>{principle.title}</h3>
              <p className="text-sm text-hydra-text-muted leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-web4/30 bg-gradient-to-br from-web4/10 to-transparent p-8 lg:p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4">
            Ready to Join the Swarm?
          </h2>
          <p className="text-lg text-hydra-text-muted mb-8 max-w-2xl mx-auto">
            Start deploying your first agent in minutes. No expensive servers needed,
            no coding experience required — just $10 hardware and a few clicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" glow>
              Deploy Your First Agent
            </Button>
            <Button variant="outline" size="lg">
              Read the Docs
            </Button>
          </div>
        </motion.div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
