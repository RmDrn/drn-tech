"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function ContactCta() {
  const { t } = useLanguage();
  const cc = t.shared.contact_cta;

  return (
    <section className="py-24 px-6 border-t border-white/8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {cc.title}
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            {cc.description}
          </p>
        </div>
        <a
          href="/contact"
          className="shrink-0 px-8 py-3.5 bg-drn-accent text-drn-bg font-semibold text-sm rounded-full hover:bg-white transition-colors duration-200"
        >
          {cc.cta}
        </a>
      </div>
    </section>
  );
}
