interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
}

export function FaqSection({ items }: FaqSectionProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">
        Frequently Asked Questions
      </h2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-2">
        {items.map((item, i) => (
          <details key={i} className="faq-item group">
            <summary className="flex items-center justify-between">
              <span>{item.question}</span>
              <svg
                className="h-4 w-4 shrink-0 text-zinc-500 transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-4 pb-3 pt-1 text-zinc-400 leading-relaxed text-sm">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
