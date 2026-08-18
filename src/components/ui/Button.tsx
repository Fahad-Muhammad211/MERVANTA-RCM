import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline-light";
  size?: "default" | "lg" | "sm";
  icon?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 whitespace-nowrap group";

const variants = {
  primary: "bg-teal-500 text-white hover:bg-teal-600 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]",
  secondary: "bg-white text-ink-900 border border-slate-200 hover:border-ink-900",
  ghost: "text-ink-900 hover:text-teal-600",
  "outline-light": "border border-white/30 text-white hover:bg-white/10",
};

const sizes = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  sm: "px-4 py-2 text-sm",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "default",
  icon = true,
  href,
  onClick,
  type = "button",
}: CommonProps & { href?: string; onClick?: () => void; type?: "button" | "submit" }) {
  const cls = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
