"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import { FadeIn } from "./ui/motion";
import { GraduationCapIcon } from "./ui/Icons";

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Academics" title="Education" />

        <div className="space-y-6">
          {education.map((entry) => (
            <FadeIn key={entry.degree}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glow-border glass-card flex flex-col gap-5 rounded-2xl p-7 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(59,130,246,0.18)] sm:flex-row sm:items-center"
              >
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 350, damping: 16 }}
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-500/30"
                >
                  <GraduationCapIcon className="h-8 w-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-white">{entry.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-purple-300">{entry.institution}</p>
                  <p className="mt-2 text-sm text-gray-300">{entry.detail}</p>
                  <p className="mt-1 text-sm text-muted">{entry.focus}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
