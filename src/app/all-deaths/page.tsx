import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqSection } from '@/components/faq-section';
import { ArticleSchema } from '@/components/article-schema';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Directive 8020 All Deaths Guide - Every Death Scene & How to Trigger Them',
  description:
    'Complete guide to every death in Directive 8020. How characters die, death triggers by chapter, the "everyone dies" path, and how to avoid or unlock specific death scenes.',
  alternates: { canonical: 'https://directive8020.top/all-deaths/' },
};

const faqs = [
  {
    question: 'How many death scenes are in Directive 8020?',
    answer:
      'Directive 8020 features numerous unique death scenes across all characters. Deaths can be triggered by failed QTEs, bad choices, stealth failures, and specific story decisions. The game tracks discovered deaths in the Story Tree.',
  },
  {
    question: 'Can everyone die in Directive 8020?',
    answer:
      'Yes. It is possible for all characters to die, resulting in a special "everyone dies" ending. This requires a series of deliberately bad choices and failed QTEs across multiple chapters.',
  },
  {
    question: 'Can Tomas Carter be saved?',
    answer:
      'No. Tomas Carter always dies in the prologue. He is killed by the mimic version of Simms during the initial investigation. His death is scripted and unavoidable.',
  },
  {
    question: 'What is a "death spiral" in Directive 8020?',
    answer:
      'A death spiral refers to a cascading series of bad outcomes where one character\'s death makes subsequent deaths more likely. For example, if the medical specialist dies early, other characters have less support in later chapters.',
  },
  {
    question: 'Do deaths affect the ending?',
    answer:
      'Yes, dramatically. The ending you receive depends on how many crew members survive, which specific characters are alive, and key decisions made throughout the game. More survivors generally lead to better outcomes.',
  },
];

const deathTypes = [
  {
    type: 'QTE Deaths',
    description: 'Triggered by failing Quick Time Event sequences. Button prompts appear on screen and you must press the correct button in time. Missing a QTE during an action sequence can result in immediate death.',
    tip: 'Pay attention during action sequences. QTEs appear as button prompts on screen. On Survivor Mode, the timing window is roughly 50% shorter.',
  },
  {
    type: 'Choice Deaths',
    description: 'Triggered by making specific decisions at Turning Points or during dialogue. Some choices lead directly to a character\'s death, while others set up dangerous situations in later chapters.',
    tip: 'Think carefully before every decision. Some choices that seem safe in the moment have deadly consequences chapters later.',
  },
  {
    type: 'Stealth Deaths',
    description: 'Triggered by being detected by mimics during stealth sections. The game features real-time stealth called "Threatening Exploration." If a mimic catches you, it can lead to a death scene.',
    tip: 'Stay in shadows and avoid using your flashlight when mimics are nearby. Use the Scanner to track enemy positions before moving.',
  },
  {
    type: 'Story Deaths',
    description: 'Deaths that occur as part of the narrative regardless of player input. These are scripted events that advance the plot. Tomas Carter\'s death in the prologue is the primary example.',
    tip: 'These cannot be prevented. They are part of the story and serve to establish the threat level.',
  },
];

const chapterDeaths = [
  {
    chapter: 1,
    title: 'The Meteor',
    risk: 'Low',
    details: 'This is primarily a setup chapter. No playable characters can die here, but the decisions made (alter course vs. hold position) affect danger levels in later chapters.',
  },
  {
    chapter: 2,
    title: 'First Contact',
    risk: 'Medium',
    details: 'The first stealth sections are introduced. Failing to use the Scanner properly or being detected by mimics can lead to early deaths. The investigation decision affects Simms\' fate.',
  },
  {
    chapter: 3,
    title: 'Quarantine',
    risk: 'Medium',
    details: 'The quarantine decision (side with Eisele or Young) affects survival chances in Chapter 5. Characters can die if the wrong quarantine protocol is chosen and mimics infiltrate safe zones.',
  },
  {
    chapter: 4,
    title: 'The Oracle',
    risk: 'Medium',
    details: 'Accessing Oracle\'s data and Williams\' files. Choosing to accept Oracle\'s lies vs. forcing the truth affects who becomes a target. Some characters can be endangered by trusting the wrong information.',
  },
  {
    chapter: 5,
    title: 'Breach',
    risk: 'Very High',
    details: 'The most dangerous chapter. Multiple characters can die based on earlier choices and stealth performance. The "rescue trapped crew" vs. "seal the breach" decision is critical. Stafford is most commonly lost here.',
  },
  {
    chapter: 6,
    title: 'The Lab',
    risk: 'Medium',
    details: 'The clone laboratory discovery. While primarily a story chapter, exploring the lab thoroughly is important for collectibles. Some characters can be endangered by choices made with the clone vats.',
  },
  {
    chapter: 7,
    title: 'Revelation',
    risk: 'High',
    details: 'The clone truth is revealed. Characters who deny the truth become erratic and more likely to die. Accepting the truth leads to clearer thinking and better survival odds in the finale.',
  },
  {
    chapter: 8,
    title: 'Directive 8020',
    risk: 'Very High',
    details: 'The final chapter. Multiple endings are possible based on crew survival, clone truth acceptance, and the shuttle escape decision. The Williams scene has three possible outcomes. Exposing Corinth requires specific conditions.',
  },
];

