"use client";

import { Button } from "@/components/ui/button";
import { Coins, TrendingUp, Shield, Users } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  createContainer,
  createItem,
  defaultViewport,
  buttonInteraction,
} from "@/lib/motionVariants";
import TextEffect from "@/components/ui/text-effect";

export function Hero() {
  const container = createContainer();
  const item = createItem();

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Professional car rental fleet"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
      </div>

      {/* Floating geometric shapes for visual interest */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-accent-coral/20 blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 rounded-lg bg-cta-orange/20 blur-lg rotate-45"
          animate={{
            rotate: [45, 90, 45],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-accent-blue/30 blur-md"
          animate={{
            x: [0, 30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div variants={item} className="text-left">
            {/* Logo and Brand */}
            <motion.div
              variants={item}
              className="flex items-center mb-6 p-3 rounded-lg bg-white/10 backdrop-blur-sm w-fit"
            >
              <Image
                src="/breck-logo.png"
                alt="Breck Car Rental Logo"
                width={48}
                height={48}
                className="mr-3"
              />
              <div>
                <span className="text-white font-semibold text-lg">
                  Breck&apos;s Car Rental
                </span>
                <p className="text-accent-coral text-sm font-medium">
                  Vehicle Partnership Program
                </p>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={item}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <TextEffect per="char" className="inline-block text-white">
                Earn
              </TextEffect>{" "}
              <TextEffect per="char" className="inline-block text-cta-orange">
                Passive Income
              </TextEffect>
              <br />
              <TextEffect per="char" className="inline-block text-white">
                with Your Car
              </TextEffect>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl leading-relaxed"
            >
              Join our Vehicle Partnership Program and earn{" "}
              <span className="text-cta-orange font-semibold">
                75% of rental income
              </span>{" "}
              while we handle everything else—transparently and professionally.
            </motion.p>

            {/* Key Stats */}
            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-4 mb-8 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cta-orange mb-1">
                  75%
                </div>
                <div className="text-sm text-gray-300">Your Share</div>
              </div>
              <div className="text-center border-l border-r border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-accent-coral mb-1">
                  ₱56K
                </div>
                <div className="text-sm text-gray-300">Monthly Potential</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-blue mb-1">
                  0%
                </div>
                <div className="text-sm text-gray-300">Hassle for You</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-cta-orange hover:bg-accent-dusty text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cta-orange/30 transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/BrecksCarRentalCavite",
                    "_blank"
                  )
                }
              >
                <Coins className="mr-2 h-6 w-6" />
                Learn More
              </Button>

              <motion.div {...buttonInteraction}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div variants={item} className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                variants={item}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <TrendingUp className="h-12 w-12 text-cta-orange mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">
                  Passive Income
                </h3>
                <p className="text-gray-300 text-sm">
                  Earn money while we manage your vehicle professionally
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <Shield className="h-12 w-12 text-accent-coral mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">
                  Full Protection
                </h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive insurance and client screening for peace of mind
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <Users className="h-12 w-12 text-accent-blue mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">
                  Transparent Reporting
                </h3>
                <p className="text-gray-300 text-sm">
                  Clear income reports and transaction tracking
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <Coins className="h-12 w-12 text-accent-maroon mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">
                  Quick Payments
                </h3>
                <p className="text-gray-300 text-sm">
                  Receive your share within 3 days of each rental
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-15" />
    </motion.section>
  );
}
