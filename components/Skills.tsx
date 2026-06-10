"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import { EASE } from "./ui/motion";
import { skillIconMap } from "./ui/Icons";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: EASE } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 bg-surface/50 py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 max-w-3xl rounded-full bg-blue-600/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="A full-stack toolkit spanning modern frontend, distributed backend systems, and generative AI."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
        >
          {skillCategories.map((category) => {
            const Icon = skillIconMap[category.icon as keyof typeof skillIconMap];
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative h-full"
              >
                {/* Gradient glow behind card on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 opacity-0 blur-sm transition-all duration-500 group-hover:from-blue-500/40 group-hover:via-purple-500/40 group-hover:to-cyan-500/40 group-hover:opacity-100" />

                <div className="glass-card relative h-full rounded-2xl p-6 transition-shadow duration-300 group-hover:shadow-[0_8px_40px_rgba(99,102,241,0.2)]">
                  <div className="mb-4 flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300 ring-1 ring-white/10 transition-colors duration-300 group-hover:from-blue-500/35 group-hover:to-purple-500/35 group-hover:text-purple-200"
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                    </motion.div>
                    <h3 className="font-semibold text-white">{category.title}</h3>
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } },
                    }}
                  >
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={chipVariants}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="inline-flex cursor-default items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-white/10 transition-colors hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white hover:ring-purple-400/40"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
