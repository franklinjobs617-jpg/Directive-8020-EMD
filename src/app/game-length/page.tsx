import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqSection } from '@/components/faq-section';
import { ArticleSchema } from '@/components/article-schema';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Directive 8020 Game Length - How Long to Beat & All Episodes',
  description:
    'How long is Directive 8020? Complete breakdown of game length, all 8 episodes, chapter list, and completionist time. Plus comparison to other Dark Pictures games.',
  alternates: { canonical: 'https://directive8020.top/game-length/' },
};

const faqs = [
  {
    question: 'How long is Directive 8020?',
    answer:
      'A single playthrough takes approximately 6-8 hours. The game has 8 episodes, each roughly 1 hour long. Completionist playthroughs (all endings, collectibles, trophies) take 15-25 hours across multiple runs.',
  },
  {
    question: 'How many episodes are in Directive 8020?',
    answer:
      'Directive 8020 has 8 episodes, each approximately 1 hour long. This is consistent with previous Dark Pictures games. Episodes can be replayed individually using the Turning Points feature.',
  },
  {
    question: 'How many chapters are in Directive 8020?',
    answer:
      'The game has 8 episodes that function as chapters. Each episode advances the story of the Cassiopeia crew and contains multiple decision points and stealth sections.',
  },
  {
    question: 'How long does it take to get all endings?',
    answer:
      'Seeing all endings requires at least 2-3 playthroughs, taking approximately 15-25 hours total. Using Turning Points to replay key decisions can reduce this time by letting you branch from specific chapters.',
  },
  {
    question: 'Is Directive 8020 longer than other Dark Pictures games?',
    answer:
      'Yes. Directive 8020 is approximately the same length as Until Dawn (6-8 hours) and longer than previous Dark Pictures entries (typically 4-6 hours). The addition of stealth gameplay extends playtime.',
  },
];

const episodes = [
  {
    num: 1,
    title: 'The Meteor',
    summary: 'The Cassiopeia detects an incoming meteor swarm. The crew must decide whether to alter course or hold position. This sets up the events that bring the alien organism aboard.',
  },
  {
    num: 2,
    title: 'First Contact',
    summary: 'The crew encounters the alien organism for the first time. Stealth mechanics are introduced. Trust begins to fracture as crew members suspect each other of being infected.',
  },
  {
    num: 3,
    title: 'Quarantine',
    summary: 'Eisele and Young clash over quarantine protocols. The strict vs. relaxed quarantine decision has major consequences for Chapter 5. The crew investigates the ship\'s records.',
  },
  {
    num: 4,
    title: 'The Oracle',
    summary: 'The ship\'s AI, Oracle, is discovered to be withholding information. Accessing hidden files reveals fragments of data about previous missions. Williams\' private files contain critical clues.',
  },
  {
    num: 5,
    title: 'Breach',
    summary: 'The mimics breach the safe zone. The most action-intensive chapter with heavy stealth gameplay. Multiple characters can die depending on earlier choices and stealth performance.',
  },
  {
    num: 6,
    title: 'The Lab',
    summary: 'The crew discovers a hidden clone laboratory. Vats of unconscious bodies — exact copies of the crew — line the walls. The clone revelation begins to unfold.',
  },
  {
    num: 7,
    title: 'Revelation',
    summary: 'The full truth is revealed: the crew are clones with memory backups. This is the 13th iteration of the experiment. Characters must choose to accept or deny the truth.',
  },
  {
    num: 8,
    title: 'Directive 8020',
    summary: 'The final chapter. The crew must decide whether to sacrifice themselves, escape quietly, or expose Corinth. Multiple endings are possible based on accumulated choices.',
  },
];

