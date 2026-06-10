"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { hero, siteConfig } from "@/lib/data";
import GradientButton from "./ui/GradientButton";
import { EASE } from "./ui/motion";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./ui/Icons";

const TYPING_SPEED = 65;
const DELETING_SPEED = 35;
const HOLD_DURATION = 2000;

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];

    if (!deleting && text === word) {
      const hold = setTimeout(() => setDeleting(true), HOLD_DURATION);
      return () => clearTimeout(hold);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? DELETING_SPEED : TYPING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  const typedText = useTypewriter(hero.typedRoles);

  // Mouse-follow spotlight
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const spotlight = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${(x as number) * 100}% ${
        (y as number) * 100
      }%, rgba(99, 102, 241, 0.12), transparent 70%)`
  );

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Animated aurora gradient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-blue-600/25 blur-[130px]"
          animate={{ x: [0, 60, -20, 0], y: [0, 40, 80, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 -right-40 h-[36rem] w-[36rem] rounded-full bg-purple-600/25 blur-[140px]"
          animate={{ x: [0, -70, 30, 0], y: [0, 60, -30, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-1/4 h-[26rem] w-[26rem] rounded-full bg-cyan-500/15 blur-[120px]"
          animate={{ x: [0, 50, -40, 0], y: [0, -50, 20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/3 top-1/3 h-72 w-72 rounded-full bg-indigo-500/15 blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Mouse-follow spotlight */}
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />

        {/* Floating particles */}
        {[
          { left: "12%", top: "24%", size: "h-3 w-3", color: "bg-blue-400/60", duration: 7 },
          { left: "80%", top: "30%", size: "h-2 w-2", color: "bg-purple-400/60", duration: 9 },
          { left: "24%", top: "72%", size: "h-2.5 w-2.5", color: "bg-cyan-300/50", duration: 8 },
          { left: "68%", top: "68%", size: "h-1.5 w-1.5", color: "bg-indigo-300/60", duration: 6 },
          { left: "45%", top: "16%", size: "h-2 w-2", color: "bg-violet-400/50", duration: 10 },
        ].map((particle, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${particle.size} ${particle.color}`}
            style={{ left: particle.left, top: particle.top }}
            animate={{ y: [0, -26, 0], x: [0, 14, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-16">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {hero.greeting}{" "}
            <span className="gradient-text">{hero.headline}</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 flex h-10 items-center text-xl font-semibold text-gray-200 sm:text-2xl"
          >
            <span>{typedText}</span>
            <span className="ml-1 inline-block h-7 w-[3px] rounded bg-gradient-to-b from-blue-400 to-purple-400 animate-blink" />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {hero.summary}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 flex items-center gap-2 text-sm text-gray-400"
          >
            <MapPinIcon className="h-4 w-4 text-purple-400" />
            {siteConfig.location}
            <span className="text-gray-500">·</span>
            <span>{siteConfig.locationDetail}</span>
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <GradientButton href="#contact">
              <MailIcon className="h-4 w-4" />
              Get In Touch
            </GradientButton>
            <GradientButton href={siteConfig.resumeFile} variant="outline" external>
              <DownloadIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </GradientButton>
            <div className="flex items-center gap-2">
              {[
                { href: siteConfig.github, label: "GitHub profile", Icon: GitHubIcon },
                { href: siteConfig.linkedin, label: "LinkedIn profile", Icon: LinkedInIcon },
              ].map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition-colors hover:border-purple-400/40 hover:text-white hover:shadow-[0_0_18px_rgba(168,85,247,0.3)]"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="mt-14 grid max-w-xl grid-cols-3 gap-4">
            {hero.stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card rounded-2xl p-4 text-center"
              >
                <p className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-gray-400 sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
          <motion.div
            className="h-2 w-1 rounded-full bg-gradient-to-b from-blue-400 to-purple-400"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.a>
    </section>
  );
}
