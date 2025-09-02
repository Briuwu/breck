"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Coins,
  Shield,
  FileText,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  createContainer,
  createItem,
  defaultViewport,
} from "@/lib/motionVariants";

export function Benefits() {
  const container = createContainer({ staggerChildren: 0.09, y: 32 });
  const item = createItem({ y: 16, duration: 0.45 });
  const MotionTabsList = motion(TabsList);
  const MotionTabsContent = motion(TabsContent);
  const [tab, setTab] = useState<string>("owners");

  return (
    <motion.section
      id="benefits"
      className="relative py-16 px-4 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      {/* subtle background accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-12 right-12 w-56 h-56 rounded-full bg-accent-coral/8 blur-3xl" />
        <div className="absolute bottom-0 left-8 w-72 h-44 rounded-2xl bg-cta-orange/6 blur-2xl" />
      </div>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={item} className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-white/6 text-sm font-medium text-foreground border border-white/6">
              Benefits
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Benefits for Owners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enjoy steady passive income with peace of mind through our
            professional management.
          </p>
        </motion.div>

        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <MotionTabsList
            variants={item}
            animate="show"
            className="bg-white/6 border border-white/8 mx-auto p-2 h-auto mb-5 max-w-4xl"
          >
            <TabsTrigger value="owners" className="md:w-96 py-3">
              Owner Benefits
            </TabsTrigger>

            <TabsTrigger value="operators" className="md:w-96 py-3">
              Operator Details
            </TabsTrigger>
          </MotionTabsList>

          <MotionTabsContent
            value="owners"
            initial="hidden"
            animate={tab === "owners" ? "show" : "hidden"}
            variants={item}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              <motion.div variants={item}>
                <Card className="h-full flex flex-col bg-white/6 border border-white/10 hover:scale-102 transition-transform duration-300">
                  <CardHeader>
                    <Coins className="h-10 w-10 text-cta-orange mb-2" />
                    <CardTitle className="text-foreground">
                      75% Income Share
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">
                      Majority share of net rental income, maximizing your ROI.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="h-full flex flex-col bg-white/6 border border-white/10 hover:scale-102 transition-transform duration-300">
                  <CardHeader>
                    <Clock className="h-10 w-10 text-accent-blue mb-2" />
                    <CardTitle className="text-foreground">
                      Hassle-Free Operations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">
                      We handle marketing, rentals, and maintenance—you just
                      earn.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="h-full flex flex-col bg-white/6 border border-white/10 hover:scale-102 transition-transform duration-300">
                  <CardHeader>
                    <FileText className="h-10 w-10 text-accent-maroon mb-2" />
                    <CardTitle className="text-foreground">
                      Transparent Reporting
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">
                      Detailed reports on income, expenses, and client details.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="h-full flex flex-col bg-white/6 border border-white/10 hover:scale-102 transition-transform duration-300">
                  <CardHeader>
                    <Shield className="h-10 w-10 text-accent-burgundy mb-2" />
                    <CardTitle className="text-foreground">
                      Insurance Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">
                      Comprehensive coverage with our assistance for claims.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="h-full flex flex-col bg-white/6 border border-white/10 hover:scale-102 transition-transform duration-300">
                  <CardHeader>
                    <TrendingUp className="h-10 w-10 text-accent-coral mb-2" />
                    <CardTitle className="text-foreground">
                      Passive Income
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">
                      Steady earnings without active involvement in daily
                      operations.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="h-full flex flex-col bg-white/6 border border-white/10 hover:scale-102 transition-transform duration-300">
                  <CardHeader>
                    <CheckCircle className="h-10 w-10 text-accent-dusty mb-2" />
                    <CardTitle className="text-foreground">
                      Peace of Mind
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">
                      Professional management ensures your car is
                      well-maintained.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </MotionTabsContent>

          <MotionTabsContent
            value="operators"
            initial="hidden"
            animate={tab === "operators" ? "show" : "hidden"}
            variants={item}
          >
            <motion.div variants={item}>
              <Card className="max-w-4xl mx-auto bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    Why Choose Breck&apos;s Car Rental?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent-blue mt-1 flex-shrink-0" />
                      <span>
                        25% management fee covers all operational costs and
                        marketing.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent-blue mt-1 flex-shrink-0" />
                      <span>
                        Rigorous client screening and insurance to minimize
                        risks.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent-blue mt-1 flex-shrink-0" />
                      <span>
                        Transparent systems for tracking and reporting all
                        transactions.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent-blue mt-1 flex-shrink-0" />
                      <span>
                        Flexible payment schedules (weekly/monthly) for
                        convenience.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </MotionTabsContent>
        </Tabs>
      </div>
    </motion.section>
  );
}
