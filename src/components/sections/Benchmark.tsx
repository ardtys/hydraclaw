"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared";
import { BENCHMARK_DATA, BENCHMARK_EXPLANATION } from "@/lib/constants";

export function Benchmark() {
  return (
    <SectionWrapper>
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-web1 font-medium uppercase tracking-wider mb-4"
        >
          Performance
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4"
        >
          Benchmarks Don&apos;t Lie
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-hydra-text-muted max-w-2xl mx-auto"
        >
          Tested on 0.8GHz ARM edge hardware. Static Rust binaries — zero runtime dependencies.
        </motion.p>
      </div>

      {/* Benchmark table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="overflow-x-auto"
      >
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-hydra-border">
              <th className="text-left py-4 px-4 text-sm font-medium text-hydra-text-muted">
                Metric
              </th>
              <th className="text-center py-4 px-4 text-sm font-medium text-web4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-web4/10 border border-web4/30">
                  HydraClaw (Rust)
                </div>
              </th>
              <th className="text-center py-4 px-4 text-sm font-medium text-hydra-text-muted">
                Node Bots (TS)
              </th>
              <th className="text-center py-4 px-4 text-sm font-medium text-hydra-text-muted">
                Python Bots
              </th>
              <th className="text-center py-4 px-4 text-sm font-medium text-hydra-text-muted">
                Go Bots
              </th>
            </tr>
          </thead>
          <tbody>
            {BENCHMARK_DATA.map((row, index) => (
              <motion.tr
                key={row.metric}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="border-b border-hydra-border/50 hover:bg-hydra-bg-elevated/30 transition-colors"
              >
                <td className="py-4 px-4 text-sm text-hydra-text font-medium">
                  {row.metric}
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-web4/10 text-web4 font-mono text-sm font-semibold border border-web4/20">
                    {row.hydraclaw}
                  </span>
                </td>
                <td className="py-4 px-4 text-center text-sm text-hydra-text-muted font-mono">
                  {row.node}
                </td>
                <td className="py-4 px-4 text-center text-sm text-hydra-text-muted font-mono">
                  {row.python}
                </td>
                <td className="py-4 px-4 text-center text-sm text-hydra-text-muted font-mono">
                  {row.go}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 p-4 rounded-lg border border-hydra-border bg-hydra-bg-card/30 flex items-start gap-3"
      >
        <span className="text-web3 text-lg">*</span>
        <p className="text-sm text-hydra-text-muted leading-relaxed">
          Benchmarked on a 0.8GHz ARM edge device (Orange Pi Zero). HydraClaw agents are static Rust binaries
          with zero runtime dependencies. Node.js competitors require npm, Python requires interpreter + packages.
          Go is closest competitor but still 2-3x larger binary size.
        </p>
      </motion.div>

      {/* Performance explanation section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65 }}
        className="mt-12 rounded-2xl border border-web4/30 bg-hydra-bg-card/50 p-6 lg:p-8"
      >
        <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] text-web4 mb-2">
          {BENCHMARK_EXPLANATION.title}
        </h3>
        <p className="text-hydra-text-muted mb-6 leading-relaxed">
          {BENCHMARK_EXPLANATION.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENCHMARK_EXPLANATION.points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="p-4 rounded-lg bg-hydra-bg-elevated/50 border border-hydra-border"
            >
              <h4 className="text-sm font-semibold text-hydra-text mb-2">{point.title}</h4>
              <p className="text-sm text-hydra-text-muted leading-relaxed">{point.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Visual comparison bars */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* RAM comparison */}
        <div className="rounded-xl border border-hydra-border p-6 bg-hydra-bg-card/30">
          <h4 className="text-sm text-hydra-text-muted mb-4 font-medium">RAM Usage Comparison</h4>
          <div className="space-y-3">
            <ComparisonBar label="HydraClaw" value={5} max={1000} color="web4" />
            <ComparisonBar label="Go" value={10} max={1000} color="hydra-text-dim" />
            <ComparisonBar label="Python" value={100} max={1000} color="hydra-text-dim" />
            <ComparisonBar label="Node.js" value={1000} max={1000} color="hydra-text-dim" />
          </div>
        </div>

        {/* Startup time comparison */}
        <div className="rounded-xl border border-hydra-border p-6 bg-hydra-bg-card/30">
          <h4 className="text-sm text-hydra-text-muted mb-4 font-medium">Startup Time (lower is better)</h4>
          <div className="space-y-3">
            <ComparisonBar label="HydraClaw" value={10} max={500000} color="web4" />
            <ComparisonBar label="Go" value={1000} max={500000} color="hydra-text-dim" />
            <ComparisonBar label="Python" value={30000} max={500000} color="hydra-text-dim" />
            <ComparisonBar label="Node.js" value={500000} max={500000} color="hydra-text-dim" />
          </div>
        </div>

        {/* Hardware cost */}
        <div className="rounded-xl border border-hydra-border p-6 bg-hydra-bg-card/30">
          <h4 className="text-sm text-hydra-text-muted mb-4 font-medium">Min Hardware Cost (lower is better)</h4>
          <div className="space-y-3">
            <ComparisonBar label="HydraClaw" value={10} max={599} color="web4" />
            <ComparisonBar label="Go" value={10} max={599} color="hydra-text-dim" />
            <ComparisonBar label="Python" value={50} max={599} color="hydra-text-dim" />
            <ComparisonBar label="Node.js" value={599} max={599} color="hydra-text-dim" />
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

function ComparisonBar({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
}) {
  const percentage = Math.max((value / max) * 100, 2);

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className={color === "web4" ? "text-web4 font-medium" : "text-hydra-text-dim"}>
          {label}
        </span>
        <span className={color === "web4" ? "text-web4" : "text-hydra-text-dim"}>
          {value < 1000 ? value : `${(value / 1000).toFixed(0)}k`}
        </span>
      </div>
      <div className="h-2 rounded-full bg-hydra-bg-elevated overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${color === "web4" ? "bg-web4" : "bg-hydra-border-glow"}`}
        />
      </div>
    </div>
  );
}
