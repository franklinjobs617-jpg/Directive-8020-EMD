import type { Metadata } from 'next';
import Image from 'next/image';
import { ArticleSchema } from '@/components/article-schema';

export const metadata: Metadata = {
  title: 'Directive 8020 - Complete Guide, Walkthrough, Endings & Trophy List',
  description:
    'The ultimate Directive 8020 guide: full chapter walkthrough, all endings explained (including the clone twist), choices & consequences, how to save everyone, complete trophy list, stealth mechanics, and crash fixes.',
  alternates: { canonical: 'https://directive8020.top' },
};

const guides = [
  {
    href: '/walkthrough/',
    title: 'Full Walkthrough',
    desc: 'Chapter-by-chapter guide with stealth mechanics, scanner usage, and the complete story of the Cassiopeia.',
    tag: 'Complete Guide',
    img: '/steam-ss01.jpg',
    imgAlt: 'Directive 8020 astronaut in spaceship corridor - full game walkthrough',
  },
  {
    href: '/all-endings/',
    title: 'All Endings Explained',
    desc: 'Every ending revealed, including the devastating clone twist and the truth about the 13th cycle.',
    tag: 'Story',
    img: '/steam-ss03.jpg',
    imgAlt: 'Directive 8020 clone confrontation scene - all endings explained',
  },
  {
    href: '/best-ending/',
    title: 'Best Ending Guide',
    desc: 'Step-by-step guide to the optimal ending. All critical choices, how to save everyone, and expose Corinth.',
    tag: 'Endings',
    img: '/steam-ss11.jpg',
    imgAlt: 'Directive 8020 revelation scene - best ending guide',
  },
  {
    href: '/characters/',
    title: 'Characters & Cast',
    desc: 'All 5 playable characters and NPCs with actors, face models, roles, and who can live or die.',
    tag: 'Cast',
    img: '/characters-lineup.jpg',
    imgAlt: 'Directive 8020 full cast lineup - all characters and voice actors',
  },
  {
    href: '/choices-consequences/',
    title: 'All Choices & Consequences',
    desc: 'Every Turning Point mapped out. Know exactly what each decision triggers before you commit.',
    tag: 'Decisions',
    img: '/steam-ss04.jpg',
    imgAlt: 'Directive 8020 Turning Point choice interface - help or run decision',
  },
  {
    href: '/save-everyone/',
    title: 'How to Save Everyone',
    desc: 'Step-by-step survival guide for every crew member. Keep Young, Stafford, Eisele, and the rest alive.',
    tag: 'Survival',
    img: '/steam-ss06.jpg',
    imgAlt: 'Directive 8020 infected crew member - how to save everyone guide',
  },
  {
    href: '/all-deaths/',
    title: 'All Deaths Guide',
    desc: 'Every death scene explained. Triggers, avoidance tips, and the "everyone dies" ending path.',
    tag: 'Deaths',
    img: '/steam-ss05.jpg',
    imgAlt: 'Directive 8020 astronaut caught by mimic - all deaths guide',
  },
  {
    href: '/collectibles/',
    title: 'Collectibles & Dolls',
    desc: 'All Heirloom dolls, experiment logs, Oracle files, and Williams\' private files with locations.',
    tag: 'Collectibles',
    img: '/steam-ss07.jpg',
    imgAlt: 'Directive 8020 astronaut exploring cave - collectibles and dolls guide',
  },
  {
    href: '/trophy-guide/',
    title: 'Trophy Guide & List',
    desc: 'Complete trophy list, platinum roadmap, and Survivor Mode strategies.',
    tag: 'Trophies',
    img: '/steam-ss08.jpg',
    imgAlt: 'Directive 8020 trophy and achievement guide',
  },
  {
    href: '/difficulty-guide/',
    title: 'Difficulty & Turning Points',
    desc: 'Explorer, Normal, and Survivor modes explained. How the rewind system works.',
    tag: 'Difficulty',
    img: '/steam-ss09.jpg',
    imgAlt: 'Directive 8020 difficulty settings and turning points guide',
  },
  {
    href: '/multiplayer/',
    title: 'Multiplayer & Co-Op',
    desc: 'Movie Night mode, online co-op setup, and what replaced Shared Story.',
    tag: 'Co-Op',
    img: '/steam-ss10.jpg',
    imgAlt: 'Directive 8020 multiplayer and co-op guide',
  },
  {
    href: '/game-length/',
    title: 'Game Length & Episodes',
    desc: 'How long to beat, all 8 episodes listed, and completionist time breakdown.',
    tag: 'Info',
    img: '/steam-ss02.jpg',
    imgAlt: 'Directive 8020 game length and episode guide',
  },
  {
    href: '/system-requirements/',
    title: 'System Requirements',
    desc: 'Minimum and recommended PC specs, console performance modes, and optimization tips.',
    tag: 'Technical',
    img: '/steam-ss02.jpg',
    imgAlt: 'Directive 8020 spaceship exterior and space station - system requirements',
  },
  {
    href: '/crashing-fix/',
    title: 'Crashing & Bug Fixes',
    desc: 'Fix black screen, won\'t launch, stuttering, and save corruption issues on PC and consoles.',
    tag: 'Fixes',
    img: '/steam-ss05.jpg',
    imgAlt: 'Directive 8020 astronaut thrown by explosion - crashing and bug fixes',
  },
];

