"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HomeChallenge = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  const workplaceVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  // Image data
  const leftImages = [{ src: "/images/women/1.jpg", alt: "Women empowerment" }];

  const centerImages = [
    { src: "/images/classes/1.jpg", alt: "Training session" },
    { src: "/images/classes/2.jpg", alt: "Learning environment" },
    { src: "/images/classes/3.jpg", alt: "Educational program" },
  ];

  const rightImages = [
    { src: "/images/women/2.jpg", alt: "Community support" },
    { src: "/images/women/3.jpg", alt: "Women collaboration" },
  ];

  return (
    <section className="font-apple px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-20 max-w-[1600px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.h1
          variants={titleVariants}
          className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8"
        >
          Education challenge
        </motion.h1>

        <motion.p
          variants={textVariants}
          className=" opacity-80 text-base md:text-lg max-w-2xl mb-12 md:mb-16 lg:mb-20 leading-relaxed blur-2xl"
        >
          The public schools in Africa are characterized by devastating
          conditions and overcrowding, which do not allow for effective
          learning. In South Africa, for instance, over 8,000 public schools
          need over 2 million USD to fix conditions that have seen some
          classrooms have as many as 139 pupils. This makes it hard for pupils
          to ask questions and understand their daily lessons, which makes them
          lose interest in furthering their studies.
        </motion.p>

        {/* Images Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6 mb-12 md:mb-16 lg:mb-20">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-3 grid grid-cols-1 gap-4 md:gap-5 lg:gap-6"
          >
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={leftImages[0].src}
                alt={leftImages[0].alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Center Column */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5 lg:gap-6"
          >
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-64 md:h-72 lg:h-56 overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={centerImages[0].src}
                alt={centerImages[0].alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={centerImages[1].src}
                alt={centerImages[1].alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-64 md:h-72 lg:h-64 overflow-hidden rounded-lg shadow-lg sm:col-span-2 lg:col-span-1"
            >
              <Image
                src={centerImages[2].src}
                alt={centerImages[2].alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-4 grid grid-cols-1 gap-4 md:gap-5 lg:gap-6"
          >
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-64 md:h-72 lg:h-56 overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={rightImages[0].src}
                alt={rightImages[0].alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-64 md:h-72 lg:h-64 overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={rightImages[1].src}
                alt={rightImages[1].alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Our Workplace Section */}
        <motion.div variants={workplaceVariants} className="max-w-4xl">
          <p className=" opacity-80 text-base md:text-lg leading-relaxed mb-4 md:mb-5">
            In addition, most learning systems focus more on theoretical
            knowledge compared to practical knowledge, which means the students
            lack exposure to the modern world. Basic needs, such as the type of
            food to be taken to school, act as a challenge, especially in
            Rwanda, where parents cannot afford 3,000 Rwandans per meal. In
            addition, the lack of technology for practical knowledge, especially
            for science-related courses, means the students can only learn
            theoretical concepts.
          </p>

          <p className="opacity-80  text-sm md:text-base leading-relaxed">
            The gender biases and traditional laws have been systematic in
            nature and have hindered women from moving into senior positions
            such as Principal or Head of Department. The inhibiting factors are
            often backed by religious constraints and biological excuses that
            hinder women from achieving their professional aspirations. In spite
            of these hurdles, women in leadership positions have been proven
            effective in enhancing school environments and procuring vital
            resources via strategic corporate partnerships.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeChallenge;
