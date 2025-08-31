"use client";

import React from "react";
import { motion, Variants } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  preset?: "fade" | "slide" | "scale";
  variants?: { container?: Variants; item?: Variants };
};

const presets: Record<string, { container: Variants; item: Variants }> = {
  fade: {
    container: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.08 } },
    },
    item: {
      hidden: { opacity: 0, y: 8 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      },
    },
  },
  slide: {
    container: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.1 } },
    },
    item: {
      hidden: { opacity: 0, x: -12 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: "easeOut" },
      },
    },
  },
  scale: {
    container: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.06 } },
    },
    item: {
      hidden: { opacity: 0, scale: 0.98 },
      show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.36, ease: "easeOut" },
      },
    },
  },
};

export function AnimatedGroup({
  children,
  className,
  preset = "fade",
  variants,
}: Props) {
  const chosen = variants ?? presets[preset];

  return (
    <motion.div
      variants={chosen.container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {React.Children.map(children, (child, i) => (
        <motion.div
          key={i}
          variants={chosen.item}
          className="animated-group-item"
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default AnimatedGroup;
