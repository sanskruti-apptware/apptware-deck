"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Framework", href: "#framework" },
  { label: "About", href: "#team" },
  { label: "Contact", href: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ Ensure hydration safety
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Scroll handling (only after mount)
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll(); // run once
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  // ✅ Body scroll lock (safe cleanup)
  useEffect(() => {
    if (!mounted) return;

    const original = document.body.style.overflow;

    document.body.style.overflow = mobileOpen ? "hidden" : original;

    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen, mounted]);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${mounted && scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src="/founders/logo.png" 
              alt="Axio AI Logo" 
              className="h-8 w-auto object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all"
            />
            <span className="text-xl font-bold text-foreground tracking-tight uppercase">
              AXIO <span className="gradient-text">AI</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="btn-cta">
              Book a Call
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-xl transition-all duration-300 ${mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="px-6 py-8 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-base font-medium text-muted hover:text-foreground hover:bg-gray-50 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4">
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="btn-cta w-full"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}