"use client";

import { useCountUp } from "@/lib/hooks/useCountUp";
import { useInView } from "@/lib/hooks/useInView";

interface CounterUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CounterUp({
  end,
  prefix = "",
  suffix = "",
  duration = 2000,
  className = "",
}: CounterUpProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const count = useCountUp({ end, duration, enabled: isInView });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