export default function AllDeathsPage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 All Deaths Guide"
        description="Complete guide to every death scene in Directive 8020 with trigger conditions and avoidance tips."
        url="https://directive8020.top/all-deaths/"
      />
      <Breadcrumb items={[{ label: 'All Deaths' }]} />
      <PageHero src="/steam-ss05.jpg" alt="Directive 8020 astronaut caught by alien mimic - all deaths guide" />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        All Deaths Guide
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Directive 8020 features numerous unique death scenes across all
        characters. This guide explains how each type of death works, when
        characters are most at risk, and how to avoid &mdash; or intentionally
        trigger &mdash; specific deaths.
      </p>

      <h2>Types of Deaths</h2>
      <div className="space-y-4 mt-4">
        {deathTypes.map((dt, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/5 bg-surface p-5"
          >
            <h3 className="font-serif text-base font-semibold text-white m-0 mb-2">
              {dt.type}
            </h3>
            <p className="text-sm text-zinc-400">{dt.description}</p>
            <div className="tip-box mt-3">
              <p className="text-emerald-400 text-xs font-semibold mb-1">Tip</p>
              <p className="text-xs text-zinc-400">{dt.tip}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Deaths by Chapter</h2>
      <p>
        Here is a breakdown of death risk levels and key danger points for each
        chapter. Use this to know when to be most careful.
      </p>

      <div className="space-y-4 mt-4">
        {chapterDeaths.map((ch) => (
          <div
            key={ch.chapter}
            className="rounded-lg border border-white/5 bg-surface p-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-serif text-base font-semibold text-white m-0">
                Chapter {ch.chapter}: {ch.title}
              </h3>
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded ${
                  ch.risk === 'Very High'
                    ? 'bg-red-500/20 text-red-400'
                    : ch.risk === 'High'
                      ? 'bg-orange-500/20 text-orange-400'
                      : ch.risk === 'Medium'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-emerald-500/20 text-emerald-400'
                }`}
              >
                {ch.risk}
              </span>
            </div>
            <p className="text-sm text-zinc-400">{ch.details}</p>
          </div>
        ))}
      </div>

      <h2>The &ldquo;Everyone Dies&rdquo; Path</h2>
      <p>
        It is possible to have all characters die, resulting in a special ending.
        This requires deliberately making the worst choices at every Turning
        Point and failing critical QTEs. The &ldquo;everyone dies&rdquo; ending
        is one of the most dramatic in the game and worth experiencing for
        completionists.
      </p>
      <div className="rounded-lg border border-d8020/20 bg-d8020/5 p-5 my-4">
        <h3 className="font-serif text-base font-semibold text-white mb-2">
          How to Trigger Everyone Dies
        </h3>
        <ul className="text-sm text-zinc-400 space-y-1">
          <li>&bull; Make the worst choices at every Turning Point</li>
          <li>&bull; Fail QTEs during critical action sequences</li>
          <li>&bull; Deny the clone truth in Chapter 7</li>
          <li>&bull; Choose the most reckless options in Chapter 8</li>
          <li>&bull; Ensure no crew members are in safe positions during the finale</li>
        </ul>
      </div>

      <h2>How to Avoid Deaths</h2>
      <p>
        If you are going for the &ldquo;Everyone Lives&rdquo; trophy, follow
        these general principles:
      </p>
      <ul>
        <li>
          <strong>Use the Scanner constantly</strong> &mdash; Knowing where mimics
          are is the best defense against stealth deaths.
        </li>
        <li>
          <strong>Make thoughtful choices</strong> &mdash; Do not rush decisions.
          Think about long-term consequences, not just immediate safety.
        </li>
        <li>
          <strong>Side with Eisele in Chapter 3</strong> &mdash; The strict
          quarantine protocol creates safer zones in Chapter 5.
        </li>
        <li>
          <strong>Accept the clone truth in Chapter 7</strong> &mdash; Characters
          who accept their identity make better decisions in the finale.
        </li>
        <li>
          <strong>Practice QTEs</strong> &mdash; If you struggle with timing,
          play on Explorer difficulty first to learn the patterns.
        </li>
      </ul>

      <div className="mt-8 rounded-lg border border-white/5 bg-surface p-5">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Related Guides
        </h3>
        <div className="space-y-2 text-sm">
          <a href="/save-everyone/" className="block text-d8020 hover:underline">
            How to Save Everyone &rarr;
          </a>
          <a href="/all-endings/" className="block text-d8020 hover:underline">
            All Endings Explained &rarr;
          </a>
          <a href="/best-ending/" className="block text-d8020 hover:underline">
            Best Ending Guide &rarr;
          </a>
        </div>
      </div>

      <FaqSection items={faqs} />
    </article>
  );
}
