"use client";

export default function Footer() {
  return (
    <footer className="bg-section-bg border-t border-border-light py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/founders/logo.png" 
              alt="Axio AI Logo" 
              className="h-6 w-auto object-contain drop-shadow-sm"
            />
            <span className="text-lg font-bold text-foreground tracking-tight uppercase">
              AXIO <span className="gradient-text">AI</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-light">
            © {new Date().getFullYear()} Axio AI. All rights reserved.
          </div>

          {/* Tagline */}
          <div className="text-sm font-medium text-muted">
            AI Strategy · Engineering · Execution
          </div>
        </div>
      </div>
    </footer>
  );
}
