"use client";

import { motion } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";
import { FadeIn } from "./ui/motion";
import { ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./ui/Icons";

const socials = [
  {
    href: siteConfig.github,
    label: "GitHub profile",
    Icon: GitHubIcon,
    external: true,
    hover: "hover:border-blue-400/40",
  },
  {
    href: siteConfig.linkedin,
    label: "LinkedIn profile",
    Icon: LinkedInIcon,
    external: true,
    hover: "hover:border-purple-400/40",
  },
  {
    href: `mailto:${siteConfig.email}`,
    label: "Send email",
    Icon: MailIcon,
    external: false,
    hover: "hover:border-cyan-400/40",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface/70">
      {/* Gradient hairline on top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <FadeIn distance={20}>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <a
                href="#home"
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent"
              >
                {siteConfig.name}
              </a>
              <p className="mt-1 text-sm text-muted">{siteConfig.title}</p>
            </div>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              {socials.map(({ href, label, Icon, external, hover }) => (
                <motion.a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`rounded-full border border-white/10 bg-white/5 p-2.5 text-gray-400 transition-colors hover:text-white ${hover}`}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
              <motion.a
                href="#home"
                aria-label="Back to top"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2.5 text-white shadow-md shadow-purple-500/20"
              >
                <ArrowUpIcon className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/5 pt-6 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, TypeScript &
              Tailwind CSS.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
