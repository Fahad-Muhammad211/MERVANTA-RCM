import Link from "next/link";
import { Rss, MessageCircle, Globe2, Mail, Phone, MapPin } from "lucide-react";
import { footerColumns } from "@/data/nav";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 text-slate-300">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 lg:grid-cols-8">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-500">
                <span className="font-display text-base text-white">M</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg tracking-tight text-white">MERVANTA</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-300">
                  RCM
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-slate-400">
              End-to-end revenue cycle solutions for healthcare organizations worldwide.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { Icon: Globe2, label: "Mervanta RCM on LinkedIn" },
                { Icon: MessageCircle, label: "Mervanta RCM on X (Twitter)" },
                { Icon: Rss, label: "Mervanta RCM on Facebook" },
              ].map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-slate-400 transition-colors hover:border-teal-400 hover:text-teal-300"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {col.heading}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={`${col.heading}-${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Contact
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <a href="tel:+12145550147" className="hover:text-white">+1 (214) 555-0147</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <a href="mailto:hello@mervantarcm.com" className="hover:text-white">hello@mervantarcm.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" /> Global operations —{" "}
                <Link href="/locations" className="underline decoration-white/20 underline-offset-2 hover:text-white">
                  view all locations
                </Link>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center rounded-md bg-teal-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-600"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Mervanta RCM. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-white">Terms of Use</Link>
            <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
            <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
            <Link href="/security-compliance" className="hover:text-white">Security</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
