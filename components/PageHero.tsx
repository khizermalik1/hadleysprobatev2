interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#0f2140] via-[#1a3560] to-[#1e407a] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">{eyebrow}</p>}
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h1>
        {description && <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">{description}</p>}
      </div>
    </section>
  );
}
