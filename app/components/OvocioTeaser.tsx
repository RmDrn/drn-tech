export default function OvocioTeaser() {
  return (
    <section className="py-24 px-6 border-t border-white/8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div>
          <p className="text-drn-accent text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Featured product
          </p>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-3">
            Ovocio
          </h2>
          <p className="text-white/55 text-lg max-w-lg leading-relaxed">
            Create quotes and invoices by voice — instantly, on iOS and Android.
          </p>
        </div>
        <a
          href="/products/ovocio"
          className="shrink-0 px-7 py-3 bg-drn-accent text-drn-bg font-semibold text-sm rounded-full hover:bg-white transition-colors duration-200"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}
