const features = [
  {
    label: "Voice-first",
    description: "Create quotes and invoices by speaking naturally — no typing required.",
  },
  {
    label: "Instant",
    description: "Generate professional documents in seconds, directly from your phone.",
  },
  {
    label: "Mobile",
    description: "Designed for iOS and Android, built for on-the-go professionals.",
  },
];

export default function OvocioHighlight() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-drn-bg-secondary rounded-3xl p-10 md:p-16 border border-white/8">
          <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-8">
            Featured product
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tight mb-5 leading-none">
                Ovocio
              </h2>
              <p className="text-white/55 text-lg max-w-lg leading-relaxed">
                The mobile app that turns your voice into professional quotes
                and invoices — instantly, on iOS and Android.
              </p>
            </div>
            <a
              href="/products/ovocio"
              className="shrink-0 px-7 py-3 bg-drn-accent text-drn-bg font-semibold text-sm rounded-full hover:bg-white transition-colors duration-200"
            >
              Learn more
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.label}
                className="bg-drn-bg rounded-2xl p-7 border border-white/8"
              >
                <p className="text-white font-semibold text-sm mb-2">
                  {f.label}
                </p>
                <p className="text-white/55 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
