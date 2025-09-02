"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  createContainer,
  createItem,
  defaultViewport,
} from "@/lib/motionVariants";

// Generate array of client images with varying heights for masonry effect
const generateClientImages = () => {
  const images = [];
  // More varied heights for better masonry effect
  const heights = [
    280, 320, 240, 360, 300, 350, 260, 380, 290, 340, 270, 330, 250, 370, 310,
    390, 275, 325, 285, 355,
  ];

  for (let i = 1; i <= 20; i++) {
    images.push({
      id: i,
      src: `/clients/client-${i}.jpg`,
      alt: `Client ${i}`,
      height: heights[i - 1], // Use specific height for each image
    });
  }
  return images;
};

const clientImages = generateClientImages();

interface ClientGalleryProps {
  className?: string;
  initialVisible?: number;
  showMoreIncrement?: number;
}

export default function ClientGallery({
  className,
  initialVisible = 8,
  showMoreIncrement = 4,
}: ClientGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(initialVisible);
  const [showAll, setShowAll] = useState(false);
  const [columns, setColumns] = useState(4);

  // Update column count based on screen size
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else if (window.innerWidth < 1280) setColumns(3);
      else setColumns(4);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const displayedImages = showAll
    ? clientImages
    : clientImages.slice(0, visibleCount);
  const hasMore = visibleCount < clientImages.length;

  // Organize images into columns for masonry layout
  const organizeIntoColumns = (
    images: typeof clientImages,
    columnCount: number
  ) => {
    const cols: (typeof clientImages)[] = Array.from(
      { length: columnCount },
      () => []
    );

    images.forEach((image, index) => {
      const columnIndex = index % columnCount;
      cols[columnIndex].push(image);
    });

    return cols;
  };

  const imageColumns = organizeIntoColumns(displayedImages, columns);

  const handleShowMore = () => {
    if (visibleCount + showMoreIncrement >= clientImages.length) {
      setVisibleCount(clientImages.length);
      setShowAll(true);
    } else {
      setVisibleCount((prev) => prev + showMoreIncrement);
    }
  };

  const handleShowLess = () => {
    setVisibleCount(initialVisible);
    setShowAll(false);
  };

  return (
    <section className={cn("py-16 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          variants={createContainer({ staggerChildren: 0.1 })}
          className="text-center mb-12"
        >
          <motion.h2
            variants={createItem()}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Our Valued Clients
          </motion.h2>
          <motion.p
            variants={createItem()}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Trusted by hundreds of satisfied clients and renters who have made
            their dream spaces a reality
          </motion.p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          key={`gallery-${visibleCount}-${columns}`}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          variants={createContainer({ staggerChildren: 0.02 })}
          className="flex gap-4"
        >
          {imageColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex-1 flex flex-col gap-4">
              {column.map((image, imageIndex) => (
                <motion.div
                  key={image.id}
                  variants={createItem({ duration: 0.6 })}
                  className="group relative overflow-hidden rounded-lg bg-muted"
                  style={{
                    height: `${image.height}px`,
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={
                        columnIndex * column.length + imageIndex <
                        initialVisible
                          ? "eager"
                          : "lazy"
                      }
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Show More/Less Button */}
        {(hasMore || showAll) && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={defaultViewport}
            variants={createItem({ duration: 0.5 })}
            className="flex justify-center mt-12"
          >
            {hasMore && !showAll ? (
              <Button
                onClick={handleShowMore}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-base hover:scale-105 transition-transform"
              >
                Show More Clients
                <span className="ml-2 text-sm text-muted-foreground">
                  ({clientImages.length - visibleCount} remaining)
                </span>
              </Button>
            ) : (
              <Button
                onClick={handleShowLess}
                variant="ghost"
                size="lg"
                className="px-8 py-3 text-base hover:scale-105 transition-transform"
              >
                Show Less
              </Button>
            )}
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          variants={createContainer({ staggerChildren: 0.1 })}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          <motion.div variants={createItem()}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {clientImages.length}+
            </div>
            <div className="text-muted-foreground">Happy Clients</div>
          </motion.div>
          <motion.div variants={createItem()}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              100%
            </div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </motion.div>
          <motion.div variants={createItem()}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              5★
            </div>
            <div className="text-muted-foreground">Average Rating</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
