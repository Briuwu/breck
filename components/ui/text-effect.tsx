"use client";

import React from "react";
import { motion, Variants } from "motion/react";

type Props = {
  children: React.ReactNode;
  per?: "char" | "word" | "line";
  className?: string;
  delay?: number;
  speedSegment?: number;
};

export function TextEffect({
  children,
  per = "char",
  className,
  delay = 0,
  speedSegment = 1,
}: Props) {
  const text = typeof children === "string" ? children : String(children);

  // split into characters or words
  const segments = per === "word" ? text.split(" ") : text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.04 * speedSegment, delay },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.36 * speedSegment, ease: "easeOut" },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {segments.map((seg, i) => {
        const isSpace = seg === " ";
        const content = isSpace && per === "char" ? "\u00A0" : seg;

        return (
          <motion.span
            key={i}
            variants={item}
            style={{
              display: "inline-block",
              whiteSpace: per === "word" ? "pre" : "nowrap",
            }}
          >
            {content}
            {per === "word" ? " " : ""}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

export default TextEffect;
