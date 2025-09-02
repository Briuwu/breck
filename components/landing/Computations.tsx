"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Calculator } from "lucide-react";
import { motion } from "motion/react";
import {
  createContainer,
  createItem,
  defaultViewport,
} from "@/lib/motionVariants";
import AnimatedNumber from "@/components/ui/animated-number";

const data = [
  {
    scenario: "15 Days",
    gross: 40500,
    deliveryFees: 3000,
    net: 37500,
    ownerShare: 28125,
    operatorShare: 9375,
  },
  {
    scenario: "20 Days",
    gross: 54000,
    deliveryFees: 4000,
    net: 50000,
    ownerShare: 37500,
    operatorShare: 12500,
  },
  {
    scenario: "30 Days",
    gross: 81000,
    deliveryFees: 6000,
    net: 75000,
    ownerShare: 56250,
    operatorShare: 18750,
  },
];

export function Computations() {
  const container = createContainer({ staggerChildren: 0.1 });
  const item = createItem({ y: 20, duration: 0.5 });

  return (
    <motion.section
      id="computations"
      className="relative py-16 px-4 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      {/* subtle background accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-12 left-12 w-56 h-56 rounded-full bg-accent-coral/8 blur-3xl" />
        <div className="absolute bottom-0 right-8 w-72 h-44 rounded-2xl bg-cta-orange/6 blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div variants={item} className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-white/6 text-sm font-medium text-foreground border border-white/6">
              Computations
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Revenue Computation Examples
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how much you can earn with different vehicle types and rental
            durations
          </p>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full flex flex-col bg-white/6 border border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Calculator className="h-6 w-6 text-accent-blue" />
                Monthly Income Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.04)"
                  />
                  <XAxis dataKey="scenario" stroke="rgba(255,255,255,0.6)" />
                  <YAxis stroke="rgba(255,255,255,0.6)" />
                  <Tooltip
                    formatter={(value) => [`₱${value.toLocaleString()}`, ""]}
                    contentStyle={{
                      background: "rgba(15,23,36,0.9)",
                      borderRadius: 8,
                      border: "1px solid rgba(255,255,255,0.04)",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="gross" fill="#ee9b67" name="Gross Income" />
                  <Bar dataKey="net" fill="#d56556" name="Net Income" />
                  <Bar
                    dataKey="ownerShare"
                    fill="#2b6cb0"
                    name="Owner Share (75%)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item} className="mt-8 grid md:grid-cols-3 gap-6">
          {data.map((d) => (
            <Card
              key={d.scenario}
              className="h-full flex flex-col bg-white/6 border border-white/10"
            >
              <CardHeader>
                <CardTitle className="text-center text-foreground">
                  {d.scenario}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 text-center">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Gross Income
                    </p>
                    <p className="text-2xl font-bold text-cta-orange">
                      ₱
                      <AnimatedNumber
                        value={d.gross}
                        format={(v) => `${Math.round(v).toLocaleString()}`}
                      />
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Delivery Fees
                    </p>
                    <p className="text-lg text-cta-orange">
                      -₱
                      <AnimatedNumber
                        value={d.deliveryFees}
                        format={(v) => `${Math.round(v).toLocaleString()}`}
                      />
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Net Income</p>
                    <p className="text-xl font-semibold text-accent-coral">
                      ₱
                      <AnimatedNumber
                        value={d.net}
                        format={(v) => `${Math.round(v).toLocaleString()}`}
                      />
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground ">
                      Owner Share
                    </p>
                    <p className="text-xl font-bold text-cta-orange">
                      ₱
                      <AnimatedNumber
                        value={d.ownerShare}
                        format={(v) => `${Math.round(v).toLocaleString()}`}
                      />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div variants={item}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            *All computations and estimates are based on an average SUV model,
            current market rates, and average occupancy. Actual earnings may
            vary.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
