"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";
import {
  createContainer,
  createItem,
  defaultViewport,
} from "@/lib/motionVariants";

export function Contact() {
  const container = createContainer({ staggerChildren: 0.1 });
  const item = createItem({ y: 20, duration: 0.5 });

  return (
    <motion.section
      id="contact"
      className="py-16 px-4 bg-gray-800"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={item} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to start earning passive income? Contact us to learn more
            about our vehicle partnership program.
          </p>
        </motion.div>

        <motion.div variants={item} className="grid md:grid-cols-3 gap-8">
          {/* Email Contact */}
          <a 
            href="mailto:Breckscarrental@gmail.com"
            className="block transition-transform hover:scale-105"
          >
            <Card className="bg-blue-600/10 border-blue-600/20 h-full cursor-pointer hover:bg-blue-600/20 transition-colors">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Mail className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-200 text-lg font-medium">
                  Breckscarrental@gmail.com
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  Send us an email for inquiries and partnership details
                </p>
              </CardContent>
            </Card>
          </a>

          {/* Phone Contact */}
          <Card className="bg-green-600/10 border-green-600/20">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Phone className="h-8 w-8 text-green-400" />
              </div>
              <CardTitle className="text-xl font-bold text-white">Phone</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-green-200 text-lg font-medium">
                (0997) 804 5821
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Call us directly for immediate assistance
              </p>
            </CardContent>
          </Card>

          {/* Office Address */}
          <Card className="bg-purple-600/10 border-purple-600/20">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-8 w-8 text-purple-400" />
              </div>
              <CardTitle className="text-xl font-bold text-white">
                Office Address
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-purple-200 text-base leading-relaxed">
                Blk1 Lot3 Alley 16 Phase 2A Grand Riverside Subdivision
                Brgy. Pasong Camachile I General Trias Cavite 4107
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Visit us for face-to-face consultations
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={item} className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            asChild
          >
            <a
              href="https://www.facebook.com/share/1CH5WRe36k/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Now
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
