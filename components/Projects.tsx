"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type MouseEvent } from "react";
import { projects, type Project } from "@/lib/data";
import Badge from "./ui/Badge";
import SectionHeading from "./ui/SectionHeading";
import { EASE } from "./ui/motion";
import { CodeIcon, ExternalLinkIcon, GitHubIcon } from "./ui/Icons";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 200, damping: 25 });
  const springY = useSpring(y, { stiffness: 200, damping: 25 });
  const rotateX = useTransform(springY, [0, 1], [5, -5]);
  const rotateY = useTransform(springX, [0, 1], [-5, 5]);
  const spotlight = useTransform(
    [springX, springY],
    ([sx, sy]) =>
      `radial-gradient(420px circle at ${(sx as number) * 100}% ${
        (sy as number) * 100
      }%, rgba(124, 58, 237, 0.14), transparent 65%)`
  );

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  };

  const resetTilt = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const isProfessional = project.category === "professional";
  const badgeLabel =
    project.status ?? (isProfessional ? "Work Highlight" : "Open Source");
  const badgeStyles = project.status
    ? "bg-amber-500/15 text-amber-300 ring-amber-400/30"
    : isProfessional
      ? "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30"
      : "bg-blue-500/15 text-blue-300 ring-blue-400/30";

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl"
      >
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-cyan-500/30 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="glass-card relative m-px flex h-full flex-col rounded-2xl p-7">
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: spotlight }}
          />

          <div className="relative mb-6 flex h-36 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-purple-600/20 ring-1 ring-white/10">
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <motion.div
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl shadow-purple-500/40"
              whileHover={{ rotate: 6, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <CodeIcon className="h-7 w-7 text-white" />
            </motion.div>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </div>

          <div className="relative flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ring-1 ${badgeStyles} ${
                    project.status ? "tracking-wide" : "uppercase tracking-wider"
                  }`}
                >
                  {badgeLabel}
                </span>
                {project.company && (
                  <span className="text-xs text-muted">{project.company}</span>
                )}
              </div>
              {project.statusDetail && (
                <p className="mb-1 text-xs text-muted">{project.statusDetail}</p>
              )}
              <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
                {project.title}
              </h3>
            </div>
            {project.githubUrl ? (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                whileHover={{ scale: 1.15, rotate: 6 }}
                whileTap={{ scale: 0.95 }}
                className="shrink-0 rounded-full p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <GitHubIcon className="h-5 w-5" />
              </motion.a>
            ) : project.githubPlaceholder ? (
              <span
                aria-label="GitHub repository coming soon"
                className="shrink-0 cursor-not-allowed rounded-full p-2 text-gray-500"
                title="GitHub repository coming soon"
              >
                <GitHubIcon className="h-5 w-5" />
              </span>
            ) : null}
          </div>

          <p className="relative mt-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <ul className="relative mt-4 flex-1 space-y-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-gray-300">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="relative mt-6 flex flex-wrap items-center gap-2 border-t border-white/5 pt-5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="gradient">
                {tech}
              </Badge>
            ))}
          </div>

          {(project.githubUrl || project.githubPlaceholder || project.demoUrl) && (
            <div className="relative mt-5 flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 transition-colors hover:text-purple-300"
                >
                  View on GitHub
                  <ExternalLinkIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </a>
              )}
              {project.githubPlaceholder && !project.githubUrl && (
                <span
                  className="inline-flex cursor-not-allowed items-center gap-1.5 text-sm font-semibold text-gray-500"
                  title="GitHub repository coming soon"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub — Coming Soon
                </span>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 transition-colors hover:text-purple-300"
                >
                  Watch Demo
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 bg-surface/50 py-24">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-64 max-w-3xl rounded-full bg-purple-600/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          description="Production work highlights and open-source projects across AI, fintech, and automation."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

