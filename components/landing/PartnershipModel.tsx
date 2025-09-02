"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Coins, Car, Users, FileText } from "lucide-react";
import { motion } from "motion/react";
import {
  createContainer,
  createItem,
  defaultViewport,
} from "@/lib/motionVariants";

export function PartnershipModel() {
  const container = createContainer({ staggerChildren: 0.1 });
  const item = createItem({ y: 20, duration: 0.5 });

  return (
    <motion.section
      id="partnership"
      className="py-16 px-4 bg-gray-800"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Partnership Model
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A transparent and mutually beneficial approach to vehicle rental
            partnerships
          </p>
        </motion.div>

        {/* Flowchart */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2">
            <Car className="h-8 w-8 text-accent-blue" />
            <span className="text-lg font-semibold">Your Car</span>
          </div>
          <ArrowRight className="h-6 w-6 text-gray-400" />
          <div className="flex items-center gap-2">
            <Users className="h-8 w-8 text-accent-coral" />
            <span className="text-lg font-semibold">Breck’s Car Rental</span>
          </div>
          <ArrowRight className="h-6 w-6 text-gray-400" />
          <div className="flex items-center gap-2">
            <Users className="h-8 w-8 text-accent-maroon" />
            <span className="text-lg font-semibold">Clients</span>
          </div>
          <ArrowRight className="h-6 w-6 text-gray-400" />
          <div className="flex items-center gap-2">
            <Coins className="h-8 w-8 text-cta-orange" />
            <span className="text-lg font-semibold">Income Sharing</span>
          </div>
          <ArrowRight className="h-6 w-6 text-gray-400" />
          <div className="flex items-center gap-2">
            <FileText className="h-8 w-8 text-accent-burgundy" />
            <span className="text-lg font-semibold">Reports</span>
          </div>
        </motion.div>

        {/* Revenue Sharing */}
        <motion.div variants={item}>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Revenue Sharing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    75%
                  </div>
                  <p className="text-lg font-semibold">Owner&apos;s Share</p>
                  <p className="text-gray-300">
                    Net rental income after deductions (e.g., delivery fees).
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    25%
                  </div>
                  <p className="text-lg font-semibold">Operator&apos;s Share</p>
                  <p className="text-gray-300">
                    Management/service fee for handling operations.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-center text-gray-200">
                We handle all the operational aspects while you earn passive
                income from your vehicle.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
