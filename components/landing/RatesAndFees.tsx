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
      id="rates"
      className="relative py-16 px-4 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      {/* subtle background accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-12 left-8 w-72 h-72 rounded-full bg-accent-blue/6 blur-3xl" />
        <div className="absolute bottom-0 right-12 w-80 h-48 rounded-2xl bg-accent-maroon/6 blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div variants={item} className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-white/6 text-sm font-medium text-foreground border border-white/6">
              Rates
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rates and Fees
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing structure for our vehicle partnership program
          </p>
        </motion.div>

        <motion.div variants={item} className="grid md:grid-cols-2 gap-8">
          {/* Standard Rates */}
          <Card className="h-full flex flex-col bg-white/6 border border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Clock className="h-6 w-6 text-accent-blue" />
                Standard Rates
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
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
              <p className="mt-4 text-sm text-muted-foreground">
                *Rates may vary based on vehicle type, location, and demand
              </p>
            </CardContent>
          </Card>

          {/* Additional Charges */}
          <Card className="h-full flex flex-col bg-white/6 border border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <MapPin className="h-6 w-6 text-accent-maroon" />
                Additional Charges
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 text-muted-foreground">
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
          <Card className="mt-8 bg-white/6 border border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Fuel className="h-6 w-6 text-accent-blue" />
                Client Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Fuel className="h-12 w-12 text-accent-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Fuel</h3>
                  <p className="text-sm text-muted-foreground">
                    Clients cover all fuel costs. Return with full tank or pay
                    difference.
                  </p>
                </div>
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-accent-coral mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Toll Fees
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All toll fees are the responsibility of the client.
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="h-12 w-12 text-accent-maroon mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Delivery Fee
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
