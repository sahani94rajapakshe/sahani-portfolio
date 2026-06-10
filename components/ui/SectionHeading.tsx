"use client";

import { motion } from "framer-motion";
import { EASE } from "./motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-14 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
        }}
        className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent-blue"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
        }}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1, transition: { duration: 0.6, ease: EASE } },
        }}
        className="mx-auto mt-4 h-1 w-20 origin-center rounded-full bg-gradient-to-r from-accent-blue to-accent-purple"
      />
      {description && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
          }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
