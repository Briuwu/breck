"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  Coins,
  Shield,
  AlertTriangle,
  Wrench,
  Clock,
  Lock,
} from "lucide-react";
import { motion } from "motion/react";
import {
  createContainer,
  createItem,
  defaultViewport,
} from "@/lib/motionVariants";

export function Terms() {
  const container = createContainer({ staggerChildren: 0.1 });
  const item = createItem({ y: 20, duration: 0.5 });

  return (
    <motion.section
      className="py-16 px-4 bg-gray-800"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      <div className="max-w-4xl mx-auto">
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
          <Card className="overflow-hidden rounded-lg shadow-md">
            <CardHeader className="px-6 py-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <FileText className="h-6 w-6 text-accent-maroon" />
                <span>Partnership Agreement Highlights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {/* revenue */}
                <AccordionItem
                  value="revenue"
                  className="border-t first:border-t-0"
                >
                  <AccordionTrigger className="w-full px-6 py-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <Coins className="h-5 w-5 text-accent-blue" />
                        <span className="text-left text-sm md:text-base">
                          Revenue Sharing
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-300">
                      Revenue sharing is calculated monthly based on actual
                      rental income, minus operational costs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* maintenance */}
                <AccordionItem value="maintenance" className="border-t">
                  <AccordionTrigger className="w-full px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Wrench className="h-5 w-5 text-accent-maroon" />
                      <span className="text-left text-sm md:text-base">
                        Maintenance & Repairs
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-300">
                      Vehicle owners are responsible for maintaining their
                      vehicles according to our maintenance schedule.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* liability */}
                <AccordionItem value="liability" className="border-t">
                  <AccordionTrigger className="w-full px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-accent-burgundy" />
                      <span className="text-left text-sm md:text-base">
                        Liability & Damages
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-300">
                      We reserve the right to terminate partnerships for
                      violations of terms or quality standards.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* violations */}
                <AccordionItem value="violations" className="border-t">
                  <AccordionTrigger className="w-full px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-accent-blue" />
                      <span className="text-left text-sm md:text-base">
                        Traffic Violations & NCAP
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-300">
                      Any traffic violations, including NCAP, incurred during
                      client use are the client&apos;s full responsibility.
                      Breck&apos;s maintains a system record of violators for
                      transparency.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* loss */}
                <AccordionItem value="loss" className="border-t">
                  <AccordionTrigger className="w-full px-6 py-4">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-accent-coral" />
                      <span className="text-left text-sm md:text-base">
                        Loss of Unit / Theft / Carnapping
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-300">
                      Client is fully liable for replacement value based on fair
                      market value. If covered by insurance, claims processed
                      immediately. Client shoulders participation fees,
                      depreciation, or deductibles not covered by insurance.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* duration */}
                <AccordionItem value="duration" className="border-t">
                  <AccordionTrigger className="w-full px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-accent-maroon" />
                      <span className="text-left text-sm md:text-base">
                        Duration & Renewal
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-300">
                      Agreement valid for 1 year from execution, automatically
                      renewed unless 30 days&apos; written notice of
                      termination. Either party may terminate with 30 days&apos;
                      notice.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* confidentiality */}
                <AccordionItem
                  value="confidentiality"
                  className="border-t last:border-b-0"
                >
                  <AccordionTrigger className="w-full px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Lock className="h-5 w-5 text-accent-blue" />
                      <span className="text-left text-sm md:text-base">
                        Confidentiality & Non-Disclosure
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-300">
                      Both parties keep business, client, and financial
                      information confidential during agreement and for 2 years
                      after termination.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
