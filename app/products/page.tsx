import Nav from "../components/Nav";
import ContactCta from "../components/ContactCta";
import Footer from "../components/Footer";

const services = [
  {
    title: "Custom mobile apps",
    description:
      "We build tailor-made iOS and Android applications for businesses that need a specific solution — not a template.",
  },
  {
    title: "Websites",
    description:
      "We design and develop professional websites that are fast, easy to maintain, and built to grow with your business.",
  },
  {
    title: "Automation & integrations",
    description:
      "We build custom workflows and integrations to eliminate repetitive tasks and connect your tools.",
  },
];

export default function Products() {
  return (
    <>
      <Nav />
      <main>
        {/* Header + Ovocio featured */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
              Products
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
              What we make
            </h1>
            <p className="text-white/55 text-xl leading-relaxed mb-14">
              One product. A set of services. All built to last.
            </p>
            <div className="bg-drn-bg-secondary rounded-3xl p-10 md:p-16 border border-white/8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                <div className="flex-1">
                  <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-5 leading-none">
                    Ovocio
                  </h2>
                  <p className="text-white/55 text-lg leading-relaxed mb-8 max-w-lg">
                    The mobile app that turns your voice into professional
                    quotes and invoices — in seconds, on iOS and Android.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <div className="flex items-center gap-2 text-white/55 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-drn-accent shrink-0" />
                      Voice-to-document in seconds
                    </div>
                    <div className="flex items-center gap-2 text-white/55 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-drn-accent shrink-0" />
                      iOS & Android
                    </div>
                    <div className="flex items-center gap-2 text-white/55 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-drn-accent shrink-0" />
                      Professional PDF output
                    </div>
                  </div>
                  <a
                    href="/products/ovocio"
                    className="inline-block px-7 py-3 bg-drn-accent text-drn-bg font-semibold text-sm rounded-full hover:bg-white transition-colors duration-200"
                  >
                    Discover Ovocio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
                Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                We also build to measure
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="bg-drn-bg-secondary rounded-2xl p-8 border border-white/8 flex flex-col"
                >
                  <h3 className="text-white font-semibold text-base mb-3">
                    {s.title}
                  </h3>
                  <p className="text-white/55 text-lg leading-relaxed flex-1 mb-6">
                    {s.description}
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-drn-accent text-sm font-medium hover:text-white transition-colors duration-200"
                  >
                    Get in touch <span aria-hidden>→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
