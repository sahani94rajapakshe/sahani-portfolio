import type { ReactNode } from "react";

type GradientButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
};

export default function GradientButton({
  href,
  children,
  variant = "primary",
  external = false,
}: GradientButtonProps) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  if (variant === "outline") {
    return (
      <a
        href={href}
        {...externalProps}
        className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/10 hover:shadow-[0_0_24px_rgba(168,85,247,0.25)]"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      {...externalProps}
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(124,58,237,0.45)] active:scale-100"
    >
      {children}
    </a>
  );
}
