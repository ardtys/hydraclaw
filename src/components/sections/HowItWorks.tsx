"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared";
import { USER_JOURNEY } from "@/lib/constants";

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  web1: {
    bg: "bg-web1",
    text: "text-web1",
    border: "border-web1/30",
  },
  web2: {
    bg: "bg-web2",
    text: "text-web2",
    border: "border-web2/30",
  },
  web25: {
    bg: "bg-web25",
    text: "text-web25",
    border: "border-web25/30",
  },
  web3: {
    bg: "bg-web3",
    text: "text-web3",
    border: "border-web3/30",
  },
  web4: {
    bg: "bg-web4",
    text: "text-web4",
    border: "border-web4/30",
  },
};

export function HowItWorks() {
  return (
    <SectionWrapper>
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-web3 font-medium uppercase tracking-wider mb-4"
        >
          User Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-syne)] text-hydra-text mb-4"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-hydra-text-muted max-w-2xl mx-auto"
        >
          From discovery to deployment — your path to autonomous trading
        </motion.p>
      </div>

      {/* Journey steps */}
      <div className="relative">
        {/* Connection line (desktop) */}
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-web1 via-web25 to-web4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {USER_JOURNEY.map((step, index) => {
            const colors = colorClasses[step.color];

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step number dot */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className={`w-16 h-16 rounded-full ${colors.bg}/10 border ${colors.border} flex items-center justify-center relative z-10 bg-hydra-bg`}>
                    <span className={`text-2xl font-bold font-mono ${colors.text}`}>
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className={`text-lg font-semibold mb-1 ${colors.text}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm font-medium mb-3 ${colors.text}/80`}>
                    {step.shortDesc}
                  </p>
                  <p className="text-sm text-hydra-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
