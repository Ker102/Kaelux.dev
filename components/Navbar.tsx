"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" }, { name: "Projects", href: "#ventures" },
  { name: "MedAI", href: "/medai" }, { name: "Automations", href: "/openclaw" },
  { name: "Collaborate", href: "/pricing" }, { name: "About", href: "/about" },
  { name: "Wiki", href: "/wiki" }, { name: "Contact", href: "#contact" },
];
export default function Navbar() {
  const pathname = usePathname();
  return pathname?.startsWith("/links") ? null : <CompactNavbar />;
}
function CompactNavbar() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const homeHref = (href: string) => href.startsWith("#") && pathname !== "/" ? "/" + href : href;
  useEffect(() => {
    if (!isOpen) return;
    const outside = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setIsOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
  }, [isOpen]);
  const contactHref = pathname === "/medai" ? "#medai-contact" : homeHref("#contact");
  return (
    <header className="lab-nav pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <Link href="/" aria-label="Kaelux home" className="lab-nav-home pointer-events-auto fixed left-4 top-5 md:hidden">
        <Image src="/kaelux-icon-v3.png" alt="" width={1536} height={1565} className="h-10 w-10 rounded-lg object-contain" />
      </Link>
      <div ref={containerRef} className="lab-nav-disclosure pointer-events-auto relative">
        <button ref={toggleRef} type="button" aria-expanded={isOpen} aria-controls="kaelux-navigation"
          onClick={() => setIsOpen((open) => !open)}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") { event.preventDefault(); setIsOpen(true); requestAnimationFrame(() => firstLinkRef.current?.focus()); }
          }}
          className="lab-nav-toggle flex h-11 w-[8.75rem] items-center justify-center gap-2 rounded-full border border-white/20 bg-neutral-900/90 text-sm font-medium text-white shadow-lg backdrop-blur-md">
          {isOpen ? <X size={17} aria-hidden="true" /> : <Menu size={17} aria-hidden="true" />}
          {isOpen ? "Close" : "Explore"}
        </button>
        <div className="lab-nav-drawer absolute left-1/2 top-[3.5rem] w-[min(48rem,calc(100vw-2rem))] -translate-x-1/2">
        <AnimatePresence>
          {isOpen && (
            <motion.nav id="kaelux-navigation" aria-label="Main navigation"
              initial={reducedMotion ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reducedMotion ? 0 : -6 }}
              transition={{ duration: reducedMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="lab-nav-panel overflow-y-auto rounded-lg border border-white/15 bg-neutral-950/95 p-3 text-white shadow-2xl backdrop-blur-md">
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
                {navLinks.map((link, index) => (
                  <Link ref={index === 0 ? firstLinkRef : undefined} key={link.name} href={homeHref(link.href)}
                    onClick={() => setIsOpen(false)} aria-current={pathname === link.href ? "page" : undefined}
                    className="lab-nav-link flex min-h-12 items-center justify-between gap-3 rounded-md px-4 py-3 text-sm">
                    {link.name}<ArrowUpRight size={15} className="text-white/45" aria-hidden="true" />
                  </Link>
                ))}
              </div>
              <div className="lab-nav-footer mt-3 flex items-center justify-between gap-4 border-t border-white/15 px-4 pt-4 pb-1 text-sm">
                <span className="text-white/55">Research, tools, and collaboration.</span>
                <Link href="/links" className="text-white underline underline-offset-4" onClick={() => setIsOpen(false)}>All links</Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
        </div>
      </div>
      <Link href={contactHref} className="lab-nav-contact pointer-events-auto fixed right-3 top-5 flex h-11 items-center rounded-full border border-white/20 bg-neutral-900/90 px-3 text-xs font-medium text-white backdrop-blur-md md:right-6 md:px-5 md:text-sm">Contact</Link>
    </header>
  );
}
