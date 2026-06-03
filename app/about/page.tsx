import Nav from "../components/Nav";
import OvocioTeaser from "../components/OvocioTeaser";
import ContactCta from "../components/ContactCta";
import Footer from "../components/Footer";

const pillars = [
  {
    title: "Apps & SaaS for everyone",
    description:
      "We build mobile apps and SaaS products designed for everyday users — with a focus on real-world usefulness and ease of use.",
  },
  {
    title: "Custom tools for businesses",
    description:
      "We design and integrate tailored solutions built around your workflows, not the other way around.",
  },
  {
    title: "Turnkey websites",
    description:
      "Professional websites that are fast, easy to manage, and ready to grow with your business.",
  },
];

const values = [
  {
    label: "Useful first",
    description: "We only build what solves a real problem.",
  },
  {
    label: "Truly simple",
    description: "If it requires a manual, it is not finished yet.",
  },
  {
    label: "Built to last",
    description:
      "We design our products to adapt and evolve over time, not just to ship.",
  },
];

export default function About() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-10">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
              DRN Tech was born from a simple conviction: technology should
              solve real problems.
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
              We build mobile apps and SaaS products for everyday users, custom
              tools integrated into businesses, and turnkey websites — always
              with the same goal:{" "}
              <span className="text-drn-accent font-normal">
                creating solutions that are useful, easy to use, and built to
                last.
              </span>
            </p>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
                What we do
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Three areas of focus
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="bg-drn-bg-secondary rounded-2xl p-8 border border-white/8"
                >
                  <h3 className="text-white font-semibold text-base mb-3">
                    {p.title}
                  </h3>
                  <p className="text-white/55 text-lg leading-relaxed">
                    {p.description}
                  </p>
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
                How we work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                What we stand for
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v) => (
                <div key={v.label}>
                  <div className="w-8 h-px bg-drn-accent mb-6" />
                  <h3 className="text-white font-semibold text-base mb-3">
                    {v.label}
                  </h3>
                  <p className="text-white/55 text-lg leading-relaxed">
                    {v.description}
                  </p>
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
