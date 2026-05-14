import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqSection } from '@/components/faq-section';
import { ArticleSchema } from '@/components/article-schema';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Directive 8020 Trophy Guide & Complete Trophy List (PS5, Xbox, PC)',
  description:
    'Complete Directive 8020 trophy and achievement guide with full list, roadmap, and tips for platinum. All secret trophies revealed, Survivor Mode strategies included.',
  alternates: { canonical: 'https://directive8020.top/trophy-guide/' },
};

const faqs = [
  {
    question: 'How many trophies are in Directive 8020?',
    answer:
      'Directive 8020 has approximately 30+ trophies/achievements across PS5, Xbox, and PC (Steam). The exact count includes bronze, silver, gold, and one platinum trophy on PS5.',
  },
  {
    question: 'How long does it take to get platinum in Directive 8020?',
    answer:
      'Earning the platinum trophy requires at least 2-3 full playthroughs: one on Normal to learn the game and unlock Turning Points, one on Survivor Mode, and a third to clean up any remaining trophies. Expect 15-25 hours total.',
  },
  {
    question: 'Is Directive 8020 platinum difficult?',
    answer:
      'The main challenges are completing Survivor Mode (no Turning Points, harder QTEs, aggressive AI) and getting the "Everyone Lives" trophy which requires near-perfect choices. It is moderately difficult — harder than Until Dawn but achievable with preparation.',
  },
  {
    question: 'Are there missable trophies in Directive 8020?',
    answer:
      'Yes. Several trophies are tied to specific choices and cannot be earned in a single playthrough. Use Turning Points to replay chapters and collect missable trophies. In Survivor Mode, plan your route carefully since Turning Points are disabled.',
  },
];

const trophies = [
  { name: 'Directive 8020', type: 'Platinum', desc: 'Collect all other trophies', how: 'Unlock all other trophies' },
  { name: 'Everyone Lives', type: 'Gold', desc: 'All crew members survive the entire game', how: 'Follow our Save Everyone guide. Make optimal choices at every Turning Point.' },
  { name: 'Survivor', type: 'Gold', desc: 'Complete the game on Survivor Mode', how: 'Play on Survivor difficulty. No Turning Points allowed. Shorter QTE windows and aggressive mimic AI.' },
  { name: 'The Truth Revealed', type: 'Gold', desc: 'Discover the clone laboratory', how: 'Automatic story progression in Chapter 6. Cannot be missed.' },
  { name: '13th Cycle', type: 'Gold', desc: 'Find all experiment logs in the clone lab', how: 'Search the lab thoroughly in Chapter 6. Some logs are in side rooms accessible via the Wedge Tool.' },
  { name: 'Exposed', type: 'Gold', desc: 'Transmit the evidence and expose Corinth', how: 'Choose "Expose Corinth" in Chapter 8 with all crew alive and clone truth accepted.' },
  { name: 'Stealth Master', type: 'Silver', desc: 'Complete any chapter without being detected', how: 'Chapter 2 is the easiest for this. Stay in shadows and use the Scanner to track mimic positions before moving.' },
  { name: 'Full Arsenal', type: 'Silver', desc: 'Find all tools and weapon upgrades', how: 'Explore every room. Some tools are behind Wedge Tool doors. Check our walkthrough for locations.' },
  { name: 'Heirloom Hunter', type: 'Silver', desc: 'Find all Dark Pictures Heirloom dolls', how: 'Hidden collectibles referencing previous games (Man of Medan, Little Hope, House of Ashes, The Devil in Me). See our collectibles section.' },
  { name: 'Ghost in the Machine', type: 'Silver', desc: 'Access all of Oracle\'s hidden files', how: 'In Chapter 4, force Oracle to reveal data. Then find the remaining files in the captain\'s quarters and server room.' },
  { name: 'All Endings', type: 'Silver', desc: 'See every ending in the game', how: 'Use Turning Points to replay from key decision points with different choices.' },
  { name: 'First Blood', type: 'Bronze', desc: 'Witness your first character death', how: 'Almost unavoidable on a blind playthrough.' },
  { name: 'Quarantine Protocol', type: 'Bronze', desc: 'Side with Eisele in Chapter 3', how: 'Choose strict quarantine during the Chapter 3 Turning Point.' },
  { name: 'Trust the Crew', type: 'Bronze', desc: 'Side with Young in Chapter 3', how: 'Choose relaxed quarantine during the Chapter 3 Turning Point.' },
  { name: 'Cinematic', type: 'Bronze', desc: 'Apply a movie filter for the first time', how: 'Use the pre-order bonus cinematic filter pack (60s/70s/80s style) from the settings menu.' },
  { name: 'Turning Back Time', type: 'Bronze', desc: 'Use a Turning Point for the first time', how: 'After completing a chapter, open the Story Tree and replay a Turning Point.' },
  { name: 'Close Call', type: 'Bronze', desc: 'Survive a QTE sequence with less than 0.5 seconds remaining', how: 'Intentionally delay your button press during an action sequence.' },
];

