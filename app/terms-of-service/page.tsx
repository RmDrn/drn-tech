import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-white/40 text-sm">Last updated: June 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6 border-t border-white/8">
          <div className="max-w-3xl mx-auto space-y-12">

            <div>
              <h2 className="text-white font-semibold text-lg mb-3">1. Purpose</h2>
              <p className="text-white/70 leading-relaxed">
                These terms govern your use of the website drn-tech.com, published by
                DRN Technologies (SIRET: 10575090500017), represented by Romain Dardinier,
                10 Avenue Darie la Madone, 06230 Villefranche-sur-Mer, France. This website
                is a purely informational showcase. No products or services are sold directly
                through this site.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-3">2. Intellectual Property</h2>
              <p className="text-white/70 leading-relaxed">
                All content published on this website — including but not limited to text,
                graphics, logos, and the overall design — is the exclusive property of DRN
                Technologies, unless otherwise stated. Any reproduction, distribution, or use
                without prior written consent is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-3">3. Limitation of Liability</h2>
              <p className="text-white/70 leading-relaxed">
                The information provided on this website is for general informational purposes
                only. DRN Technologies makes no warranties, express or implied, regarding the
                accuracy, completeness, or availability of the content. DRN Technologies shall
                not be held liable for any direct or indirect damages arising from the use of,
                or inability to use, this website.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-3">4. Governing Law</h2>
              <p className="text-white/70 leading-relaxed">
                These terms are governed by French law. Any dispute relating to the use of
                this website shall be subject to the exclusive jurisdiction of the courts of
                Nice, France.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-3">5. Contact</h2>
              <p className="text-white/70 leading-relaxed">
                For any question regarding these terms:{" "}
                <a href="mailto:contact@drn-tech.com" className="text-drn-accent hover:text-white transition-colors duration-200">
                  contact@drn-tech.com
                </a>
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
