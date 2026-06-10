"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { experiences, type Experience as ExperienceEntry } from "@/lib/data";
import Badge from "./ui/Badge";
import SectionHeading from "./ui/SectionHeading";
import { EASE } from "./ui/motion";
import { BriefcaseIcon } from "./ui/Icons";

function ExperienceCard({ job }: { job: ExperienceEntry }) {
  const [expanded, setExpanded] = useState(false);
  const limit = job.featuredCount ?? job.achievements.length;
  const hasMore = job.achievements.length > limit;
  const visibleAchievements =
    expanded || !hasMore ? job.achievements : job.achievements.slice(0, limit);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="glass-card group relative rounded-2xl p-6 transition-all duration-300 hover:border-purple-400/30 hover:shadow-[0_8px_48px_rgba(168,85,247,0.18)]"
    >
      <div className="mb-1 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-3 py-1 text-xs font-semibold text-blue-300 ring-1 ring-blue-400/30">
          {job.period}
        </span>
        {job.current && (
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
            Current
          </span>
        )}
      </div>
      <h3 className="mt-2 text-lg font-bold text-white">{job.role}</h3>
      <p className="mt-0.5 text-sm font-medium text-purple-300">
        {job.company} · {job.location}
      </p>

      <ul className="mt-4 space-y-2">
        {visibleAchievements.map((achievement) => (
          <li key={achievement} className="flex gap-2.5 text-sm leading-relaxed text-gray-300">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
              aria-hidden="true"
            />
            {achievement}
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-3 text-sm font-medium text-blue-300 transition-colors hover:text-purple-300"
          aria-expanded={expanded}
        >
          {expanded
            ? "Show less"
            : `Show ${job.achievements.length - limit} more`}
        </button>
      )}

      <div className="mt-5 flex flex-wrap gap-2 border-t border-white/5 pt-4">
        {job.techStack.map((tech) => (
          <Badge key={tech} variant="gradient">
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <section id="experience" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Career"
          title="Experience Timeline"
          description="4+ years of building enterprise software across fintech, healthcare-tech, and AI-driven platforms."
        />

        <div ref={timelineRef} className="relative">
          <div
            className="absolute left-5 top-0 h-full w-px bg-white/10 sm:left-1/2"
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-400 sm:left-1/2"
            style={{ scaleY: lineProgress }}
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((job, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={`${job.company}-${job.period}`}
                  className={`relative flex flex-col sm:flex-row ${
                    isLeft ? "sm:justify-start" : "sm:justify-end"
                  }`}
                >
                  <motion.div
                    className="absolute left-5 top-1 z-10 -translate-x-1/2 sm:left-1/2"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
                  >
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-500/40 ring-4 ring-[#050510]">
                      <BriefcaseIcon className="h-4 w-4 text-white" />
                      {job.current && (
                        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-purple-500/40" />
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    className={`ml-14 sm:ml-0 sm:w-[calc(50%-3rem)] ${
                      isLeft ? "sm:mr-auto" : "sm:ml-auto"
                    }`}
                    initial={{ opacity: 0, x: isLeft ? -48 : 48 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    transition={{ duration: 0.7, ease: EASE }}
                  >
                    <ExperienceCard job={job} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