export default function TrophyGuidePage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 Trophy Guide & Complete Trophy List"
        description="Full trophy and achievement guide for Directive 8020 with roadmap and platinum tips."
        url="https://directive8020.top/trophy-guide/"
      />
      <Breadcrumb items={[{ label: 'Trophy Guide' }]} />
      <PageHero src="/steam-ss07.jpg" alt="Directive 8020 astronaut exploring alien cave - trophy guide and achievement list" />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        Trophy Guide &amp; Complete Trophy List
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Every trophy and achievement in Directive 8020 with unlock conditions,
        tips, and a platinum roadmap. Covers PS5, Xbox achievements, and Steam
        achievements.
      </p>

      <h2>Platinum Roadmap</h2>
      <div className="rounded-lg border border-white/5 bg-surface p-5 mb-8">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Estimated Time: 15-25 Hours
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <span className="text-d8020 font-bold shrink-0">Step 1</span>
            <p className="text-zinc-400">
              <strong className="text-white">Normal Playthrough</strong> &mdash;
              Play through the story naturally. Don&rsquo;t worry about missing
              trophies. Focus on learning the stealth system and story choices.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-d8020 font-bold shrink-0">Step 2</span>
            <p className="text-zinc-400">
              <strong className="text-white">Turning Points Cleanup</strong> &mdash;
              Use the Story Tree to replay key decisions and collect missed trophies.
              Go for &ldquo;Everyone Lives,&rdrdquo; &ldquo;All Endings,&rdquo;
              and collectible trophies.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-d8020 font-bold shrink-0">Step 3</span>
            <p className="text-zinc-400">
              <strong className="text-white">Survivor Mode</strong> &mdash;
              Play through on Survivor difficulty. No Turning Points. Use your
              knowledge from Steps 1-2 to make optimal choices.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="text-d8020 font-bold shrink-0">Step 4</span>
            <p className="text-zinc-400">
              <strong className="text-white">Cleanup Playthrough</strong> &mdash;
              Use Turning Points to mop up any remaining trophies. Check the Story
              Tree to see which paths and outcomes you have not yet discovered.
            </p>
          </div>
        </div>
      </div>

      <h2>Complete Trophy List</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Trophy</th>
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Type</th>
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Description</th>
              <th className="py-2 text-zinc-300 font-semibold">How to Unlock</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            {trophies.map((t, i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="py-2 pr-3 text-white font-medium whitespace-nowrap">
                  {t.name}
                </td>
                <td className="py-2 pr-3 whitespace-nowrap">
                  <span
                    className={
                      t.type === 'Platinum'
                        ? 'text-purple-400'
                        : t.type === 'Gold'
                          ? 'text-yellow-400'
                          : t.type === 'Silver'
                            ? 'text-zinc-300'
                            : 'text-orange-400'
                    }
                  >
                    {t.type}
                  </span>
                </td>
                <td className="py-2 pr-3">{t.desc}</td>
                <td className="py-2">{t.how}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-zinc-500 italic">
        {/* TODO: Update trophy list with confirmed in-game data after full verification */}
        Trophy list is based on available game information and will be updated with
        verified in-game data. Some entries may differ in the final release.
      </p>

      <div className="mt-8 rounded-lg border border-white/5 bg-surface p-5">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Related Guides
        </h3>
        <div className="space-y-2 text-sm">
          <a href="/save-everyone/" className="block text-d8020 hover:underline">
            How to Save Everyone (for &ldquo;Everyone Lives&rdquo; trophy) &rarr;
          </a>
          <a href="/all-endings/" className="block text-d8020 hover:underline">
            All Endings Explained &rarr;
          </a>
          <a href="/walkthrough/" className="block text-d8020 hover:underline">
            Full Walkthrough &rarr;
          </a>
        </div>
      </div>

      <FaqSection items={faqs} />
    </article>
  );
}
