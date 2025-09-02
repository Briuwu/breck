"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Car, Users, FileText } from "lucide-react";
import { motion } from "motion/react";
import {
  createContainer,
  createItem,
  defaultViewport,
} from "@/lib/motionVariants";

export function PartnershipModel() {
  const container = createContainer({ staggerChildren: 0.08 });
  const item = createItem({ y: 16, duration: 0.45 });

  return (
    <motion.section
      id="partnership"
      className="relative py-16 px-4 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={item} className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-white/6 text-sm font-medium text-foreground border border-white/6">
              How It Works
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Partnership Model
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A transparent, professional, and reliable way to earn from your
            vehicle without the day-to-day management.
          </p>
        </motion.div>

        {/* Flow steps - timeline */}
        <motion.div variants={item} className="mb-12">
          <div className="relative">
            {/* vertical line for timeline on md+ */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/6" />

            <div className="space-y-8">
              {/* Step 1 - left */}
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-span-5 md:col-start-1 md:text-right">
                  <div className="inline-block p-4 rounded-2xl bg-white/6 border border-white/8 w-full md:max-w-md">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent-blue/10">
                        <Car className="h-6 w-6 text-accent-blue" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          Your Car
                        </div>
                        <div className="text-xs text-muted-foreground">
                          You list your vehicle with clear requirements and
                          photos.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 md:flex md:items-center md:justify-center">
                  <div className="hidden md:inline-flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-foreground" />
                  </div>
                </div>

                <div className="md:col-span-5 md:col-start-8 md:text-left">
                  {/* empty placeholder for symmetry on small screens */}
                </div>
              </div>

              {/* Step 2 - right */}
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-span-5 md:col-start-1 md:text-right">
                  {/* placeholder for symmetry */}
                </div>

                <div className="md:col-span-2 md:flex md:items-center md:justify-center">
                  <div className="hidden md:inline-flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-foreground" />
                  </div>
                </div>

                <div className="md:col-span-5 md:col-start-8 md:text-left">
                  <div className="inline-block p-4 rounded-2xl bg-white/6 border border-white/8 w-full md:max-w-md">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent-coral/10">
                        <Users className="h-6 w-6 text-accent-coral" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          We Manage
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Professional handling: bookings, cleaning, and
                          support.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 - left */}
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-span-5 md:col-start-1 md:text-right">
                  <div className="inline-block p-4 rounded-2xl bg-white/6 border border-white/8 w-full md:max-w-md">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent-maroon/10">
                        <Users className="h-6 w-6 text-accent-maroon" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          Verified Clients
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Carefully screened guests with verifications and
                          deposits.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 md:flex md:items-center md:justify-center">
                  <div className="hidden md:inline-flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-foreground" />
                  </div>
                </div>

                <div className="md:col-span-5 md:col-start-8 md:text-left">
                  {/* placeholder */}
                </div>
              </div>

              {/* Step 4 - right */}
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-span-5 md:col-start-1 md:text-right">
                  {/* placeholder */}
                </div>

                <div className="md:col-span-2 md:flex md:items-center md:justify-center">
                  <div className="hidden md:inline-flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-foreground" />
                  </div>
                </div>

                <div className="md:col-span-5 md:col-start-8 md:text-left">
                  <div className="inline-block p-4 rounded-2xl bg-white/6 border border-white/8 w-full md:max-w-md">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-cta-orange/10">
                        <Coins className="h-6 w-6 text-cta-orange" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          Income Sharing
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Transparent split and timely payouts per agreement.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 - left */}
              <div className="md:grid md:grid-cols-12 md:items-center">
                <div className="md:col-span-5 md:col-start-1 md:text-right">
                  <div className="inline-block p-4 rounded-2xl bg-white/6 border border-white/8 w-full md:max-w-md">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent-burgundy/10">
                        <FileText className="h-6 w-6 text-accent-burgundy" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          Reports
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Monthly statements and clear breakdowns delivered to
                          you.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 md:flex md:items-center md:justify-center">
                  <div className="hidden md:inline-flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-foreground" />
                  </div>
                </div>

                <div className="md:col-span-5 md:col-start-8 md:text-left">
                  {/* placeholder */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Revenue Sharing */}
        <motion.div variants={item}>
          <Card className="max-w-4xl mx-auto h-full flex flex-col bg-white/6 border border-white/10">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-foreground">
                Revenue Sharing
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cta-orange mb-2">
                    75%
                  </div>
                  <p className="text-lg font-semibold text-foreground">
                    Owner&apos;s Share
                  </p>
                  <p className="text-muted-foreground">
                    Net rental income after agreed deductions (for example
                    delivery or platform fees). Payouts are processed on a
                    predictable schedule.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-blue mb-2">
                    25%
                  </div>
                  <p className="text-lg font-semibold text-foreground">
                    Operator&apos;s Share
                  </p>
                  <p className="text-muted-foreground">
                    Management/service fee for handling bookings, screening,
                    cleaning and support.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-center text-muted-foreground">
                We handle all operational aspects so you can earn passive income
                from your vehicle with confidence.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
