"use client";

export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/[0.06] py-10">
      <div className="container-custom w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src="/founders/logo.png"
            alt="Axio AI Logo"
            className="h-6 w-auto object-contain invert opacity-60"
          />
          <span className="text-[16px] font-display font-bold tracking-[0.08em] text-white/60 uppercase">
            AXIO AI
          </span>
        </div>
        <p className="font-mono text-[11px] text-white/25">
          © {new Date().getFullYear()} Axio AI. All rights reserved.
        </p>
        <p className="font-mono text-[11px] text-white/25">
          AI Strategy · Engineering · Execution
        </p>
      </div>
    </footer>
  );
}
