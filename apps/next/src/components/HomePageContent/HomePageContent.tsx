"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0px 10px 40px rgba(59, 130, 246, 0.3)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const floatingIcon = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 1,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

const generateParticles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    x: Math.random() * 60 - 30,
    y: Math.random() * 60 - 30,
    opacity: Math.random(),
    scale: Math.random() * 0.6 + 0.4,
    speed: Math.random() * 0.8 + 0.2,
  }));
};

const HomePageContent = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const particles = React.useMemo(() => generateParticles(8), []);
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  const cardWidth = 300;
  const cardHeight = 200;
  const perimeter = 2 * (cardWidth + cardHeight);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center px-4 container lg:gap-16">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="mt-16 w-full text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-6xl font-mono font-bold mb-6 leading-tight"
        >
          Learning <br /> Embedded Systems <br /> Redefined.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-400 font-mono text-center text-xl w-full mb-8"
        >
          The only platform you need to crack your embedded systems interviews.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          className="relative inline-block"
        >
          <motion.div
            className="absolute inset-0 rounded-lg bg-blue-600 blur-xl opacity-50"
            animate={{
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered ? 0.7 : 0.5,
            }}
            transition={{ duration: 0.4 }}
          />

          {isHovered &&
            particles.map((particle, index) => (
              <motion.div
                key={index}
                className="absolute w-1 h-1 bg-blue-300 rounded-full"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  x: particle.x,
                  y: particle.y,
                  opacity: particle.opacity,
                  scale: particle.scale,
                }}
                transition={{
                  duration: 1 * particle.speed,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}

          <motion.div
            className="relative overflow-hidden rounded-lg"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400"
              animate={{
                backgroundPosition: isHovered ? "100% 0%" : "0% 0%",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            <Link
              href="/problems"
              className="relative flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold text-white shadow-lg group"
            >
              <span>Start Learning</span>
              <motion.div
                animate={{
                  x: isHovered ? 5 : 0,
                  opacity: isHovered ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-white"
                initial={{ width: 0 }}
                animate={{ width: isHovered ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.header>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
        }}
        className="grid gap-8 mt-16 md:grid-cols-3 w-full"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="bg-gray-900 p-8 rounded-xl transition-colors shadow-lg relative"
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div
              variants={floatingIcon}
              animate="animate"
              className="text-blue-500 text-5xl mb-4"
            >
              {index === 0 ? "⚡" : index === 1 ? "🎯" : "🚀"}
            </motion.div>
            <h3 className="text-xl font-semibold mb-3">
              {index === 0
                ? "Hands-on Practice"
                : index === 1
                  ? "Interview Ready"
                  : "Industry Skills"}
            </h3>
            <p className="text-gray-400">
              {index === 0
                ? "Real-world projects with actual MCUs. Build your portfolio while you learn."
                : index === 1
                  ? "Company-specific preparation with curated coding questions."
                  : "Master protocols, drivers, and standards used in aerospace, automotive, and medical devices."}
            </p>

            {/* Animated bottom border */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-yellow-500"
              initial={{ width: 0 }}
              animate={{ width: hoveredCard === index ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default HomePageContent;
