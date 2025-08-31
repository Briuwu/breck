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
      className="py-16 px-4 bg-gray-900"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revenue Computation Examples
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See how much you can earn with different vehicle types and rental
            durations
          </p>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-accent-blue" />
                Monthly Income Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="scenario" />
                  <YAxis />
                  <Tooltip
                    formatter={(value) => [`₱${value.toLocaleString()}`, ""]}
                  />
                  <Legend />
                  <Bar dataKey="gross" fill="#8884d8" name="Gross Income" />
                  <Bar dataKey="net" fill="#82ca9d" name="Net Income" />
                  <Bar
                    dataKey="ownerShare"
                    fill="#ffc658"
                    name="Owner Share (75%)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item} className="mt-8 grid md:grid-cols-3 gap-6">
          {data.map((item) => (
            <Card key={item.scenario}>
              <CardHeader>
                <CardTitle className="text-center">{item.scenario}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">Gross Income</p>
                  <p className="text-2xl font-bold text-blue-600">
                    ₱
                    <AnimatedNumber
                      value={item.gross}
                      format={(v) => `${Math.round(v).toLocaleString()}`}
                    />
                  </p>
                  <p className="text-sm text-gray-300">Delivery Fees</p>
                  <p className="text-lg text-red-600">
                    -₱
                    <AnimatedNumber
                      value={item.deliveryFees}
                      format={(v) => `${Math.round(v).toLocaleString()}`}
                    />
                  </p>
                  <p className="text-sm text-gray-300">Net Income</p>
                  <p className="text-xl font-semibold text-green-600">
                    ₱
                    <AnimatedNumber
                      value={item.net}
                      format={(v) => `${Math.round(v).toLocaleString()}`}
                    />
                  </p>
                  <p className="text-sm text-gray-300">Owner Share</p>
                  <p className="text-xl font-bold text-yellow-600">
                    ₱
                    <AnimatedNumber
                      value={item.ownerShare}
                      format={(v) => `${Math.round(v).toLocaleString()}`}
                    />
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div variants={item}>
          <p className="mt-8 text-center text-sm text-gray-400">
            *All computations are estimates based on current market rates and
            average occupancy. Actual earnings may vary.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