export default function GameLengthPage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 Game Length & Episodes"
        description="Complete breakdown of Directive 8020 game length, all 8 episodes, and how long to beat."
        url="https://directive8020.top/game-length/"
      />
      <Breadcrumb items={[{ label: 'Game Length' }]} />
      <PageHero src="/steam-ss01.jpg" alt="Directive 8020 spaceship corridor - game length and episode guide" />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        Game Length &amp; Episodes
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        How long is Directive 8020? Here is a complete breakdown of the
        game&apos;s length, all 8 episodes, and how long it takes to see
        everything.
      </p>

      <h2>How Long to Beat</h2>
      <div className="rounded-lg border border-white/5 bg-surface p-5 mb-6">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">6-8 hrs</div>
            <div className="text-xs text-zinc-500 mt-1">Single Playthrough</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">15-20 hrs</div>
            <div className="text-xs text-zinc-500 mt-1">All Endings &amp; Collectibles</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">15-25 hrs</div>
            <div className="text-xs text-zinc-500 mt-1">Platinum / 100% Trophies</div>
          </div>
        </div>
      </div>

      <p>
        A single playthrough of Directive 8020 takes approximately <strong>6-8
        hours</strong>. This is longer than previous Dark Pictures games (typically
        4-6 hours) and comparable to Until Dawn. The length comes from the
        expanded stealth gameplay, more detailed exploration, and 8 full episodes.
      </p>

      <h2>All 8 Episodes</h2>
      <p>
        The game is structured as 8 episodes, each approximately 1 hour long.
        Episodes can be replayed individually using the Turning Points feature
        after completing them.
      </p>

      <div className="space-y-4 mt-4">
        {episodes.map((ep) => (
          <div
            key={ep.num}
            className="rounded-lg border border-white/5 bg-surface p-5"
          >
            <h3 className="font-serif text-base font-semibold text-white m-0 mb-2">
              <span className="text-d8020">Episode {ep.num}:</span> {ep.title}
            </h3>
            <p className="text-sm text-zinc-400">{ep.summary}</p>
          </div>
        ))}
      </div>

      <h2>Completionist Time</h2>
      <p>
        If you want to see everything Directive 8020 has to offer, expect to
        invest <strong>15-25 hours</strong> across multiple playthroughs:
      </p>
      <ul>
        <li>
          <strong>Playthrough 1 (6-8 hrs)</strong> &mdash; Blind playthrough.
          Learn the story, characters, and mechanics. Make choices naturally.
        </li>
        <li>
          <strong>Playthrough 2 (4-6 hrs)</strong> &mdash; Use Turning Points to
          replay key decisions. Go for the best ending and collect all
          collectibles.
        </li>
        <li>
          <strong>Playthrough 3 (6-8 hrs)</strong> &mdash; Survivor Mode for the
          platinum trophy. No Turning Points allowed, so every choice is permanent.
        </li>
      </ul>
      <div className="tip-box">
        <p className="text-emerald-400 text-sm font-semibold mb-1">Time-Saving Tip</p>
        <p className="text-sm text-zinc-400">
          Use the Turning Points feature to replay specific chapters instead of
          full playthroughs. This can save several hours when hunting for
          specific trophies or seeing different endings.
        </p>
      </div>

      <h2>Comparison to Other Dark Pictures Games</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Game</th>
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Length</th>
              <th className="py-2 text-zinc-300 font-semibold">Episodes</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            {[
              ['Man of Medan', '~4-5 hours', '5 chapters'],
              ['Little Hope', '~4-5 hours', '5 chapters'],
              ['House of Ashes', '~5-6 hours', '5 chapters'],
              ['The Devil in Me', '~6-7 hours', '5 chapters'],
              ['Directive 8020', '~6-8 hours', '8 episodes'],
            ].map(([game, length, eps], i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="py-2 pr-3 text-white font-medium">{game}</td>
                <td className="py-2 pr-3">{length}</td>
                <td className="py-2">{eps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 rounded-lg border border-white/5 bg-surface p-5">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Related Guides
        </h3>
        <div className="space-y-2 text-sm">
          <a href="/walkthrough/" className="block text-d8020 hover:underline">
            Full Walkthrough &rarr;
          </a>
          <a href="/difficulty-guide/" className="block text-d8020 hover:underline">
            Difficulty Guide &amp; Turning Points &rarr;
          </a>
          <a href="/trophy-guide/" className="block text-d8020 hover:underline">
            Trophy Guide &amp; Roadmap &rarr;
          </a>
        </div>
      </div>

      <FaqSection items={faqs} />
    </article>
  );
}
