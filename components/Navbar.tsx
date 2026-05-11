"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Framework", href: "#framework" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#team" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-bg-dark/92 backdrop-blur-[16px] border-b border-white/5">
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/founders/logo.png"
            alt="Axio AI Logo"
            className="h-8 w-auto object-contain invert"
          />
          <span className="text-[18px] font-display font-bold tracking-[0.08em] text-text-dark uppercase">
            AXIO AI
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.06em] text-text-secondary hover:text-text-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="px-6 py-2.5 bg-text-dark text-bg-dark text-[12px] font-bold uppercase tracking-[0.08em] rounded-[2px] transition-colors hover:bg-accent"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-dark p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[60px] bg-bg-dark transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[20px] font-display font-bold uppercase tracking-[0.1em] text-text-secondary hover:text-text-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMobileOpen(false)}
            className="px-8 py-4 bg-text-dark text-bg-dark text-[14px] font-bold uppercase tracking-[0.1em] rounded-[2px]"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}