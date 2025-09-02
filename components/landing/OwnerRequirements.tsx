"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  IdCard,
  Receipt,
  FileText,
  Shield,
  Camera,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  createContainer,
  createItem,
  defaultViewport,
  buttonInteraction,
} from "@/lib/motionVariants";
import AnimatedGroup from "@/components/ui/animated-group";

export function OwnerRequirements() {
  const container = createContainer({ staggerChildren: 0.1 });
  const item = createItem({ y: 20, duration: 0.5 });

  const requirements = [
    {
      icon: IdCard,
      title: "Government IDs",
      description: "Two (2) valid government-issued IDs",
      details: "Valid driver's license, passport, or other government IDs",
      color: "text-accent-blue",
      bgColor: "bg-accent-blue/10",
      borderColor: "border-accent-blue/20",
    },
    {
      icon: Receipt,
      title: "Proof of Billing",
      description: "Recent utility bill under owner's name",
      details: "Electricity, water, or internet bill (within 3 months)",
      color: "text-accent-coral",
      bgColor: "bg-accent-coral/10",
      borderColor: "border-accent-coral/20",
    },
    {
      icon: FileText,
      title: "OR/CR Documents",
      description: "Three (3) clear photocopies of OR/CR",
      details: "Official Receipt & Certificate of Registration",
      color: "text-cta-orange",
      bgColor: "bg-cta-orange/10",
      borderColor: "border-cta-orange/20",
    },
    {
      icon: Shield,
      title: "Comprehensive Insurance",
      description: "Updated insurance coverage",
      details: "Must be current and comprehensive coverage",
      color: "text-accent-maroon",
      bgColor: "bg-accent-maroon/10",
      borderColor: "border-accent-maroon/20",
    },
    {
      icon: Camera,
      title: "Dashcam",
      description: "Optional but recommended",
      details: "For security and incident documentation",
      color: "text-accent-dusty",
      bgColor: "bg-accent-dusty/10",
      borderColor: "border-accent-dusty/20",
    },
    {
      icon: MapPin,
      title: "GPS Device",
      description: "Owner-installed / owner responsibility",
      details:
        "Installation and any associated costs are the responsibility of the vehicle owner; professional installation recommended",
      color: "text-accent-burgundy",
      bgColor: "bg-accent-burgundy/10",
      borderColor: "border-accent-burgundy/20",
    },
  ];

  return (
    <motion.section
      id="requirements"
      className="relative min-h-[80vh] py-16 px-4 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      {/* Background image + gradients (subtle) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          className="absolute -top-8 -left-8 w-36 h-36 rounded-full bg-accent-coral/20 blur-2xl"
          animate={{ y: [0, -18, 0], x: [0, 8, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-6 top-28 w-20 h-20 rounded-lg bg-cta-orange/20 blur-xl rotate-12"
          animate={{ y: [0, 12, 0], rotate: [12, 40, 12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.div variants={item} className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Owner Requirements
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            To proceed with the vehicle partnership program, owners need to
            provide the following documents and meet these requirements for a
            smooth onboarding process.
          </p>
        </motion.div>

        <AnimatedGroup
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          variants={container}
        >
          {requirements.map((requirement, index) => {
            const IconComponent = requirement.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card
                  className={`h-full flex flex-col border-2 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 ${requirement.bgColor} ${requirement.borderColor} shadow-sm hover:shadow-lg`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div
                        className={`p-3 rounded-full ${requirement.bgColor} border ${requirement.borderColor} flex items-center justify-center shadow-inner`}
                      >
                        <IconComponent
                          className={`h-8 w-8 ${requirement.color}`}
                        />
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg font-semibold">
                      {requirement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0 flex-1">
                    <p className="text-gray-200 font-medium mb-2">
                      {requirement.description}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {requirement.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </AnimatedGroup>

        {/* Additional Information */}
        <motion.div variants={item} className="mt-12 px-4">
          <Card className="bg-white/6 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <CardTitle className="text-white">Important Notes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Document Guidelines:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      All documents must be clear and legible
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      Original documents for verification
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      Insurance must be comprehensive coverage
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Equipment Installation:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cta-orange mt-1">•</span>
                      GPS installation must be arranged and paid for by the
                      vehicle owner; certified installers recommended
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cta-orange mt-1">•</span>
                      Dashcam highly recommended for protection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cta-orange mt-1">•</span>
                      All equipment installations and their costs are to be
                      shouldered by the owner
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={item} className="text-center mt-12 px-4">
          <p className="text-gray-300 mb-4">Have all the requirements ready?</p>
          <p className="text-lg font-semibold text-cta-orange mb-6">
            Contact us to start your partnership journey today!
          </p>
          <motion.div {...buttonInteraction} className="inline-block">
            <Button
              size="lg"
              className="bg-cta-orange hover:bg-accent-dusty text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cta-orange/30 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/BrecksCarRentalCavite",
                  "_blank"
                )
              }
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
