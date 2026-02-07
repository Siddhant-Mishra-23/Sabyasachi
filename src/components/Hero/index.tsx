"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen w-full items-center justify-end overflow-hidden px-4 pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Sabyasachi.jpeg"
          alt="Sabyasachi Mishra"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Overlay gradient to ensure text readability on the right side */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-end text-right">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block text-3xl font-medium mb-4 sm:text-4xl">Hi, I&apos;m</span>
              <span className="block">Sabyasachi Mishra</span>
            </motion.h1>

            <motion.p
              className="mb-10 text-lg font-medium text-white/90 sm:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Former CEO • Strategic Consultant • Leadership Coach
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
