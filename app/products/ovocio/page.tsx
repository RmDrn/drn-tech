import Image from "next/image";
import Nav from "../../components/Nav";
import ContactCta from "../../components/ContactCta";
import Footer from "../../components/Footer";

const features = [
  {
    title: "Create by voice",
    description:
      "Dictate your quote or invoice naturally — Ovocio handles the structure, the formatting, and the math.",
  },
  {
    title: "Ready in seconds",
    description:
      "From spoken words to a professional document in under a minute. No typing, no back-office.",
  },
  {
    title: "Always with you",
    description:
      "Designed for mobile from the ground up. Open it on-site, in the car, or between two appointments.",
  },
  {
    title: "Professional output",
    description:
      "Clean, ready-to-send PDFs that look polished — every time, without effort.",
  },
];

const audiences = [
  {
    title: "Freelancers & consultants",
    description:
      "Stop losing time on admin. Create quotes between two calls and send invoices the moment the job is done.",
  },
  {
    title: "Tradespeople & craftspeople",
    description:
      "Quote on-site without paper. Your client gets a professional document before you've even left.",
  },
  {
    title: "Sales reps & field teams",
    description:
      "Keep moving. Turn a client conversation into a formal quote without ever opening a laptop.",
  },
];

export default function Ovocio() {
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
                Ovocio
              </p>
              <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-none mb-6">
                Quotes and invoices,
                <br />
                <span className="text-drn-accent">created by voice.</span>
              </h1>
              <p className="text-white/55 text-xl leading-relaxed mb-10">
                Ovocio is a mobile app for iOS and Android that turns what you
                say into professional documents — instantly, wherever you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-drn-bg font-semibold text-sm rounded-full hover:bg-drn-accent transition-colors duration-200"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-white/8 text-white font-semibold text-sm rounded-full hover:border-drn-accent/30 hover:bg-white/5 transition-colors duration-200"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M3.18 23.76c.3.17.64.22.98.15l13.09-7.56-2.76-2.76-11.31 10.17zM.43 1.6C.16 1.96 0 2.43 0 3v18c0 .57.16 1.04.43 1.4l.07.07L10.93 12v-.24L.5 1.53l-.07.07zM20.7 10.59L17.27 8.6l-3.09 3.09 3.09 3.09 3.45-1.99c.98-.57.98-1.49 0-2.2zM4.17.09L17.27 7.65 14.51 10.4 3.18.24C3.5.06 3.87.01 4.17.09z" />
                  </svg>
                  Google Play
                </a>
              </div>
            </div>
            {/* Right — mockup, overflows into next section */}
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

        {/* Features — dark */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
                Features
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Built for the field
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-drn-bg-secondary rounded-2xl p-8 border border-white/8"
                >
                  <h3 className="text-white font-semibold text-base mb-3">
                    {f.title}
                  </h3>
                  <p className="text-white/55 text-lg leading-relaxed">
                    {f.description}
                  </p>
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
                Who it's for
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Made for people on the move
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {audiences.map((a) => (
                <div key={a.title}>
                  <div className="w-8 h-px bg-drn-accent mb-6" />
                  <h3 className="text-white font-semibold text-base mb-3">
                    {a.title}
                  </h3>
                  <p className="text-white/55 text-lg leading-relaxed">
                    {a.description}
                  </p>
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
                Ready to try Ovocio?
              </h2>
              <p className="text-white/55 text-lg leading-relaxed">
                Download it now on iOS or Android.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-drn-accent text-drn-bg font-semibold text-sm rounded-full hover:bg-white transition-colors duration-200"
              >
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 border border-white/8 text-white font-semibold text-sm rounded-full hover:border-drn-accent/30 hover:bg-white/5 transition-colors duration-200"
              >
                Google Play
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
