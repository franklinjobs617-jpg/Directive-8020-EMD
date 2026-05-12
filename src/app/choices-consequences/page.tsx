import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqSection } from '@/components/faq-section';
import { ArticleSchema } from '@/components/article-schema';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Directive 8020 All Choices & Consequences - Turning Points Guide',
  description:
    'Every choice and consequence in Directive 8020, including all Turning Points, decision branches, and how each choice affects character survival and endings.',
  alternates: { canonical: 'https://directive8020.top/choices-consequences/' },
};

const faqs = [
  {
    question: 'What are Turning Points in Directive 8020?',
    answer:
      'Turning Points are key story decisions that you can revisit from the story tree. They let you replay specific choice moments without restarting the game. However, Turning Points are disabled in Survivor Mode.',
  },
  {
    question: 'Can you undo a choice in Directive 8020?',
    answer:
      'Yes, through the Turning Points system. After completing a chapter, you can select any Turning Point from the story tree and replay from that decision onward.',
  },
  {
    question: 'Does every choice matter in Directive 8020?',
    answer:
      'Most choices have consequences, but some are more impactful than others. The 5 major decisions listed in this guide determine which ending you get. Smaller choices affect dialogue, character relationships, and optional scenes.',
  },
  {
    question: 'How many Turning Points are there in Directive 8020?',
    answer:
      'There are 8 major Turning Points across the 8 chapters. Each one represents a critical branch in the story that significantly alters the narrative path.',
  },
];

const turningPoints = [
  {
    chapter: 'Chapter 1',
    title: 'The Meteor',
    choiceA: 'Alter Course',
    choiceB: 'Hold Position',
    consequenceA: 'Ship enters uncharted space; first mimic encounter is delayed but more dangerous. Crew discovers Scanner earlier.',
    consequenceB: 'Ship takes heavy damage; power failures force early stealth sequences. Some doors are permanently sealed, limiting routes.',
    bestFor: 'Alter Course — safer early game and better tool access',
  },
  {
    chapter: 'Chapter 2',
    title: 'First Contact',
    choiceA: 'Investigate the organism',
    choiceB: 'Report to command and wait',
    consequenceA: 'Crew gains critical information about mimic behavior but risks infection. Sims can be exposed.',
    consequenceB: 'Safer short-term, but the mimic spreads unchecked. Later chapters have more mimics to deal with.',
    bestFor: 'Investigate — knowledge is survival in this game',
  },
  {
    chapter: 'Chapter 3',
    title: 'Quarantine',
    choiceA: 'Side with Eisele (strict quarantine)',
    choiceB: 'Side with Young (relaxed quarantine)',
    consequenceA: 'Quarantine doors become usable barriers in Chapter 5. Infected crew are caught early. Lower morale.',
    consequenceB: 'Higher morale but mimics infiltrate safe zones. In Chapter 5, you must rely on stealth alone.',
    bestFor: 'Side with Eisele — tactical advantage in Chapter 5',
  },
  {
    chapter: 'Chapter 4',
    title: 'The Oracle',
    choiceA: 'Force Oracle to reveal hidden data',
    choiceB: 'Accept Oracle\'s explanation',
    consequenceA: 'Early clues about the clone revelation. Characters are better prepared for Chapter 6. Oracle may lock some systems.',
    consequenceB: 'Ship systems remain stable but the clone revelation hits harder in Chapter 6. Characters are more shaken.',
    bestFor: 'Force Oracle to reveal — prepare the crew for the truth',
  },
  {
    chapter: 'Chapter 5',
    title: 'Breach',
    choiceA: 'Seal the breach, leave trapped crew',
    choiceB: 'Rescue trapped crew',
    consequenceA: 'Trapped crew members die. The breach is contained. Remaining crew are safer.',
    consequenceB: 'You can save everyone with good stealth play, but if you fail, more people die than the seal option.',
    bestFor: 'Rescue trapped crew (requires skill) — only way to save everyone',
  },
  {
    chapter: 'Chapter 6',
    title: 'The Lab',
    choiceA: 'Destroy the clone vats',
    choiceB: 'Preserve the clone vats',
    consequenceA: 'No more resets. This cycle is the last one. Adds urgency but also finality.',
    consequenceB: 'Corinth can still restart the cycle. But the clone data becomes evidence you can use against them.',
    bestFor: 'Preserve the vats — evidence for the Expose Corinth ending',
  },
  {
    chapter: 'Chapter 7',
    title: 'Revelation',
    choiceA: 'Accept the clone truth',
    choiceB: 'Deny the clone truth',
    consequenceA: 'Characters gain clarity and make rational decisions. Opens the path to the best ending.',
    consequenceB: 'Characters become erratic. More unpredictable outcomes. Some characters may turn on each other.',
    bestFor: 'Accept the truth — essential for best ending',
  },
  {
    chapter: 'Chapter 8',
    title: 'Directive 8020',
    choiceA: 'Expose Corinth',
    choiceB: 'Destroy the Cassiopeia',
    consequenceA: 'Best ending possible if all crew alive and truth accepted. Survive and expose the conspiracy.',
    consequenceB: 'Crew dies but mimic is destroyed. If crew is already decimated, this may be the only option.',
    bestFor: 'Expose Corinth if crew is intact; Destroy ship as last resort',
  },
];

