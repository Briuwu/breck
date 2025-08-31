"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Fuel, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";
import {
  createContainer,
  createItem,
  defaultViewport,
} from "@/lib/motionVariants";

export function RatesAndFees() {
  const container = createContainer({ staggerChildren: 0.1 });
  const item = createItem({ y: 20, duration: 0.5 });

  return (
    <motion.section
      className="py-16 px-4 bg-gray-50 dark:bg-gray-800"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Rental Rates & Fees
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Competitive pricing with flexible options. Final rates may vary
            based on client needs.
          </p>
        </motion.div>

        <motion.div variants={item} className="grid md:grid-cols-2 gap-8">
          {/* Standard Rates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-accent-blue" />
                Standard Rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Duration</TableHead>
                    <TableHead>Rate (PHP)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>12 Hours</TableCell>
                    <TableCell>₱2,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>24 Hours</TableCell>
                    <TableCell>₱2,700</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                * Rates are for standard sedan. Luxury or SUV vehicles may have
                different pricing.
              </p>
            </CardContent>
          </Card>

          {/* Additional Charges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-accent-maroon" />
                Additional Charges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex justify-between">
                  <span>Extended Hours</span>
                  <span>₱200/hour</span>
                </li>
                <li className="flex justify-between">
                  <span>Excess Mileage</span>
                  <span>₱10/km</span>
                </li>
                <li className="flex justify-between">
                  <span>Out-of-Town Trips</span>
                  <span>Negotiable</span>
                </li>
                <li className="flex justify-between">
                  <span>Special Requirements</span>
                  <span>Additional fees apply</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Client Responsibilities */}
        <motion.div variants={item}>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fuel className="h-6 w-6" />
                Client Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Fuel className="h-12 w-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Fuel</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Clients cover all fuel costs. Return with full tank or pay
                    difference.
                  </p>
                </div>
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-accent-coral mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Toll Fees</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    All toll fees are the responsibility of the client.
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="h-12 w-12 text-accent-maroon mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Delivery Fee</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    ₱300–₱500 depending on distance, paid by client.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
