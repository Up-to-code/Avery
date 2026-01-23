export function Philosophy() {
  const features = [
    {
      title: 'AI & Automation',
      description: 'AI-powered chat systems and workflow automation that save time and reduce manual work.'
    },
    {
      title: 'SaaS Platforms',
      description: 'Scalable business operations software designed for growth and performance.'
    },
    {
      title: 'Custom Solutions',
      description: 'Web and mobile applications built for your specific business needs and challenges.'
    }
  ];

  return (
    <section id="features" className="w-full bg-secondary py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
          What we build
        </h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-lg border border-border p-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
