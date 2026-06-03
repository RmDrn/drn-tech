"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

export default function TermsOfService() {
  const { t } = useLanguage();
  const tos = t.terms_of_service;

  return (
    <>
      <Nav />
      <main>
        <section className="pt-40 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
              {tos.label}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              {tos.title}
            </h1>
            <p className="text-white/40 text-sm">{tos.updated}</p>
          </div>
        </section>

        <section className="py-16 px-6 border-t border-white/8">
          <div className="max-w-3xl mx-auto space-y-12">
            {tos.sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-white font-semibold text-lg mb-3">{s.title}</h2>
                <p className="text-white/70 leading-relaxed whitespace-pre-line">
                  {s.body}
                  {s.link && (
                    <a
                      href="mailto:contact@drn-tech.com"
                      className="text-drn-accent hover:text-white transition-colors duration-200"
                    >
                      contact@drn-tech.com
                    </a>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
