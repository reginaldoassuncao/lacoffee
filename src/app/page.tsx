export default function Home() {
  return (
    <main className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--brand-green)_0%,_transparent_55%),radial-gradient(ellipse_at_bottom,_#14100c_0%,_var(--background)_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4a46a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
        <p className="mb-6 text-xs font-medium tracking-[0.35em] text-brand-gold uppercase">
          Em construção
        </p>

        <h1 className="font-display text-5xl font-medium tracking-tight text-brand-gold-soft sm:text-6xl">
          La Coffee
        </h1>
        <p className="mt-2 text-sm font-medium tracking-[0.4em] text-brand-teal uppercase">
          Gelateria
        </p>

        <div className="my-8 h-px w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

        <p className="font-script text-2xl text-brand-gold sm:text-3xl">
          Feito para transformar cada pausa em um momento especial
        </p>

        <p className="mt-8 max-w-sm text-sm leading-relaxed text-brand-muted">
          Site e cardápio digital da La Coffee Gelateria. Próximo passo: página
          institucional completa.
        </p>
      </div>
    </main>
  );
}
