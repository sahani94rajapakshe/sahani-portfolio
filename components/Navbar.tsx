"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";
import { EASE } from "./ui/motion";
import { MenuIcon, XIcon } from "./ui/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050510]/85 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
        style={{ scaleX: progress }}
      />

      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent transition-opacity hover:opacity-80"
        >
          {siteConfig.initials}
          <span className="text-white/80">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/15"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            );
          })}
          <li className="ml-2">
            <motion.a
              href={`mailto:${siteConfig.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-purple-500/20"
            >
              Hire Me
            </motion.a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
        >
          {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden border-b border-white/10 bg-[#050510]/95 backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              className="space-y-1 px-6 py-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white ${
                      activeSection === link.href ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="pt-2"
              >
                <a
                  href={`mailto:${siteConfig.email}`}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-md shadow-purple-500/20"
                >
                  Hire Me
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
