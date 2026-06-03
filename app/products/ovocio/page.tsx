"use client";

import Image from "next/image";
import Nav from "../../components/Nav";
import ContactCta from "../../components/ContactCta";
import Footer from "../../components/Footer";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Ovocio() {
  const { t } = useLanguage();
  const o = t.ovocio;

  return (
    <>
      <Nav />
      <main>
        {/* Hero — dark, two columns */}
        <section className="pt-40 pb-0 px-6 overflow-visible">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-12">
            {/* Left */}
            <div className="flex-1 pb-6 md:pb-24">
              <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
                {o.hero.label}
              </p>
              <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-none mb-6">
                {o.hero.title_line1}
                <br />
                <span className="text-drn-accent">{o.hero.title_line2}</span>
              </h1>
              <p className="text-white/55 text-xl leading-relaxed mb-10">
                {o.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-drn-bg font-semibold text-sm rounded-full hover:bg-drn-accent transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {o.hero.cta_appstore}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-white/8 text-white font-semibold text-sm rounded-full hover:border-drn-accent/30 hover:bg-white/5 transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M3.18 23.76c.3.17.64.22.98.15l13.09-7.56-2.76-2.76-11.31 10.17zM.43 1.6C.16 1.96 0 2.43 0 3v18c0 .57.16 1.04.43 1.4l.07.07L10.93 12v-.24L.5 1.53l-.07.07zM20.7 10.59L17.27 8.6l-3.09 3.09 3.09 3.09 3.45-1.99c.98-.57.98-1.49 0-2.2zM4.17.09L17.27 7.65 14.51 10.4 3.18.24C3.5.06 3.87.01 4.17.09z" />
                  </svg>
                  {o.hero.cta_googleplay}
                </a>
              </div>
            </div>
            {/* Right — mockup */}
            <div className="flex-none flex justify-center md:justify-end">
              <Image
                src="/images/ovocio/mockup.png"
                alt="Ovocio app mockup"
                width={300}
                height={600}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
                {o.features.label}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {o.features.title}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {o.features.items.map((f) => (
                <div key={f.title} className="bg-drn-bg-secondary rounded-2xl p-8 border border-white/8">
                  <h3 className="text-white font-semibold text-base mb-3">{f.title}</h3>
                  <p className="text-white/55 text-lg leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
                {o.audiences.label}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {o.audiences.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {o.audiences.items.map((a) => (
                <div key={a.title}>
                  <div className="w-8 h-px bg-drn-accent mb-6" />
                  <h3 className="text-white font-semibold text-base mb-3">{a.title}</h3>
                  <p className="text-white/55 text-lg leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTAs */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {o.closing.title}
              </h2>
              <p className="text-white/55 text-lg leading-relaxed">
                {o.closing.subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-drn-accent text-drn-bg font-semibold text-sm rounded-full hover:bg-white transition-colors duration-200"
              >
                {o.closing.cta_appstore}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 border border-white/8 text-white font-semibold text-sm rounded-full hover:border-drn-accent/30 hover:bg-white/5 transition-colors duration-200"
              >
                {o.closing.cta_googleplay}
              </a>
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
