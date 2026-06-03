"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function AboutBrief() {
  const { t } = useLanguage();
  const ab = t.home.about_brief;

  return (
    <section className="py-24 px-6 border-t border-white/8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
            {ab.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {ab.title_line1}
            <br />
            {ab.title_line2}
          </h2>
        </div>

        <div>
          <p className="text-white/55 text-base leading-relaxed mb-7">
            {ab.body}
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-drn-accent text-sm font-medium hover:text-white transition-colors duration-200"
          >
            {ab.link}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
