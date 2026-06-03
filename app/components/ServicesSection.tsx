"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();
  const s = t.home.services;

  return (
    <section className="py-24 px-6 border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
            {s.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {s.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.items.map((item) => (
            <div
              key={item.title}
              className="bg-drn-bg-secondary rounded-2xl p-7 border border-white/8 hover:border-drn-accent/20 hover:bg-drn-bg-tertiary transition-all duration-300 cursor-default"
            >
              <h3 className="text-white font-semibold text-base mb-3">{item.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
