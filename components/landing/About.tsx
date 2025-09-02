"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import {
  createContainer,
  createItem,
  defaultViewport,
} from "@/lib/motionVariants";
import AnimatedGroup from "@/components/ui/animated-group";
import TextEffect from "@/components/ui/text-effect";
import { Button } from "@/components/ui/button";

export function About() {
  const container = createContainer({ staggerChildren: 0.06 });
  const item = createItem({ duration: 0.48 });

  return (
    <motion.section
      id="about"
      className="relative py-20 px-4 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      {/* Subtle background accents to match Hero */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-16 left-8 w-72 h-72 rounded-full bg-accent-coral/10 blur-3xl" />
        <div className="absolute bottom-0 right-8 w-96 h-60 rounded-2xl bg-cta-orange/6 blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div variants={item} className="mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-white/6 text-sm font-medium text-foreground border border-white/6">
              About Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground leading-tight">
            <TextEffect per="word">About Breck’s Car Rental</TextEffect>
          </h2>

          <p className="text-lg max-w-3xl text-muted-foreground">
            We partner with vehicle owners to deliver a professional rental
            experience that prioritizes safety, transparency, and predictable
            earnings — all backed by rigorous screening and responsive support.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-cta-orange hover:bg-accent-dusty text-white px-6 py-3 rounded-lg font-semibold"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Partner With Us
            </Button>
          </div>
        </motion.div>

        <AnimatedGroup className="grid md:grid-cols-3 gap-8 items-stretch">
          <motion.div variants={item} className="h-full">
            <Card className="h-full flex flex-col bg-white/6 border border-white/10 hover:scale-102 transition-transform duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-cta-orange/10">
                  <Shield className="h-8 w-8 text-cta-orange" />
                </div>
                <CardTitle className="text-foreground">Transparency</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  Clear reporting of rentals, income and expenses with
                  breakdowns delivered monthly — so you always know how your
                  vehicle performed.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item} className="h-full">
            <Card className="h-full flex flex-col bg-white/6 border border-white/10 hover:scale-102 transition-transform duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-accent-coral/10">
                  <Users className="h-8 w-8 text-accent-coral" />
                </div>
                <CardTitle className="text-foreground">Security</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  Rigorous client screening, verified bookings, and optional
                  insurance coverage to minimize risk and protect your asset.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item} className="h-full">
            <Card className="h-full flex flex-col bg-white/6 border border-white/10 hover:scale-102 transition-transform duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-accent-maroon/10">
                  <CheckCircle className="h-8 w-8 text-accent-maroon" />
                </div>
                <CardTitle className="text-foreground">Convenience</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  End-to-end management — from client communications and
                  cleaning to payments — so you enjoy passive income without the
                  daily work.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatedGroup>

        <motion.div variants={item} className="mt-12 text-center">
          <blockquote className="text-xl italic text-muted-foreground">
            “We provide clients with quality rentals while giving vehicle owners
            a worry-free income opportunity.”
          </blockquote>
          <p className="mt-4 text-muted-foreground">— Our Mission</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