export default function HomePage() {
  return (
    <>
      <ArticleSchema
        headline="Directive 8020 - Complete Guide"
        description="The ultimate fan guide for Directive 8020 covering walkthrough, endings, choices, trophies, and more."
        url="https://directive8020.top"
      />

      {/* Hero */}
      <section className="relative mb-12 overflow-hidden rounded-xl border border-white/5">
        <Image
          src="/steam-header.jpg"
          alt="Directive 8020 - The Dark Pictures Anthology official promotional artwork featuring astronaut in space helmet"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />
        <div className="relative px-6 py-12 sm:px-10 sm:py-16">
          <p className="text-d8020 text-sm font-semibold uppercase tracking-widest mb-3">
            The Dark Pictures Anthology
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Directive 8020
            <br />
            <span className="text-zinc-300 text-2xl sm:text-3xl font-normal">
              Complete Guide
            </span>
          </h1>
          <p className="text-zinc-300 max-w-2xl text-lg leading-relaxed mb-6">
            Everything you need to survive the Cassiopeia. Full walkthrough, every
            ending explained, all choices mapped, and the truth about who you
            really are.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/walkthrough/"
              className="inline-flex items-center gap-2 rounded-lg bg-d8020 px-5 py-2.5 text-sm font-semibold text-white hover:bg-d8020/80 transition-colors"
            >
              Start Walkthrough
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/all-endings/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:bg-white/5 transition-colors"
            >
              All Endings
            </a>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="mb-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Platforms', value: 'PS5, Xbox, PC' },
          { label: 'Genre', value: 'Survival Horror' },
          { label: 'Deaths', value: 'Multiple' },
          { label: 'Endings', value: 'Multiple' },
        ].map((fact) => (
          <div
            key={fact.label}
            className="rounded-lg border border-white/5 bg-surface p-4 text-center"
          >
            <div className="text-lg font-bold text-white">{fact.value}</div>
            <div className="text-xs text-zinc-500 mt-1">{fact.label}</div>
          </div>
        ))}
      </section>

      {/* Guide list */}
      <section>
        <h2 className="font-serif text-2xl font-bold text-white mb-6">
          Guides
        </h2>
        <div className="space-y-4">
          {guides.map((guide) => (
            <a
              key={guide.href}
              href={guide.href}
              className="group flex items-start gap-4 rounded-lg border border-white/5 bg-surface overflow-hidden hover:border-d8020/30 hover:bg-surface-alt transition-all"
            >
              <div className="shrink-0 w-24 sm:w-32 h-24 sm:h-28 relative">
                <Image
                  src={guide.img}
                  alt={guide.imgAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 96px, 128px"
                />
              </div>
              <div className="min-w-0 py-3 pr-3 flex-1">
                <span className="text-d8020 text-[10px] font-bold uppercase tracking-widest">
                  {guide.tag}
                </span>
                <h3 className="font-semibold text-white group-hover:text-d8020 transition-colors mt-0.5">
                  {guide.title}
                </h3>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                  {guide.desc}
                </p>
              </div>
              <svg
                className="w-5 h-5 shrink-0 text-zinc-600 group-hover:text-d8020 transition-colors mt-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* Teaser: Clone twist */}
      <section className="mt-12 rounded-lg border border-d8020/20 bg-d8020/5 p-6">
        <p className="text-d8020 text-xs font-semibold uppercase tracking-widest mb-2">
          Major Revelation
        </p>
        <h2 className="font-serif text-xl font-bold text-white mb-2">
          The Crew Are Clones
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-3">
          The Cassiopeia crew are not who they think they are. They carry memory
          backups from bodies that died cycles ago. The 13th iteration is about
          to discover the truth. Our{' '}
          <a href="/all-endings/" className="text-d8020 underline">
            Endings Guide
          </a>{' '}
          breaks down every revelation.
        </p>
        <a
          href="/all-endings/"
          className="text-sm text-d8020 font-semibold hover:underline"
        >
          Read the full breakdown &rarr;
        </a>
      </section>
    </>
  );
}
