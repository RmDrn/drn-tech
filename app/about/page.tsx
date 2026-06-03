"use client";

import Nav from "../components/Nav";
import OvocioTeaser from "../components/OvocioTeaser";
import ContactCta from "../components/ContactCta";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-10">
              {a.hero.label}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
              {a.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
              {a.hero.body}
            </p>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
                {a.pillars.label}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {a.pillars.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {a.pillars.items.map((p) => (
                <div key={p.title} className="bg-drn-bg-secondary rounded-2xl p-8 border border-white/8">
                  <h3 className="text-white font-semibold text-base mb-3">{p.title}</h3>
                  <p className="text-white/55 text-lg leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
                {a.values.label}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {a.values.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {a.values.items.map((v) => (
                <div key={v.label}>
                  <div className="w-8 h-px bg-drn-accent mb-6" />
                  <h3 className="text-white font-semibold text-base mb-3">{v.label}</h3>
                  <p className="text-white/55 text-lg leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OvocioTeaser />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
