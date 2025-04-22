"use client";

import { cubicBezier, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type SmoothRevealProps = {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
};

const SmoothReveal: React.FC<SmoothRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 100,
  className = "",
  once = true,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const getDirectionalProps = () => {
    switch (direction) {
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "up":
      default:
        return { y: distance };
    }
  };

  const customEasing = cubicBezier(0.2, 0.0, 0.0, 1.0);

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionalProps(),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        ease: customEasing,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SmoothReveal;
