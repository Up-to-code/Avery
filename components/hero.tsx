export function Hero() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-32 sm:py-48 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-foreground mb-6 text-balance">
          Smart software that helps businesses run smarter.
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
          AVYREN builds practical, results-oriented technology solutions. From AI automation to scalable SaaS platforms, we help entrepreneurs and businesses grow efficiently.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Explore Solutions
          </button>
          <button className="px-8 py-3 border border-border rounded-lg text-foreground font-semibold hover:bg-secondary transition-colors">
            Learn More
          </button>
        </div>

        <p className="text-sm text-muted-foreground">
          Technology designed for real business impact.
        </p>
      </div>
    </section>
  );
}
