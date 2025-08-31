"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, AlertCircle, Scale, FileSignature } from "lucide-react";
import { motion } from "motion/react";
import {
  createContainer,
  createItem,
  defaultViewport,
} from "@/lib/motionVariants";

export function Legal() {
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
      <div className="max-w-4xl mx-auto">
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Legal Information
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Important legal details about our vehicle partnership program
          </p>
        </motion.div>

        <motion.div variants={item} className="space-y-8">
          {/* Insurance & Registration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-accent-blue" />
                Insurance & Registration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Owner Responsibilities</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Maintain updated LTO registration</li>
                    <li>• Comprehensive insurance coverage</li>
                    <li>• Process insurance claims with Operator assistance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Claim Process</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Insurance claims filed immediately</li>
                    <li>• Clients shoulder deductibles & fees</li>
                    <li>• Operator assists with documentation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Special Power of Attorney */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSignature className="h-6 w-6 text-accent-maroon" />
                Special Power of Attorney (SPA)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Owner shall issue an SPA to Maria Leonela M. Lasala authorizing
                representation before government authorities in matters relating
                to the vehicle.
              </p>
              <div className="bg-yellow-900/20 p-4 rounded-lg">
                <p className="text-sm text-yellow-200">
                  <strong>Note:</strong> SPA does not cover authority to sell or
                  mortgage the vehicle.
                </p>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Force Majeure */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-accent-coral" />
                Force Majeure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Neither party shall be liable for failure/delay caused by events
                beyond control (typhoons, earthquakes, floods, fire, war,
                terrorism, pandemics, strikes, etc.). Parties shall inform each
                other and agree on reasonable steps to minimize effects. No
                penalties/liabilities arise from such failure or delay.
              </p>
            </CardContent>
          </Card>

          <Separator />

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-6 w-6 text-accent-burgundy" />
                Dispute Resolution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Any dispute shall first be settled amicably. If unresolved,
                submitted to mediation or arbitration in accordance with
                Philippine laws.
              </p>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-blue-200">
                  <strong>Termination:</strong> Either party may terminate with
                  30 days&apos; written notice. Breach allows immediate
                  termination and legal remedies.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
