export function Approach() {
  const capabilities = [
    {
      title: 'Sales & Support',
      description: 'Tools for customer communication and workflow optimization'
    },
    {
      title: 'Business Management',
      description: 'Dashboards and platforms for efficient operations'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built for security, performance, and long-term growth'
    }
  ];

  return (
    <section id="what-we-build" className="w-full bg-background py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
          Our capabilities
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
