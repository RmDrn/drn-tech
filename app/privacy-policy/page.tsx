import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-white/40 text-sm">Last updated: June 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-6 border-t border-white/8">
          <div className="max-w-3xl mx-auto space-y-12">

            <div>
              <h2 className="text-white font-semibold text-lg mb-3">1. Data Controller</h2>
              <p className="text-white/70 leading-relaxed">
                This website is published by DRN Technologies, represented by Romain Dardinier.<br />
                SIRET: 10575090500017<br />
                Address: 10 Avenue Darie la Madone, 06230 Villefranche-sur-Mer, France<br />
                Email: <a href="mailto:contact@drn-tech.com" className="text-drn-accent hover:text-white transition-colors duration-200">contact@drn-tech.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-3">2. Data Collected</h2>
              <p className="text-white/70 leading-relaxed">
                This website does not collect any personal data. There is no contact form, no
                newsletter subscription, and no user account system. No personal information
                is requested from or stored about visitors.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-3">3. Cookies</h2>
              <p className="text-white/70 leading-relaxed">
                This website does not use any tracking cookies, analytics cookies, or
                advertising cookies. No cookie banner is displayed because no cookies
                requiring consent are set.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-3">4. Hosting & Technical Logs</h2>
              <p className="text-white/70 leading-relaxed">
                This website is hosted by Vercel Inc., 340 Pine Street Suite 701,
                San Francisco, CA 94104, USA. As part of normal server operations, Vercel
                may automatically collect technical logs (IP addresses, browser type,
                pages visited, timestamps). These logs are retained and processed by Vercel
                in accordance with their own privacy policy, available at vercel.com/legal/privacy-policy.
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-3">5. Your Rights (GDPR)</h2>
              <p className="text-white/70 leading-relaxed">
                In accordance with the General Data Protection Regulation (EU) 2016/679, you
                have the right to access, rectify, and request the deletion of any personal
                data concerning you. Since this website does not collect personal data directly,
                any such request would relate to technical logs held by the hosting provider.
                For any privacy-related inquiry, contact us at:{" "}
                <a href="mailto:contact@drn-tech.com" className="text-drn-accent hover:text-white transition-colors duration-200">
                  contact@drn-tech.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg mb-3">6. Contact</h2>
              <p className="text-white/70 leading-relaxed">
                For any question regarding this privacy policy:{" "}
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
