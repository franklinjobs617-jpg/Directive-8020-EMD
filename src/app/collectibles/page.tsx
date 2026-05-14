import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqSection } from '@/components/faq-section';
import { ArticleSchema } from '@/components/article-schema';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Directive 8020 All Collectibles & Dolls - Heirloom Locations Guide',
  description:
    'Find every collectible in Directive 8020: Dark Pictures Heirloom dolls, experiment logs, Oracle files, and Williams\' private files. Chapter-by-chapter locations with screenshots.',
  alternates: { canonical: 'https://directive8020.top/collectibles/' },
};

const faqs = [
  {
    question: 'How many collectibles are in Directive 8020?',
    answer:
      'Directive 8020 has several types of collectibles: Dark Pictures Heirloom dolls (referencing previous games), experiment logs in the clone lab, Oracle\'s hidden files, and Williams\' private files. The Digital Deluxe Edition includes an exclusive collectible heirlooms mission.',
  },
  {
    question: 'What are the Dark Pictures Heirloom dolls?',
    answer:
      'Heirloom dolls are hidden collectibles that reference previous Dark Pictures Anthology games: Man of Medan, Little Hope, House of Ashes, and The Devil in Me. Finding all of them unlocks the "Heirloom Hunter" trophy.',
  },
  {
    question: 'Can you miss collectibles in Directive 8020?',
    answer:
      'Yes, some collectibles can be missed if you progress past the area where they are found. However, you can use the Turning Points feature to replay specific chapters and collect anything you missed without replaying the entire game.',
  },
  {
    question: 'Where are the experiment logs in Directive 8020?',
    answer:
      'The experiment logs are found in the clone laboratory, primarily in Chapter 6. Some logs are in side rooms that require the Wedge Tool to access. These logs explain the 13th cycle and the true nature of the Corinth mission.',
  },
  {
    question: 'Does the Digital Deluxe Edition have extra collectibles?',
    answer:
      'Yes. The Digital Deluxe Edition includes an exclusive collectible heirlooms mission that is not available in the standard edition. This mission features additional Dark Pictures dolls and lore items.',
  },
];

const collectibleTypes = [
  {
    name: 'Dark Pictures Heirloom Dolls',
    icon: 'D',
    description: 'Hidden dolls referencing previous Dark Pictures Anthology games. Each doll is themed after a past entry: Man of Medan, Little Hope, House of Ashes, and The Devil in Me.',
    trophy: 'Heirloom Hunter (Silver)',
    count: 'Multiple hidden across all chapters',
  },
  {
    name: 'Experiment Logs',
    icon: 'E',
    description: 'Found in the clone laboratory (Chapter 6). These logs reveal the 13th cycle of experimentation by the Corinth Corporation and explain the true nature of the Cassiopeia mission.',
    trophy: '13th Cycle (Gold)',
    count: 'Multiple logs in the lab area',
  },
  {
    name: 'Oracle\'s Hidden Files',
    icon: 'O',
    description: 'Data files from the ship\'s AI, Oracle. Found in the captain\'s quarters and server room. Reveal fragments of information about previous missions and crew members who should not exist.',
    trophy: 'Ghost in the Machine (Silver)',
    count: 'Multiple files across Chapters 4-6',
  },
  {
    name: 'Williams\' Private Files',
    icon: 'W',
    description: 'Confidential documents belonging to LaMarcus Williams, the Corinth Corporation CEO. Found in the captain\'s quarters. Reference crew members from previous cycles — a critical clue to the clone truth.',
    trophy: 'Related to story progression',
    count: 'Found in Chapter 4',
  },
];

const chapterGuide = [
  {
    chapter: 1,
    title: 'The Meteor',
    collectibles: [
      'Heirloom Doll #1 — In the crew quarters before the meteor impact. Check the storage compartment near the bunks.',
    ],
  },
  {
    chapter: 2,
    title: 'First Contact',
    collectibles: [
      'Heirloom Doll #2 — In the maintenance corridor, behind a Wedge Tool door.',
      'Crew log from Williams — Found in the supply room accessible after obtaining the Wedge Tool.',
    ],
  },
  {
    chapter: 3,
    title: 'Quarantine',
    collectibles: [
      'Heirloom Doll #3 — Hidden in the medical bay storage area. Easy to miss if you side with Young and skip the med bay.',
    ],
  },
  {
    chapter: 4,
    title: 'The Oracle',
    collectibles: [
      'Oracle\'s Hidden Files — Access the ship\'s AI terminal and force Oracle to reveal data.',
      'Williams\' Private Files — Found in the captain\'s quarters. Contains references to non-existent crew members.',
      'Heirloom Doll #4 — In the server room, behind a maintenance panel.',
    ],
  },
  {
    chapter: 5,
    title: 'Breach',
    collectibles: [
      'Heirloom Doll #5 — In the engineering section, near where Stafford gets trapped. Use the Scanner to locate it.',
    ],
  },
  {
    chapter: 6,
    title: 'The Lab',
    collectibles: [
      'Experiment Logs — Multiple logs scattered throughout the clone laboratory. Some are in side rooms requiring the Wedge Tool.',
      'Oracle\'s Remaining Files — Additional data terminals in the lab area.',
      'Heirloom Doll #6 — Hidden behind the clone vats. Look for a small alcove on the left side.',
    ],
  },
  {
    chapter: 7,
    title: 'Revelation',
    collectibles: [
      'Heirloom Doll #7 — In the area where the full clone truth is revealed. Check side rooms.',
    ],
  },
  {
    chapter: 8,
    title: 'Directive 8020',
    collectibles: [
      'Heirloom Doll #8 — Near the shuttle area in the final chapter. Missable if you rush to the ending.',
    ],
  },
];

