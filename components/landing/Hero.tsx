"use client";

import { Button } from "@/components/ui/button";
import { Car, DollarSign } from "lucide-react";
import { motion } from "motion/react";
import {
  createContainer,
  createItem,
  defaultViewport,
  buttonInteraction,
} from "@/lib/motionVariants";
import TextEffect from "@/components/ui/text-effect";
// ...existing code...

export function Hero() {
  const container = createContainer();
  const item = createItem();

  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen pr-4 text-center"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      <div className="relative w-full overflow-hidden">
        <div className="max-w-4xl mx-auto py-20 md:py-32 px-4 z-20">
          <motion.div variants={item} className="text-left">
            <div className="flex items-center mb-4">
              <Car className="h-10 w-10 text-accent-blue mr-3" />
              <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Breck Partnership
              </span>
            </div>

            <motion.h1
              variants={item}
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--foreground)" }}
            >
              <TextEffect per="char" className="inline-block">
                Earn Passive Income with Your Car
              </TextEffect>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl mb-6 max-w-2xl"
              style={{ color: "var(--muted-foreground)" }}
            >
              Join Breck’s Car Rental Vehicle Partnership Program. Share 75% of
              net rental income while we handle the rest—transparently and
              professionally.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-(--color-cta-orange) hover:bg-(--color-accent-dusty) text-(--color-text-light) px-8 py-3"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Learn More
              </Button>

              <motion.div {...buttonInteraction}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 border-(--color-accent-blue) text-(--color-text-light) bg-transparent hover:bg-(--color-accent-blue) hover:text-(--color-text-light) w-full"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* subtle gradient to blend image */}
      <div className="absolute inset-0 bg-gradient-to-r via-transparent to-transparent from-black/60 mix-blend-multiply pointer-events-none z-10 hidden md:block" />
    </motion.section>
  );
}
