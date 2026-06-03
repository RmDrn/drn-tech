import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Let's talk.
            </h1>
            <p className="text-white/55 text-xl leading-relaxed">
              Have a project, a question, or just want to say hello — we're
              easy to reach.
            </p>
          </div>
        </section>

        {/* Contact info */}
        <section className="py-24 px-6 border-t border-white/8">
          <div className="max-w-6xl mx-auto flex flex-col gap-8">
            <div>
              <p className="text-white/55 text-sm mb-2">Email</p>
              <a
                href="mailto:contact@drn-tech.com"
                className="text-drn-accent text-2xl md:text-3xl font-semibold hover:text-white transition-colors duration-200"
              >
                contact@drn-tech.com
              </a>
            </div>
            <div>
              <p className="text-white/55 text-sm mb-2">Location</p>
              <p className="text-white text-xl">French Riviera, France</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