export default function CollectiblesPage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 All Collectibles & Dolls Locations"
        description="Complete collectibles guide for Directive 8020 with all Heirloom doll locations, experiment logs, and hidden files."
        url="https://directive8020.top/collectibles/"
      />
      <Breadcrumb items={[{ label: 'Collectibles' }]} />
      <PageHero src="/steam-ss07.jpg" alt="Directive 8020 astronaut exploring alien cave - collectibles and dolls guide" />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        All Collectibles &amp; Dolls Guide
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Find every collectible in Directive 8020. This guide covers all
        Dark Pictures Heirloom dolls, experiment logs, Oracle&apos;s hidden
        files, and Williams&apos; private files with chapter-by-chapter
        locations.
      </p>

      <h2>Collectible Types</h2>
      <div className="space-y-4 mt-4">
        {collectibleTypes.map((type, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/5 bg-surface p-5"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-d8020/10 border border-d8020/20 flex items-center justify-center shrink-0">
                <span className="text-d8020 font-bold text-sm">{type.icon}</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-serif text-lg font-semibold text-white m-0">
                  {type.name}
                </h3>
                <p className="text-sm text-zinc-400 mt-1">{type.description}</p>
                <div className="flex gap-4 mt-2 text-xs text-zinc-500">
                  <span>Trophy: {type.trophy}</span>
                  <span>&middot;</span>
                  <span>{type.count}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Chapter-by-Chapter Locations</h2>
      <p>
        Use this checklist to track your collectible progress. Remember: you can
        use the Turning Points feature to replay any chapter and collect items
        you missed.
      </p>

      <div className="space-y-6 mt-4">
        {chapterGuide.map((ch) => (
          <div
            key={ch.chapter}
            className="rounded-lg border border-white/5 bg-surface p-5"
          >
            <h3 className="font-serif text-base font-semibold text-white m-0 mb-3">
              Chapter {ch.chapter}: {ch.title}
            </h3>
            <ul className="text-sm text-zinc-400 space-y-2">
              {ch.collectibles.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-d8020 shrink-0">&#9679;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>Tips for Collectible Hunting</h2>
      <ul>
        <li>
          <strong>Use the Scanner</strong> &mdash; The Scanner tool highlights
          interactive objects through walls, making it easier to spot collectibles
          in dark areas.
        </li>
        <li>
          <strong>Check every room</strong> &mdash; Many collectibles are in side
          rooms or behind Wedge Tool doors. Explore thoroughly before progressing.
        </li>
        <li>
          <strong>Use Turning Points</strong> &mdash; If you miss a collectible,
          you can replay that chapter via the Story Tree without losing progress.
        </li>
        <li>
          <strong>Watch for visual cues</strong> &mdash; Collectibles often glow
          or have a distinct visual marker. Heirloom dolls are small and easy to
          miss in dark environments.
        </li>
        <li>
          <strong>Survivor Mode warning</strong> &mdash; Turning Points are
          disabled in Survivor Mode, so plan your collectible route carefully
          if hunting trophies on the hardest difficulty.
        </li>
      </ul>

      <div className="mt-8 rounded-lg border border-white/5 bg-surface p-5">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Related Guides
        </h3>
        <div className="space-y-2 text-sm">
          <a href="/trophy-guide/" className="block text-d8020 hover:underline">
            Trophy Guide &amp; List &rarr;
          </a>
          <a href="/walkthrough/" className="block text-d8020 hover:underline">
            Full Walkthrough &rarr;
          </a>
          <a href="/characters/" className="block text-d8020 hover:underline">
            All Characters &amp; Cast &rarr;
          </a>
        </div>
      </div>

      <FaqSection items={faqs} />
    </article>
  );
}
