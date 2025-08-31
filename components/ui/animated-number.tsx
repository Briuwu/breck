"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  duration?: number; // seconds
  format?: (v: number) => string;
  className?: string;
  startOnView?: boolean;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function AnimatedNumber({
  value,
  duration = 1.2,
  format,
  className,
  startOnView = true,
}: Props) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    let raf = 0;
    let startTime = 0;

    const run = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = (now - startTime) / 1000;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);
      setDisplay(value * eased);

      if (t < 1) raf = requestAnimationFrame(run);
    };

    if (!startOnView) {
      started.current = true;
      raf = requestAnimationFrame(run);
    } else if (ref.current && typeof IntersectionObserver !== "undefined") {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            raf = requestAnimationFrame(run);
          }
        });
      });
      obs.observe(ref.current);
      return () => {
        obs.disconnect();
        cancelAnimationFrame(raf);
      };
    }

    return () => cancelAnimationFrame(raf);
  }, [value, duration, startOnView]);

  const text = format ? format(display) : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className={className} aria-hidden>
      {text}
    </span>
  );
}

export default AnimatedNumber;
