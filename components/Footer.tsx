"use client";

export default function Footer() {
  return (
    <footer className="bg-section-bg border-t border-border-light py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-[10px]">N</span>
            </div>
            <span className="text-lg font-bold text-foreground tracking-tight">
              Nex<span className="gradient-text">AI</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-light">
            © {new Date().getFullYear()} NexAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
