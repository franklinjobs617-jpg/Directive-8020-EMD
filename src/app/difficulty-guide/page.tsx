import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqSection } from '@/components/faq-section';
import { ArticleSchema } from '@/components/article-schema';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Directive 8020 Difficulty Guide - Explorer vs Survivor Mode & Turning Points',
  description:
    'Complete difficulty guide for Directive 8020: Explorer, Normal, and Survivor modes explained. How the Turning Points rewind system works, and which difficulty to choose for your first playthrough.',
  alternates: { canonical: 'https://directive8020.top/difficulty-guide/' },
};

const faqs = [
  {
    question: 'What is the hardest difficulty in Directive 8020?',
    answer:
      'Survivor Mode is the hardest difficulty. It disables Turning Points (no rewinding decisions), has shorter QTE windows, more aggressive mimic AI, and fewer resources. It is required for the platinum trophy.',
  },
  {
    question: 'Can you rewind choices on Survivor Mode?',
    answer:
      'No. Survivor Mode disables the Turning Points feature entirely. Every choice is permanent. This was a controversial decision as players wanting the hardest difficulty feel punished for not being able to retry choices.',
  },
  {
    question: 'What are Turning Points in Directive 8020?',
    answer:
      'Turning Points is a story tree feature that lets you rewind to pivotal moments and replay key decisions without starting the game over. It does not overwrite your progress — you can continue from where you were after replaying a branch.',
  },
  {
    question: 'What difficulty should I play first?',
    answer:
      'Play on Normal for your first playthrough. This enables Turning Points so you can explore different outcomes. After completing the game once, attempt Survivor Mode for the platinum trophy with the knowledge you gained.',
  },
  {
    question: 'What replaced premonitions in Directive 8020?',
    answer:
      'Flash forwards replace premonitions. Instead of seeing brief visions of potential deaths, you play through short sequences of future events. This gives more context about upcoming dangers.',
  },
];

const difficulties = [
  {
    name: 'Explorer',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/20',
    turningPoints: 'Enabled',
    qte: 'Generous timing',
    ai: 'Passive',
    stealth: 'Optional safe mode available',
    best: 'Players who want to experience the story without stress',
  },
  {
    name: 'Normal',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/20',
    turningPoints: 'Enabled',
    qte: 'Standard timing',
    ai: 'Standard',
    stealth: 'Standard detection',
    best: 'Recommended for first playthrough',
  },
  {
    name: 'Survivor',
    color: 'text-red-400',
    bgColor: 'bg-red-500/20',
    turningPoints: 'DISABLED',
    qte: '~50% shorter',
    ai: 'Aggressive &amp; unpredictable',
    stealth: 'Faster detection, fewer resources',
    best: 'Experienced players going for platinum trophy',
  },
];

