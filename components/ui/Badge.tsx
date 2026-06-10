type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "gradient";
};

export default function Badge({ children, variant = "default" }: BadgeProps) {
  if (variant === "gradient") {
    return (
      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 px-3 py-1 text-xs font-medium text-blue-300 ring-1 ring-inset ring-blue-400/25 transition-colors hover:ring-purple-400/40">
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-white/10 transition-colors hover:bg-white/10 hover:text-white">
      {children}
    </span>
  );
}
