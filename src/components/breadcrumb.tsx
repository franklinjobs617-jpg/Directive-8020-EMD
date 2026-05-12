import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://directive8020.top',
      },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        ...(item.href
          ? { item: `https://directive8020.top${item.href}` }
          : {}),
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex items-center gap-1.5 text-sm text-zinc-500">
        <li>
          <Link href="/" className="hover:text-zinc-300 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="text-zinc-600">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-zinc-300 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-400">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
