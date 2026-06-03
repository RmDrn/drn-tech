"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function OvocioTeaser() {
  const { t } = useLanguage();
  const ot = t.shared.ovocio_teaser;

  return (
    <section className="py-24 px-6 border-t border-white/8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div>
          <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-4">
            {ot.label}
          </p>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-3">
            {ot.title}
          </h2>
          <p className="text-white/55 text-lg max-w-lg leading-relaxed">
            {ot.description}
          </p>
        </div>
        <a
          href="/products/ovocio"
          className="shrink-0 px-7 py-3 bg-drn-accent text-drn-bg font-semibold text-sm rounded-full hover:bg-white transition-colors duration-200"
        >
          {ot.cta}
        </a>
      </div>
    </section>
  );
}
