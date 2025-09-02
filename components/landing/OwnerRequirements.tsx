"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  createContainer,
  createItem,
  defaultViewport,
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
      description: "Installed by our trusted partner",
      details: "Professional installation required for tracking",
      color: "text-accent-burgundy",
      bgColor: "bg-accent-burgundy/10",
      borderColor: "border-accent-burgundy/20",
    },
  ];

  return (
    <motion.section
      id="requirements"
      className="py-16 px-4 bg-gray-800"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={item} className="text-center mb-12">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
        >
          {requirements.map((requirement, index) => {
            const IconComponent = requirement.icon;
            return (
              <motion.div key={index} variants={item}>
                <Card
                  className={`${requirement.bgColor} ${requirement.borderColor} border-2 hover:border-opacity-40 transition-all duration-300 h-full`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div
                        className={`p-3 rounded-full ${requirement.bgColor} border ${requirement.borderColor}`}
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
                  <CardContent className="text-center pt-0">
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
        <motion.div variants={item} className="mt-12">
          <Card className="bg-gray-700 border-gray-600">
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
                      GPS installation by certified partners only
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cta-orange mt-1">•</span>
                      Dashcam highly recommended for protection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cta-orange mt-1">•</span>
                      All installations at no cost to owner
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={item} className="text-center mt-12">
          <p className="text-gray-300 mb-4">Have all the requirements ready?</p>
          <p className="text-lg font-semibold text-cta-orange">
            Contact us to start your partnership journey today!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
