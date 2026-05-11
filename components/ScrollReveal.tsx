"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("active");

            // Stagger children
            const children = el.querySelectorAll(".reveal-child");
            children.forEach((child, i) => {
              (child as HTMLElement).style.transitionDelay = `${i * 80}ms`;
              child.classList.add("active");
            });

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
