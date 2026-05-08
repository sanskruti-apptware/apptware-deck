"use client";

import { ArrowRight } from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 cta-gradient opacity-60" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
          The window to move on AI is open.
          <br />
          <span className="gradient-text">Let&apos;s build before it closes.</span>
        </h2>
        <p className="text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
          Book a free strategy call. We&apos;ll map where AI restructures your market and what to build first.
        </p>

        <a
          href="mailto:[EMAIL_ADDRESS]"
          className="btn-cta mb-12"
        >
          Book a Free Strategy Call
          <ArrowRight size={18} />
        </a>

        {/* Contact details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 flex-wrap">
          <a href="mailto:[EMAIL_ADDRESS]" className="text-sm text-muted hover:text-foreground transition-colors font-medium">
            [EMAIL_ADDRESS]
          </a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-light" />
          <a href="tel:+919975352335" className="text-sm text-muted hover:text-foreground transition-colors font-medium">
            +1 (862) 348-9095
          </a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-light" />
          <a href="https://www.axioai.co" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors font-medium">
            www.axioai.co
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          {[
            { icon: FaLinkedin, label: "LinkedIn", href: "#" },
            { icon: FaTwitter, label: "Twitter", href: "#" },
            { icon: FaInstagram, label: "Instagram", href: "#" },
            { icon: FaFacebook, label: "Facebook", href: "#" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="social-icon"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
