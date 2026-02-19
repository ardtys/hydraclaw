"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared";
import { LayerCard } from "@/components/ui";
import { LAYERS } from "@/lib/constants";

export function FiveLayers() {
  return (
    <SectionWrapper id="layers" className="relative">
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-web25 font-medium uppercase tracking-wider mb-4"
        >
          Architecture
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4"
        >
          5 Layers. One Unified Protocol.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-hydra-text-muted max-w-2xl mx-auto"
        >
          From static documentation to autonomous AI swarms — HydraClaw bridges
          Web1 through Web4 in a single, cohesive protocol.
        </motion.p>
      </div>

      {/* Progress indicator */}
      <div className="hidden lg:block absolute left-8 top-64 bottom-32 w-1">
        <div className="sticky top-1/3 h-96">
          <div className="relative h-full w-1 bg-hydra-border rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-web1 via-web25 to-web4 rounded-full"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
          {/* Layer dots */}
          <div className="absolute -left-1 top-0 w-3 h-3 rounded-full bg-web1 border-2 border-hydra-bg" />
          <div className="absolute -left-1 top-1/4 w-3 h-3 rounded-full bg-web2 border-2 border-hydra-bg" />
          <div className="absolute -left-1 top-1/2 w-3 h-3 rounded-full bg-web25 border-2 border-hydra-bg" />
          <div className="absolute -left-1 top-3/4 w-3 h-3 rounded-full bg-web3 border-2 border-hydra-bg" />
          <div className="absolute -left-1 bottom-0 w-3 h-3 rounded-full bg-web4 border-2 border-hydra-bg" />
        </div>
      </div>

      {/* Layer cards */}
      <div className="space-y-6 lg:pl-16">
        {LAYERS.map((layer, index) => (
          <LayerCard key={layer.id} layer={layer} index={index} />
        ))}
      </div>

      {/* Bottom visual - Connection lines */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-hydra-border bg-hydra-bg-card/50">
          <div className="flex -space-x-1">
            <span className="w-4 h-4 rounded-full bg-web1 border-2 border-hydra-bg-card" />
            <span className="w-4 h-4 rounded-full bg-web2 border-2 border-hydra-bg-card" />
            <span className="w-4 h-4 rounded-full bg-web25 border-2 border-hydra-bg-card" />
            <span className="w-4 h-4 rounded-full bg-web3 border-2 border-hydra-bg-card" />
            <span className="w-4 h-4 rounded-full bg-web4 border-2 border-hydra-bg-card" />
          </div>
          <span className="text-sm text-hydra-text-muted">
            All layers connected. All heads working as one.
          </span>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
