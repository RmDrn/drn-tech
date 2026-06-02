export default function AboutBrief() {
  return (
    <section className="py-24 px-6 border-t border-white/8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-5">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            A French tech company
            <br />
            with a focused approach
          </h2>
        </div>

        <div>
          <p className="text-white/55 text-base leading-relaxed mb-7">
            DRN Tech is a French tech company based on the French Riviera. We
            design and develop digital products — from mobile apps to SaaS
            platforms — with a strong emphasis on usability, performance, and
            simplicity.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-drn-accent text-sm font-medium hover:text-white transition-colors duration-200"
          >
            Learn more
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
