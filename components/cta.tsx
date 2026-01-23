'use client';

import React, { useState } from 'react';

export function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="w-full bg-secondary py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Ready to transform your business?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let's talk about how AVYREN can help you build smarter, operate efficiently, and scale confidently.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-colors"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            {submitted ? '✓ Done' : 'Get Started'}
          </button>
        </form>
        <p className="text-xs text-muted-foreground">
          No credit card required.
        </p>
      </div>
    </section>
  );
}
