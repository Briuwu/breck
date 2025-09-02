"use client";

import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  createContainer,
  createItem,
  defaultViewport,
} from "@/lib/motionVariants";

export function Footer() {
  const container = createContainer({ staggerChildren: 0.1 });
  const item = createItem({ y: 20, duration: 0.5 });

  return (
    <motion.footer
      className="bg-gray-900 text-white py-12 px-4"
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={item} className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/breck-logo.png"
                alt="Breck Car Rental Logo"
                width={32}
                height={32}
                className="mr-3"
              />
              <h3 className="text-2xl font-bold">Breck&apos;s Car Rental</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Providing reliable, affordable, and transparent car rental
              services in the Philippines. Join our Vehicle Partnership Program
              for passive income opportunities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1CH5WRe36k/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#partnership"
                  className="hover:text-white transition-colors"
                >
                  Partnership Model
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="hover:text-white transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a href="#rates" className="hover:text-white transition-colors">
                  Rates & Fees
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms & Agreement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent-blue" />
                <a
                  href="mailto:Breckscarrental@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Breckscarrental@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent-coral" />
                <span>(0997) 804 5821</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-maroon" />
                <span>
                  Blk1 Lot3 Alley 16 Phase 2A Grand Riverside Subdivision Brgy.
                  Pasong Camachile I General Trias Cavite 4107
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <Separator className="my-8 bg-gray-700" />

        <motion.div
          variants={item}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p>&copy; 2025 Breck&apos;s Car Rental. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
