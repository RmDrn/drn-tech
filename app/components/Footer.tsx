import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 py-12 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-white font-semibold text-lg mb-1">DRN Tech</p>
          <p className="text-white/55 text-sm">French Riviera, France</p>
          <a
            href="mailto:contact@drn-tech.com"
            className="text-drn-accent text-sm hover:text-white transition-colors duration-200 mt-1 block"
          >
            contact@drn-tech.com
          </a>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3">
          <nav className="flex gap-6" aria-label="Legal">
            <Link
              href="/privacy-policy"
              className="text-white/55 text-xs hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-white/55 text-xs hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </nav>
          <p className="text-white/30 text-xs">
            &copy; {year} DRN Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
