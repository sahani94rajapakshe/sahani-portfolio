"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/** Shared easing curve for a premium, snappy feel. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Slide direction. Defaults to "up". */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Slide distance in px. */
  distance?: number;
  once?: boolean;
};

/** Fades + slides children into view when scrolled into the viewport. */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 32,
  once = true,
}: FadeInProps) {
  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** Delay between each child's entrance in seconds. */
  stagger?: number;
};

/** Container that staggers the entrance of its `StaggerItem` children. */
export function Stagger({ children, className, stagger = 0.1 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
