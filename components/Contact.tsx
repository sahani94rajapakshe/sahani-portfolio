"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import GradientButton from "./ui/GradientButton";
import SectionHeading from "./ui/SectionHeading";
import { FadeIn, Stagger, StaggerItem } from "./ui/motion";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "./ui/Icons";

type ContactCard =
  | {
      icon: typeof MailIcon;
      label: string;
      href: string;
      value: string;
    }
  | {
      icon: typeof PhoneIcon;
      label: string;
      phones: string[];
    }
  | {
      icon: typeof MapPinIcon;
      label: string;
      value: string;
    };

const contactCards: ContactCard[] = [
  {
    icon: MailIcon,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    phones: siteConfig.phones,
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: `${siteConfig.location} — ${siteConfig.locationDetail}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]"
          animate={{ x: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/4 top-0 h-80 w-80 rounded-full bg-purple-600/15 blur-[120px]"
          animate={{ x: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Together"
          description="I'm open to full-time roles, freelance projects, and collaborations in AI and full-stack engineering. Drop me a message — I usually respond within a day."
        />

        <Stagger className="grid gap-6 sm:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const content = (
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass-card group flex h-full flex-col items-center gap-3 rounded-2xl p-7 text-center transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_8px_40px_rgba(59,130,246,0.18)]"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 16 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300 ring-1 ring-white/10 transition-colors duration-300 group-hover:text-purple-300"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                  {card.label}
                </p>
                {"phones" in card ? (
                  <div className="flex flex-col gap-2">
                    {card.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="text-sm text-gray-200 transition-colors hover:text-blue-300"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="break-all text-sm text-gray-200">{card.value}</p>
                )}
              </motion.div>
            );
            return (
              <StaggerItem key={card.label}>
                {"href" in card ? (
                  <a href={card.href} className="block h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn delay={0.25} className="mt-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <GradientButton href={`mailto:${siteConfig.email}`}>
              <MailIcon className="h-4 w-4" />
              Say Hello
            </GradientButton>
            <GradientButton href={siteConfig.linkedin} variant="outline" external>
              <LinkedInIcon className="h-4 w-4" />
              Connect on LinkedIn
            </GradientButton>
            <GradientButton href={siteConfig.github} variant="outline" external>
              <GitHubIcon className="h-4 w-4" />
              Follow on GitHub
            </GradientButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