export default function ChoicesConsequencesPage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 All Choices & Consequences"
        description="Complete guide to every choice, consequence, and Turning Point in Directive 8020."
        url="https://directive8020.top/choices-consequences/"
      />
      <Breadcrumb items={[{ label: 'Choices & Consequences' }]} />
      <PageHero src="/steam-ss04.jpg" alt="Directive 8020 Turning Point choice interface HELP or RUN decision" />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        All Choices &amp; Consequences
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Every major decision in Directive 8020 mapped out with exact consequences.
        Know what each choice triggers before you commit &mdash; and how to use
        Turning Points to explore different paths.
      </p>
      <figure className="my-8">
        <img
          src="/steam-ss04.jpg"
          alt="Directive 8020 Turning Point choice interface HELP or RUN decision"
          className="w-full rounded-lg border border-zinc-800"
        />
        <figcaption className="text-sm text-zinc-500 mt-2 text-center">Every Turning Point choice branches the story — choose carefully.</figcaption>
      </figure>

      <h2>How Turning Points Work</h2>
      <p>
        <strong>Turning Points</strong> are Directive 8020&rsquo;s key innovation.
        After completing a chapter, you can open the <strong>Story Tree</strong> and
        select any Turning Point to replay from that decision onward. This means
        you don&rsquo;t need to replay the entire game to see different outcomes.
      </p>
      <div className="warn-box">
        <p className="text-yellow-400 text-sm font-semibold mb-1">
          Survivor Mode Restriction
        </p>
        <p className="text-sm text-zinc-400">
          Turning Points are <strong>disabled in Survivor Mode</strong>. If you are
          going for the platinum trophy, you must make the right choices on your
          first attempt in that mode.
        </p>
      </div>

      <h2>All 8 Turning Points</h2>
      <p>
        Below is every major Turning Point in the game, what each choice leads to,
        and which option is optimal for the best ending.
      </p>

      <div className="space-y-6 mt-6">
        {turningPoints.map((tp, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/5 bg-surface p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold text-d8020 bg-d8020/10 px-2 py-0.5 rounded">
                {tp.chapter}
              </span>
              <h3 className="font-serif text-lg font-semibold text-white m-0">
                {tp.title}
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded border border-blue-500/20 bg-blue-500/5 p-3">
                <p className="font-semibold text-blue-400 mb-1">
                  Option A: {tp.choiceA}
                </p>
                <p className="text-zinc-400">{tp.consequenceA}</p>
              </div>
              <div className="rounded border border-orange-500/20 bg-orange-500/5 p-3">
                <p className="font-semibold text-orange-400 mb-1">
                  Option B: {tp.choiceB}
                </p>
                <p className="text-zinc-400">{tp.consequenceB}</p>
              </div>
            </div>
            <p className="text-sm text-emerald-400 mt-3">
              <strong>Best for best ending:</strong> {tp.bestFor}
            </p>
          </div>
        ))}
      </div>

      <h2>Minor Choices That Still Matter</h2>
      <p>
        Beyond the 8 major Turning Points, there are smaller decisions that affect
        character relationships, dialogue, and optional scenes:
      </p>
      <ul>
        <li>
          <strong>Comfort or confront a distressed crew member</strong> &mdash;
          Affects that character&rsquo;s trust level and willingness to follow
          your lead in later chapters.
        </li>
        <li>
          <strong>Share or hoard supplies</strong> &mdash;
          Sharing builds trust; hoarding gives you more tools but isolates you
          from the group.
        </li>
        <li>
          <strong>Report or cover up a discovered infection</strong> &mdash;
          Reporting triggers quarantine protocols; covering up preserves morale
          but risks an outbreak.
        </li>
        <li>
          <strong>Investigate or ignore strange sounds</strong> &mdash;
          Investigating yields lore and collectibles; ignoring keeps you safe
          but you miss story content.
        </li>
      </ul>

      <div className="mt-8 rounded-lg border border-white/5 bg-surface p-5">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Related Guides
        </h3>
        <div className="space-y-2 text-sm">
          <a href="/all-endings/" className="block text-d8020 hover:underline">
            All Endings Explained &rarr;
          </a>
          <a href="/save-everyone/" className="block text-d8020 hover:underline">
            How to Save Everyone &rarr;
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