export default function DifficultyGuidePage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 Difficulty Guide"
        description="Complete difficulty guide for Directive 8020 covering Explorer, Normal, and Survivor modes and the Turning Points system."
        url="https://directive8020.top/difficulty-guide/"
      />
      <Breadcrumb items={[{ label: 'Difficulty Guide' }]} />
      <PageHero src="/steam-ss04.jpg" alt="Directive 8020 crew making difficult decision - difficulty and turning points guide" />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        Difficulty Guide &amp; Turning Points
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Directive 8020 has three difficulty modes that affect gameplay,
        stealth, QTEs, and the Turning Points rewind system. Here is
        everything you need to know to choose the right difficulty.
      </p>

      <h2>Difficulty Modes</h2>
      <div className="space-y-4 mt-4">
        {difficulties.map((diff) => (
          <div
            key={diff.name}
            className="rounded-lg border border-white/5 bg-surface p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <h3 className={`font-serif text-lg font-semibold m-0 ${diff.color}`}>
                {diff.name}
              </h3>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded ${diff.bgColor} ${diff.color}`}>
                {diff.best}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-zinc-500">Turning Points: </span>
                <span className="text-zinc-300">{diff.turningPoints}</span>
              </div>
              <div>
                <span className="text-zinc-500">QTE Timing: </span>
                <span className="text-zinc-300">{diff.qte}</span>
              </div>
              <div>
                <span className="text-zinc-500">Mimic AI: </span>
                <span className="text-zinc-300">{diff.ai}</span>
              </div>
              <div>
                <span className="text-zinc-500">Stealth: </span>
                <span className="text-zinc-300">{diff.stealth}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Turning Points System</h2>
      <p>
        Turning Points is a story tree feature unique to Directive 8020. It
        lets you <strong>rewind to pivotal moments</strong> and replay key
        decisions without starting the game over. This is essential for seeing
        different outcomes and collecting trophies.
      </p>
      <div className="rounded-lg border border-white/5 bg-surface p-5 my-4">
        <h3 className="font-serif text-base font-semibold text-white mb-3">
          How Turning Points Work
        </h3>
        <ul className="text-sm text-zinc-400 space-y-2">
          <li>&bull; After completing a chapter, open the Story Tree from the menu</li>
          <li>&bull; Key decision points are highlighted as &ldquo;Turning Points&rdquo;</li>
          <li>&bull; Select a Turning Point to replay from that moment</li>
          <li>&bull; Your previous progress is NOT overwritten &mdash; you can continue from where you were</li>
          <li>&bull; The flowchart shows which choices lead to which paths</li>
          <li>&bull; Turning Points are DISABLED in Survivor Mode</li>
        </ul>
      </div>

      <div className="rounded-lg border border-d8020/20 bg-d8020/5 p-5 my-6">
        <h3 className="font-serif text-base font-semibold text-white mb-2">
          Community Controversy
        </h3>
        <p className="text-sm text-zinc-400">
          The decision to tie Turning Points to difficulty was controversial.
          On r/DarkPicturesAnthology, players called it &ldquo;a TERRIBLE
          idea&rdquo; — those wanting the hardest difficulty feel punished
          because they cannot retry choices. The developers explained this was
          intentional: Survivor Mode is meant to be a &ldquo;live with your
          choices&rdquo; experience. If you want to explore all outcomes,
          play on Normal first.
        </p>
      </div>

      <h2>Flash Forwards (Replacing Premonitions)</h2>
      <p>
        Previous Dark Pictures games featured <strong>Premonitions</strong> &mdash;
        brief visions of potential deaths that hinted at upcoming dangers.
        Directive 8020 replaces these with <strong>Flash Forwards</strong>.
      </p>
      <p>
        Unlike Premonitions (which were short, cryptic images), Flash Forwards
        let you <strong>play through short sequences of future events</strong>.
        This gives more context about what is coming and helps you prepare for
        dangerous situations. Flash Forwards are woven into the story naturally
        rather than being collectible items.
      </p>

      <h2>Stealth Difficulty Differences</h2>
      <p>
        The stealth system (&ldquo;Threatening Exploration&rdquo;) changes
        significantly across difficulties:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Aspect</th>
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Explorer</th>
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Normal</th>
              <th className="py-2 text-zinc-300 font-semibold">Survivor</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            {[
              ['Detection Speed', 'Slow', 'Standard', 'Fast'],
              ['Safe Mode Option', 'Yes', 'No', 'No'],
              ['Mimic Patrol Patterns', 'Predictable', 'Standard', 'Unpredictable'],
              ['Resources', 'Abundant', 'Standard', 'Limited'],
              ['Flashlight Risk', 'Low', 'Medium', 'High'],
            ].map(([aspect, explorer, normal, survivor], i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="py-2 pr-3 text-white font-medium">{aspect}</td>
                <td className="py-2 pr-3">{explorer}</td>
                <td className="py-2 pr-3">{normal}</td>
                <td className="py-2">{survivor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Which Difficulty Should You Choose?</h2>
      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-5 my-4">
        <h3 className="font-serif text-base font-semibold text-white mb-2">
          Our Recommendation
        </h3>
        <ol className="text-sm text-zinc-400 space-y-2 list-decimal pl-4">
          <li>
            <strong className="text-white">First Playthrough: Normal</strong> &mdash;
            Experience the story with Turning Points enabled. Explore different
            outcomes and learn the optimal choices.
          </li>
          <li>
            <strong className="text-white">Second Playthrough: Survivor</strong> &mdash;
            Use the knowledge from your first run to tackle the hardest difficulty.
            Every choice is permanent. This is required for the platinum trophy.
          </li>
          <li>
            <strong className="text-white">Cleanup: Normal with Turning Points</strong> &mdash;
            Replay specific chapters to collect remaining trophies and see
            different endings.
          </li>
        </ol>
      </div>

      <h2>Difficulty and Trophies</h2>
      <p>
        The &ldquo;Survivor&rdquo; trophy requires completing the game on
        Survivor Mode. Since Turning Points are disabled, you must make optimal
        choices on your first attempt. Practice on Normal first and memorize
        the best decisions before attempting Survivor Mode.
      </p>

      <div className="mt-8 rounded-lg border border-white/5 bg-surface p-5">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Related Guides
        </h3>
        <div className="space-y-2 text-sm">
          <a href="/trophy-guide/" className="block text-d8020 hover:underline">
            Trophy Guide &amp; Roadmap &rarr;
          </a>
          <a href="/save-everyone/" className="block text-d8020 hover:underline">
            How to Save Everyone &rarr;
          </a>
          <a href="/game-length/" className="block text-d8020 hover:underline">
            Game Length &amp; Episodes &rarr;
          </a>
        </div>
      </div>

      <FaqSection items={faqs} />
    </article>
  );
}
