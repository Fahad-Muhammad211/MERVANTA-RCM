"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { mainNav } from "@/data/nav";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openWithHover = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeWithDelay = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-slate-200 bg-paper-0/95 backdrop-blur-md"
          : "border-transparent bg-paper-0"
      )}
    >
      <div className="mx-auto flex h-18 max-w-[1360px] items-center justify-between px-6 py-3 md:px-10 lg:px-14">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink-900">
            <span className="font-display text-base text-white">M</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight text-ink-900">MERVANTA</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600">
              RCM
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.groups && openWithHover(item.label)}
              onMouseLeave={closeWithDelay}
            >
              {item.groups ? (
                <button
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:text-teal-600",
                    openMenu === item.label && "text-teal-600"
                  )}
                  aria-expanded={openMenu === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      openMenu === item.label && "rotate-180"
                    )}
                  />
                </button>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:text-teal-600",
                    pathname === item.href && "text-teal-600"
                  )}
                >
                  {item.label}
                </Link>
              )}

              <AnimatePresence>
                {item.groups && openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute left-1/2 top-full z-50 mt-3 w-[min(640px,90vw)] -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-6 shadow-[0_24px_60px_-16px_rgba(10,22,38,0.22)]"
                  >
                    <div className="grid grid-cols-2 gap-8">
                      {item.groups.map((group) => (
                        <div key={group.heading}>
                          <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                            {group.heading}
                          </div>
                          <ul className="space-y-1">
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="block rounded-md px-2.5 py-2 text-sm text-ink-800 transition-colors hover:bg-slate-50 hover:text-teal-600"
                                >
                                  <div className="font-medium">{link.label}</div>
                                  {link.description && (
                                    <div className="text-xs text-slate-400">{link.description}</div>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+12145550147"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-ink-900"
          >
            <Phone className="h-3.5 w-3.5" />
            +1 (214) 555-0147
          </a>
          <Button href="/contact" size="sm">
            Schedule a Consultation
          </Button>
        </div>

        <button
          className="p-2 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="max-h-[75vh] overflow-y-auto px-6 py-6">
              {mainNav.map((item) => (
                <MobileNavItem key={item.label} item={item} />
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button href="/contact" size="default" className="w-full justify-center">
                  Schedule a Consultation
                </Button>
                <Button href="/contact" variant="secondary" size="default" className="w-full justify-center">
                  Get a Free RCM Assessment
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileNavItem({ item }: { item: (typeof mainNav)[number] }) {
  const [open, setOpen] = useState(false);
  if (!item.groups) {
    return (
      <Link href={item.href ?? "#"} className="block border-b border-slate-100 py-3.5 text-base font-medium text-ink-900">
        {item.label}
      </Link>
    );
  }
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3.5 text-base font-medium text-ink-900"
      >
        {item.label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pb-3"
          >
            {item.groups.map((group) => (
              <div key={group.heading} className="mb-3">
                <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {group.heading}
                </div>
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-1.5 text-sm text-slate-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
