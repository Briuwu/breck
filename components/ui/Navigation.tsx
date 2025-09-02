"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Partnership", href: "#partnership" },
  { name: "Benefits", href: "#benefits" },
  { name: "Rates", href: "#rates" },
  { name: "Computations", href: "#computations" },
  { name: "Terms", href: "#terms" },
  { name: "Legal", href: "#legal" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navigationItems.map((item) => item.href.substring(1));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const navHeight = 80; // Height of the navigation bar
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  // Handle mobile menu item click
  const handleMobileNavClick = (href: string) => {
    // Small delay to allow menu animation before scrolling
    setTimeout(() => {
      scrollToSection(href);
    }, 100);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-lg border-b border-gray-700/50 shadow-xl"
          : "bg-gray-900/50 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("#hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent-blue">
              <Image
                src="/breck-logo.png"
                alt="Breck Car Rental Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">
                Breck&apos;s Car Rental
              </h1>
              <p className="text-xs text-gray-300">Vehicle Partnership</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                  activeSection === item.href.substring(1)
                    ? "text-white bg-blue-600 shadow-lg hover:bg-blue-700"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Contact CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 shadow-lg transition-all duration-200"
              onClick={() => scrollToSection("#contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-700/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={`w-full justify-start text-left rounded-lg transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? "text-white bg-blue-600 shadow-lg hover:bg-blue-700"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => handleMobileNavClick(item.href)}
                >
                  {item.name}
                </Button>
              ))}
              <div className="pt-4">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-200"
                  onClick={() => handleMobileNavClick("#contact")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
