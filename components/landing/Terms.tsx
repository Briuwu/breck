"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Coins,
  Shield,
  AlertTriangle,
  Wrench,
  Clock,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  createContainer,
  createItem,
  defaultViewport,
} from "@/lib/motionVariants";

export function Terms() {
  const container = createContainer({ staggerChildren: 0.1 });
  const item = createItem({ y: 20, duration: 0.5 });

  const sections = [
    {
      key: "revenue",
      icon: Coins,
      title: "Revenue Sharing",
      color: "text-accent-blue",
      body: `Revenue sharing is calculated monthly based on actual rental income, minus operational costs.`,
    },
    {
      key: "maintenance",
      icon: Wrench,
      title: "Maintenance & Repairs",
      color: "text-accent-maroon",
      body: `Vehicle owners are responsible for maintaining their vehicles according to our maintenance schedule.`,
    },
    {
      key: "liability",
      icon: Shield,
      title: "Liability & Damages",
      color: "text-accent-burgundy",
      body: `We reserve the right to terminate partnerships for violations of terms or quality standards.`,
    },
    {
      key: "violations",
      icon: Clock,
      title: "Traffic Violations & NCAP",
      color: "text-accent-blue",
      body: `Any traffic violations, including NCAP, incurred during client use are the client's full responsibility. Breck's maintains a system record of violators for transparency.`,
    },
    {
      key: "loss",
      icon: AlertTriangle,
      title: "Loss of Unit / Theft / Carnapping",
      color: "text-accent-coral",
      body: `Client is fully liable for replacement value based on fair market value. If covered by insurance, claims processed immediately. Client shoulders participation fees, depreciation, or deductibles not covered by insurance.`,
    },
    {
      key: "duration",
      icon: Clock,
      title: "Duration & Renewal",
      color: "text-accent-maroon",
      body: `Agreement valid for 1 year from execution, automatically renewed unless 30 days' written notice of termination. Either party may terminate with 30 days' notice.`,
    },
    {
      key: "confidentiality",
      icon: Lock,
      title: "Confidentiality & Non-Disclosure",
      color: "text-accent-blue",
      body: `Both parties keep business, client, and financial information confidential during agreement and for 2 years after termination.`,
    },
  ];

  return (
    <motion.section
      id="terms"
      className="relative min-h-[72vh] py-16 px-4 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
      </div>

      {/* Floating accents */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          className="absolute -left-10 top-12 w-28 h-28 rounded-full bg-accent-blue/10 blur-2xl"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-6 bottom-20 w-20 h-20 rounded-lg bg-accent-coral/12 blur-xl rotate-6"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Terms and Conditions
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before participating in our
            vehicle partnership program
          </p>
        </motion.div>

        <motion.div variants={item}>
          <div className="grid md:grid-cols-[1.5fr_.5fr] gap-8 items-start relative">
            {/* Left: stacked term cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <Card
                    id={`term-${s.key}`}
                    key={s.key}
                    className="bg-white/6 border-white/10 backdrop-blur-sm overflow-hidden rounded-lg shadow-md"
                  >
                    <CardHeader className="px-6 py-4">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <Icon className={`h-6 w-6 ${s.color}`} />
                        <span>{s.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-gray-300">{s.body}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Right: summary & CTAs */}
            <aside className="md:sticky md:top-24 self-start h-fit">
              <Card className="bg-white/6 border-white/10 backdrop-blur-sm overflow-hidden rounded-lg shadow-md">
                <CardHeader className="px-6 py-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <FileText className="h-6 w-6 text-accent-maroon" />
                    <span>Quick Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-gray-300 mb-4">
                    Here are the highlights. Click an item to jump to the full
                    section below.
                  </p>
                  <ul className="space-y-2 mb-4">
                    {sections.map((s) => (
                      <li key={s.key}>
                        <a
                          href={`#term-${s.key}`}
                          className="text-sm text-gray-200 hover:text-cta-orange transition-colors"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-6 py-2 rounded-lg"
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/BrecksCarRentalCavite",
                          "_blank"
                        )
                      }
                    >
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
