"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import {
  createContainer,
  createItem,
  defaultViewport,
} from "@/lib/motionVariants";
import AnimatedGroup from "@/components/ui/animated-group";
import TextEffect from "@/components/ui/text-effect";

export function About() {
  const container = createContainer({ staggerChildren: 0.08 });
  const item = createItem({ duration: 0.45 });

  return (
    <motion.section
      className="py-16 px-4bg-gray-900"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            <TextEffect per="word">About Breck’s Car Rental</TextEffect>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            A growing rental service providing affordable, safe, and reliable
            cars to clients across the Philippines.
          </p>
        </motion.div>

        <AnimatedGroup className="grid md:grid-cols-3 gap-8">
          <div>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-accent-blue mx-auto mb-4" />
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Clear reporting of rentals, income, and expenses for full
                  visibility.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-accent-coral mx-auto mb-4" />
                <CardTitle>Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rigorous client screening to minimize risks and ensure safety.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-accent-maroon mx-auto mb-4" />
                <CardTitle>Convenience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We handle operations so you can focus on earning passive
                  income.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedGroup>

        <motion.div variants={item} className="mt-12 text-center">
          <blockquote className="text-xl italic text-muted">
            “To provide clients with quality rentals while giving vehicle owners
            a worry-free income opportunity.”
          </blockquote>
          <p className="mt-4 text-muted-foreground">— Our Mission</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
