import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Script from "next/script";

export const metadataBase = new URL("https://directive8020.top");

export const metadata: Metadata = {
  metadataBase: new URL("https://directive8020.top"),
  title: {
    default:
      "Directive 8020 - Complete Guide, Walkthrough, Endings & Trophy List",
    template: "%s | Directive 8020",
  },
  description:
    "Complete Directive 8020 guide: full walkthrough, all endings explained, choices & consequences, how to save everyone, trophy list, stealth mechanics, and more.",
  keywords: [
    "Directive 8020",
    "Directive 8020 walkthrough",
    "Directive 8020 endings",
    "Directive 8020 trophy guide",
    "Directive 8020 choices",
    "Directive 8020 save everyone",
    "Dark Pictures",
    "Supermassive Games",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://directive8020.top",
    siteName: "Directive 8020 Guide",
    title:
      "Directive 8020 - Complete Guide, Walkthrough, Endings & Trophy List",
    description:
      "Complete Directive 8020 guide: full walkthrough, all endings, choices, how to save everyone, trophy list, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Directive 8020 Complete Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Directive 8020 - Complete Guide",
    description:
      "Complete Directive 8020 guide: walkthrough, endings, choices, trophy list.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://directive8020.top",
  },
};

function VideoGameSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Directive 8020",
    description:
      "Directive 8020 is an interactive drama survival horror game developed by Supermassive Games, part of The Dark Pictures Anthology.",
    genre: ["Survival Horror", "Interactive Drama", "Adventure"],
    gamePlatform: ["PlayStation 5", "Xbox Series X|S", "PC (Steam)"],
    developer: {
      "@type": "Organization",
      name: "Supermassive Games",
    },
    publisher: {
      "@type": "Organization",
      name: "Bandai Namco Entertainment",
    },
    datePublished: "2026-05-12",
    applicationCategory: "Game",
    operatingSystem: "PlayStation 5, Xbox Series X|S, Windows",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <Script
          id="ga-loader"
          src="https://www.googletagmanager.com/gtag/js?id=G-4EBPTFKKWC"
          strategy="afterInteractive"
        />
        <Script id="ga-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag; 
            
            gtag('js', new Date());
            gtag('config', 'G-4EBPTFKKWC', {
              page_path: window.location.pathname,
            });
            console.log('GA4 Script Ready ✅');
          `}
        </Script>
        <VideoGameSchema />
        <header className="sticky top-0 z-50 border-b border-white/8 bg-background/95 backdrop-blur-md">
          <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
            <Link
              href="/"
              className="font-serif text-lg font-bold tracking-tight text-white hover:text-d8020 transition-colors"
            >
              Directive 8020
            </Link>
            <div className="hidden sm:flex items-center gap-6 text-sm text-zinc-400">
              <Link
                href="/walkthrough/"
                className="hover:text-white transition-colors"
              >
                Walkthrough
              </Link>
              <Link
                href="/all-endings/"
                className="hover:text-white transition-colors"
              >
                Endings
              </Link>
              <Link
                href="/characters/"
                className="hover:text-white transition-colors"
              >
                Characters
              </Link>
              <Link
                href="/trophy-guide/"
                className="hover:text-white transition-colors"
              >
                Trophies
              </Link>
              <Link
                href="/collectibles/"
                className="hover:text-white transition-colors"
              >
                Collectibles
              </Link>
              <Link
                href="/crashing-fix/"
                className="hover:text-white transition-colors"
              >
                Fixes
              </Link>
            </div>
            <button
              type="button"
              className="sm:hidden text-zinc-400 hover:text-white"
              aria-label="Menu"
              id="mobile-menu-btn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </nav>
          <div
            id="mobile-menu"
            className="hidden sm:hidden border-t border-white/8 px-4 pb-3"
          >
            <div className="flex flex-col gap-2 text-sm text-zinc-400 pt-2">
              <Link href="/walkthrough/" className="py-1 hover:text-white">
                Walkthrough
              </Link>
              <Link href="/all-endings/" className="py-1 hover:text-white">
                Endings
              </Link>
              <Link href="/characters/" className="py-1 hover:text-white">
                Characters
              </Link>
              <Link href="/save-everyone/" className="py-1 hover:text-white">
                Save Everyone
              </Link>
              <Link href="/trophy-guide/" className="py-1 hover:text-white">
                Trophies
              </Link>
              <Link href="/collectibles/" className="py-1 hover:text-white">
                Collectibles
              </Link>
              <Link href="/crashing-fix/" className="py-1 hover:text-white">
                Fixes
              </Link>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>

        <footer className="mt-16 border-t border-white/8 py-8">
          <div className="mx-auto max-w-4xl px-4">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-sm">
              <div>
                <h3 className="font-semibold text-white mb-3">Story</h3>
                <ul className="space-y-1.5 text-zinc-500">
                  <li>
                    <Link href="/walkthrough/" className="hover:text-zinc-300">
                      Walkthrough
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-endings/" className="hover:text-zinc-300">
                      All Endings
                    </Link>
                  </li>
                  <li>
                    <Link href="/best-ending/" className="hover:text-zinc-300">
                      Best Ending
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/choices-consequences/"
                      className="hover:text-zinc-300"
                    >
                      Choices
                    </Link>
                  </li>
                  <li>
                    <Link href="/game-length/" className="hover:text-zinc-300">
                      Game Length
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Gameplay</h3>
                <ul className="space-y-1.5 text-zinc-500">
                  <li>
                    <Link
                      href="/save-everyone/"
                      className="hover:text-zinc-300"
                    >
                      Save Everyone
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-deaths/" className="hover:text-zinc-300">
                      All Deaths
                    </Link>
                  </li>
                  <li>
                    <Link href="/difficulty-guide/" className="hover:text-zinc-300">
                      Difficulty Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/multiplayer/" className="hover:text-zinc-300">
                      Multiplayer
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Collectibles</h3>
                <ul className="space-y-1.5 text-zinc-500">
                  <li>
                    <Link href="/characters/" className="hover:text-zinc-300">
                      Characters &amp; Cast
                    </Link>
                  </li>
                  <li>
                    <Link href="/collectibles/" className="hover:text-zinc-300">
                      Dolls &amp; Collectibles
                    </Link>
                  </li>
                  <li>
                    <Link href="/trophy-guide/" className="hover:text-zinc-300">
                      Trophy Guide
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Technical</h3>
                <ul className="space-y-1.5 text-zinc-500">
                  <li>
                    <Link
                      href="/system-requirements/"
                      className="hover:text-zinc-300"
                    >
                      System Requirements
                    </Link>
                  </li>
                  <li>
                    <Link href="/crashing-fix/" className="hover:text-zinc-300">
                      Crash Fixes
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-center text-xs text-zinc-600">
              &copy; 2026 directive8020.top &mdash; Fan guide, not affiliated
              with Supermassive Games or Bandai Namco.
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
