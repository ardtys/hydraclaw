"use client";

import { motion } from "framer-motion";
import { Button, Terminal, CounterUp } from "@/components/ui";
import { STATS } from "@/lib/constants";
import { useInView } from "@/lib/hooks/useInView";

export function Hero() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hydra-border bg-hydra-bg-elevated/50 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-web4 animate-pulse" />
              <span className="text-xs text-hydra-text-muted font-medium">
                Multi-Chain Protocol
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-syne)] leading-[1.1] mb-6">
              <span className="text-hydra-text">5 Heads.</span>
              <br />
              <span className="text-hydra-text">5 Layers.</span>
              <br />
              <span className="gradient-text">One Protocol.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-hydra-text-muted max-w-xl mb-8 leading-relaxed">
              Ultra-lightweight AI agents that trade, copy, farm, and evolve.{" "}
              <span className="text-web4">&lt;5MB</span>.{" "}
              <span className="text-web3">&lt;10ms boot</span>.{" "}
              <span className="text-web25">$10 hardware</span>. Deploy anywhere.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="lg" glow>
                Deploy Your First Agent →
              </Button>
              <Button variant="outline" size="lg">
                Read the Docs
              </Button>
            </div>

            {/* Stats bar */}
            <div ref={ref} className="flex flex-wrap gap-6 lg:gap-8">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-syne)] text-hydra-text">
                    {stat.prefix}
                    <CounterUp end={stat.value} duration={1500} />
                    {stat.suffix}
                  </span>
                  <span className="text-xs text-hydra-text-muted uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <Terminal startAnimation={isInView} />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-web1/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-web4/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
