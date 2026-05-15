interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished = '2026-05-12',
  dateModified = datePublished,
  image = '/og-image.jpg',
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: 'Directive 8020 Guide',
    },
    publisher: {
      '@type': 'Organization',
      name: 'directive8020.top',
    },
    image,
    about: {
      '@type': 'VideoGame',
      name: 'Directive 8020',
      gamePlatform: ['PlayStation 5', 'Xbox Series X|S', 'PC'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
