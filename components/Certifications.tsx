"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import { FadeIn } from "./ui/motion";
import { AwardIcon } from "./ui/Icons";

export default function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-20 bg-surface/50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Credentials" title="Certifications" />

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <FadeIn key={cert.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass-card flex flex-col gap-5 rounded-2xl p-7 transition-all duration-300 hover:border-purple-400/30 hover:shadow-[0_8px_40px_rgba(168,85,247,0.15)] sm:flex-row sm:items-center"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 350, damping: 16 }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/25 to-blue-500/25 text-purple-300 ring-1 ring-white/10"
                >
                  <AwardIcon className="h-7 w-7" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                  {cert.target && (
                    <p className="mt-1 text-xs text-gray-400">{cert.target}</p>
                  )}
                </div>
                <span className="self-start rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-semibold text-amber-300 ring-1 ring-amber-400/30 sm:self-center">
                  {cert.status}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
