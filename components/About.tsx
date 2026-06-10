"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about, siteConfig } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "./ui/motion";
import { SparklesIcon } from "./ui/Icons";
import profilePhoto from "@/images/Profile.jpeg";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="Engineering intelligent, production-grade software from frontend to AI backend."
        />

        <div className="grid items-start gap-12 lg:grid-cols-5">
          <FadeIn direction="right" className="lg:col-span-2">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="glow-border glass-card relative mx-auto flex aspect-square max-w-sm flex-col items-center justify-center rounded-3xl p-8"
            >
              <div
                className="absolute inset-4 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"
                aria-hidden="true"
              />

              <div className="relative text-center">
                <motion.div
                  className="relative mx-auto h-40 w-40 sm:h-44 sm:w-44"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <motion.div
                    className="absolute -inset-2 rounded-full"
                    style={{
                      background:
                        "conic-gradient(from 0deg, rgba(59,130,246,0.7), rgba(168,85,247,0.7), rgba(34,211,238,0.7), rgba(59,130,246,0.7))",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "3px",
                      borderRadius: "9999px",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    aria-hidden="true"
                  />
                  <div className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-white/10 shadow-xl shadow-purple-500/25">
                    <Image
                      src={profilePhoto}
                      alt={`Portrait of ${siteConfig.name}`}
                      fill
                      sizes="(max-width: 640px) 160px, 176px"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </motion.div>

                <p className="mt-6 text-lg font-semibold text-white">{siteConfig.name}</p>
                <p className="mt-1 text-sm text-muted">{siteConfig.title}</p>
                <p className="mt-2 text-xs text-gray-400">{siteConfig.location}</p>
                <p className="mt-1 text-xs text-gray-500">{siteConfig.locationDetail}</p>
              </div>
            </motion.div>
          </FadeIn>

          <div className="space-y-5 lg:col-span-3">
            {about.paragraphs.map((paragraph, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <p className="leading-relaxed text-gray-300">{paragraph}</p>
              </FadeIn>
            ))}

            <Stagger className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.07}>
              {about.highlights.map((highlight) => (
                <StaggerItem key={highlight}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="glass-card flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-300 hover:border-purple-400/30 hover:bg-white/[0.06]"
                  >
                    <SparklesIcon className="h-4 w-4 shrink-0 text-purple-400" />
                    <span className="text-sm text-gray-200">{highlight}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
