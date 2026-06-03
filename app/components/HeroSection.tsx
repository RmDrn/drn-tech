"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const h = t.home.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Ambient background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-225 h-225 rounded-full bg-drn-accent/3 blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-drn-bg-tertiary/30 blur-[100px]" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
          {h.title_line1}
          <br />
          <span className="text-drn-accent">{h.title_line2}</span>
        </h1>

        <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          {h.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/products/ovocio"
            className="px-8 py-3.5 bg-drn-accent text-drn-bg font-semibold text-sm rounded-full hover:bg-white transition-colors duration-200"
          >
            {h.cta_primary}
          </a>
          <a
            href="/contact"
            className="px-8 py-3.5 border border-white/8 text-white text-sm rounded-full hover:border-drn-accent/30 hover:bg-white/5 transition-colors duration-200"
          >
            {h.cta_secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
