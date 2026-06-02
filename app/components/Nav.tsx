"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
          <Link
            href="/"
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button className="text-xs font-medium text-white/50 hover:text-white transition-colors px-1">
            FR
          </button>
          <span className="text-white/20 text-xs">|</span>
          <button className="text-xs font-medium text-drn-accent hover:text-white transition-colors px-1">
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
