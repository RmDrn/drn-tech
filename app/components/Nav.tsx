"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-drn-bg/95 backdrop-blur-md border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-semibold text-xl tracking-tight"
        >
          DRN Tech
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white/70 hover:text-white text-sm transition-colors">
            {t.nav.home}
          </Link>
          <Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">
            {t.nav.about}
          </Link>
          <Link href="/products" className="text-white/70 hover:text-white text-sm transition-colors">
            {t.nav.products}
          </Link>
          <Link href="/contact" className="text-white/70 hover:text-white text-sm transition-colors">
            {t.nav.contact}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage("fr")}
            className={`text-xs font-medium transition-colors px-1 ${
              language === "fr" ? "text-drn-accent" : "text-white/50 hover:text-white"
            }`}
          >
            FR
          </button>
          <span className="text-white/20 text-xs">|</span>
          <button
            onClick={() => setLanguage("en")}
            className={`text-xs font-medium transition-colors px-1 ${
              language === "en" ? "text-drn-accent" : "text-white/50 hover:text-white"
            }`}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
