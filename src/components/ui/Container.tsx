import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10 lg:px-14",
        size === "default" && "max-w-[1360px]",
        size === "narrow" && "max-w-[880px]",
        size === "wide" && "max-w-[1600px]",
        className
      )}
    >
      {children}
    </div>
  );
}
