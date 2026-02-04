"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  images: {
    image: string;
    title?: string;
  }[];
  className?: string; // For the outermost wrapper
  containerClassName?: string; // For the aspect-ratio/relative container
  imageClassName?: string; // For the Image components
  overlayClassName?: string; // For an optional dark/gradient overlay
}

export default function Carousel({
  images,
  className,
  containerClassName,
  imageClassName,
  overlayClassName,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const id = useId();

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "relative w-full aspect-[16/9]  overflow-hidden bg-black",
          containerClassName,
        )}
      >
        <div className="absolute inset-0 z-0">
          <Image
            key={`bg-${prevIndex}`}
            src={images[prevIndex].image}
            alt="background"
            fill
            className={cn("object-cover", imageClassName)}
            priority
          />
        </div>

        <div
          className={cn(
            "absolute inset-0 z-[5] pointer-events-none",
            overlayClassName,
          )}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="absolute inset-0 z-10 w-full h-full"
          >
            <Image
              src={images[currentIndex].image}
              alt={images[currentIndex].title || id}
              fill
              quality={95}
              className={cn("object-cover", imageClassName)}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
