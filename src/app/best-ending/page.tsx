import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqSection } from '@/components/faq-section';
import { ArticleSchema } from '@/components/article-schema';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Directive 8020 Best Ending Guide - How to Get the Good Ending',
  description:
    'Directive 8020 best ending guide with survivor tracking, evidence checks, clone and cycle truth, Andromeda risk, rescue vs warning choices, and Story Tree cleanup.',
  alternates: { canonical: 'https://directive8020.top/best-ending/' },
};

const faqs = [
  {
    question: 'What is the best ending in Directive 8020?',
    answer:
      'The best ending route should be tracked through survivor state, evidence, clone/cycle truth, message choice, and whether the outcome protects the crew, Andromeda, and Earth. Treat exact route labels as spoiler cleanup until verified in your Story Tree.',
  },
  {
    question: 'How do I get the true ending?',
    answer:
      'Use a clean route with all major survivors alive, strong evidence collected, identity checks passed, and a finale decision that balances rescue against contamination risk. Then compare variants through Turning Points.',
  },
  {
    question: 'Can everyone survive in Directive 8020?',
    answer:
      'Yes. It is possible for all playable characters and most NPCs to survive. This requires making optimal choices at every Turning Point, mastering stealth sections, and accepting the clone truth. Note: Tomas Carter always dies in the prologue.',
  },
  {
    question: 'What is the difference between best ending and true ending?',
    answer:
      'The terms are often used interchangeably. The "best ending" typically refers to all crew surviving and exposing Corinth. The "true ending" may refer to the fullest revelation of the story, including finding all experiment logs and Oracle files.',
  },
  {
    question: 'Is there a secret ending in Directive 8020?',
    answer:
      'There is a post-credits scene that varies based on your choices. In the post-credits, the original Dr. Eisele reports on Earth and can suggest either continuing or discontinuing the clone crew program. The variation depends on your key decisions.',
  },
];

const criticalChoices = [
  {
    chapter: 1,
    title: 'The Meteor',
    choice: 'Alter Course or Hold Position',
    best: 'Alter Course',
    reason: 'Avoids the worst of the meteor damage and keeps the ship in better condition for later chapters.',
  },
  {
    chapter: 2,
    title: 'First Contact',
    choice: 'Investigate the organism or wait',
    best: 'Investigate the organism',
    reason: 'Gaining knowledge about the mimic helps characters avoid infection. Waiting allows the mimic to spread and ambush crew members.',
  },
  {
    chapter: 3,
    title: 'Quarantine',
    choice: 'Side with Eisele (strict quarantine) or Young (relaxed quarantine)',
    best: 'Side with Eisele',
    reason: 'Strict quarantine creates safe zones that save lives in Chapter 5. The quarantine doors can be used as barriers against mimics.',
  },
  {
    chapter: 4,
    title: 'The Oracle',
    choice: 'Force Oracle to reveal data or accept Oracle\'s lies',
    best: 'Force Oracle to reveal data',
    reason: 'Forcing the truth protects Williams and gives the crew critical information about the clone program.',
  },
  {
    chapter: 5,
    title: 'Breach',
    choice: 'Rescue trapped crew or seal the breach',
    best: 'Rescue trapped crew',
    reason: 'Sealing the breach leaves Stafford and other crew members to die. Rescuing them requires mastering stealth but saves lives.',
  },
  {
    chapter: 6,
    title: 'The Lab',
    choice: 'Preserve the clone vats or destroy them',
    best: 'Preserve the clone vats',
    reason: 'Preserving the vats keeps evidence of the clone program intact, which is needed for the "Expose Corinth" ending.',
  },
  {
    chapter: 7,
    title: 'Revelation',
    choice: 'Accept the clone truth or deny it',
    best: 'Accept the truth',
    reason: 'Characters who accept their clone identity make rational decisions in the finale. Those who deny it become erratic and reckless.',
  },
  {
    chapter: 8,
    title: 'Directive 8020',
    choice: 'Expose Corinth, sacrifice, or escape quietly',
    best: 'Expose Corinth',
    reason: 'Transmitting the evidence to Earth reveals the corporation\'s crimes. Requires all crew alive, clone truth accepted, and experiment logs found.',
  },
];

const bestEndingConditions = [
  {
    condition: 'Survivor state',
    trackThis: 'Who is alive, injured, isolated, or missing before the finale.',
    whyItMatters:
      'A route with more living witnesses usually keeps more finale options open.',
  },
  {
    condition: 'Evidence state',
    trackThis: 'Oracle files, Williams context, experiment evidence, and identity-verification clues.',
    whyItMatters:
      'Evidence changes whether the crew understands the threat before making a final call.',
  },
  {
    condition: 'Message choice',
    trackThis: 'Whether the finale sends rescue context, a warning, or another mission outcome.',
    whyItMatters:
      'The transcript frames rescue and warning as different ethical routes, not simple good and bad buttons.',
  },
  {
    condition: 'Andromeda / Earth risk',
    trackThis: 'Whether the ending protects only the Cassiopeia crew or also avoids spreading contamination.',
    whyItMatters:
      'A survivor-heavy ending may still be compromised if it endangers another ship or Earth.',
  },
  {
    condition: 'Cycle truth',
    trackThis: 'Whether copied memories, synthetic bodies, and repeat-mission context have been revealed.',
    whyItMatters:
      'The best interpretation of an ending depends on what the crew and player know by the final scene.',
  },
];

export default function BestEndingPage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 Best Ending Guide"
        description="Directive 8020 best ending guide with survivor tracking, evidence checks, clone and cycle truth, Andromeda risk, rescue vs warning choices, and Story Tree cleanup."
        url="https://directive8020.top/best-ending/"
        dateModified="2026-05-15"
      />
      <Breadcrumb items={[{ label: 'Best Ending' }]} />
      <PageHero src="/steam-ss11.webp" alt="Directive 8020 revelation scene - best ending guide with all critical choices" />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        Best Ending Guide
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Everything you need to unlock the best possible outcome in Directive
        8020. This guide covers every critical choice, the conditions for the
        optimal ending, and what happens in the post-credits scene.
      </p>

      <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-5 mb-8">
        <p className="text-emerald-400 text-sm font-semibold mb-2">
          Best Ending Route Conditions (TL;DR)
        </p>
        <ol className="text-sm text-zinc-400 space-y-1 list-decimal pl-4">
          <li>Keep all 5 playable characters alive</li>
          <li>Preserve evidence before accusation or containment scenes</li>
          <li>Verify isolated returns with scanner, witness, or timeline clues</li>
          <li>Understand the clone and cycle truth before finale cleanup</li>
          <li>Compare distress, warning, rescue, and evidence outcomes separately</li>
          <li>Use Turning Points to test one final condition at a time</li>
        </ol>
      </div>

      <h2>Best Ending Conditions from the Transcript</h2>
      <p>
        The safest best-ending method is to track conditions, not just memorize
        one final choice. The full-game transcript shows that the finale weighs
        rescue, warning, Andromeda safety, Earth contamination, Oracle context,
        and the clone/cycle truth.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Condition</th>
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Track This</th>
              <th className="py-2 text-zinc-300 font-semibold">Why It Matters</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            {bestEndingConditions.map((item) => (
              <tr key={item.condition} className="border-b border-white/5">
                <td className="py-2 pr-3 text-white font-medium">{item.condition}</td>
                <td className="py-2 pr-3">{item.trackThis}</td>
                <td className="py-2">{item.whyItMatters}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>All Critical Choices</h2>
      <p>
        Every chapter has at least one decision that can affect the ending.
        Treat this table as a working route map, then verify exact outcomes in
        your Story Tree.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Ch.</th>
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Choice</th>
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Best Option</th>
              <th className="py-2 text-zinc-300 font-semibold">Why</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            {criticalChoices.map((c, i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="py-2 pr-3 text-white font-medium">{c.chapter}</td>
                <td className="py-2 pr-3">{c.choice}</td>
                <td className="py-2 pr-3 text-emerald-400 font-medium">{c.best}</td>
                <td className="py-2">{c.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Step-by-Step Best Ending Walkthrough</h2>

      <h3>Chapter 1: Alter Course</h3>
      <p>
        When the meteor swarm approaches, choose to <strong>alter course</strong>.
        This avoids the worst of the damage and keeps the ship in better
        condition. While holding position gives early Scanner access, the damage
        makes later chapters more dangerous.
      </p>

      <h3>Chapter 2: Investigate the Organism</h3>
      <p>
        When the alien organism is discovered, choose to <strong>investigate
        immediately</strong>. This gives the crew knowledge about the mimic that
        helps avoid infection. Waiting allows the mimic to spread and ambush
        crew members.
      </p>

      <h3>Chapter 3: Side with Eisele</h3>
      <p>
        During the quarantine debate, <strong>side with Eisele</strong> for
        strict quarantine protocols. This creates safe zones that save lives
        in Chapter 5 when the mimics breach the ship. The quarantine doors
        serve as barriers.
      </p>

      <h3>Chapter 4: Force Oracle to Reveal Data</h3>
      <p>
        When dealing with the ship&apos;s AI, <strong>force Oracle to reveal
        hidden data</strong>. This protects Williams and gives the crew critical
        information. Also collect Williams&apos; private files in the
        captain&apos;s quarters.
      </p>

      <h3>Chapter 5: Rescue Trapped Crew</h3>
      <p>
        This is the most critical chapter. When the breach happens, choose to
        <strong> rescue trapped crew</strong> instead of sealing the breach.
        This saves Stafford and others. You must master the stealth sections &mdash;
        use the Scanner to track mimic positions before moving.
      </p>

      <h3>Chapter 6: Preserve the Clone Vats</h3>
      <p>
        In the clone laboratory, <strong>preserve the vats</strong> and find all
        experiment logs. These logs are essential evidence for the &ldquo;Expose
        Corinth&rdquo; ending. Search every room, including side areas accessible
        via the Wedge Tool.
      </p>

      <h3>Chapter 7: Accept the Clone Truth</h3>
      <p>
        When the full truth is revealed, every surviving character must
        <strong> accept the clone truth</strong>. Characters who deny it become
        erratic and reckless in the finale, making them more likely to die.
      </p>

      <h3>Chapter 8: Expose Corinth</h3>
      <p>
        In the finale, do not treat the last decision as a simple good-versus-bad
        button. The transcript frames the ending around rescue, warning,
        Andromeda safety, Earth contamination risk, and whether enough evidence
        survives to explain the truth. Record the exact message and outcome
        before using Turning Points.
      </p>

      <h2>Post-Credits Scene</h2>
      <p>
        After the credits roll, a post-credits scene shows the original Dr.
        Eisele reporting on Earth. She discusses &ldquo;Cycle 13&rdquo; and the
        evidence transmitted by the crew. Depending on your choices, she can
        suggest either <strong>continuing</strong> or <strong>discontinuing</strong> the
        clone crew program. This scene sets up potential future Dark Pictures
        games.
      </p>

      <h2>Best Ending vs. Other Endings</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Ending</th>
              <th className="py-2 pr-3 text-zinc-300 font-semibold">Requirements</th>
              <th className="py-2 text-zinc-300 font-semibold">Outcome</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            {[
              ['Best Ending', 'All survive + expose Corinth', 'Crew escapes, evidence transmitted, Corinth exposed'],
              ['Partial Survival', 'Some crew survive', 'Survivors escape but evidence may not be transmitted'],
              ['Total Sacrifice', 'All die or choose sacrifice', 'Cassiopeia destroyed, mimic contained, no evidence'],
              ['Quiet Escape', 'Survive but don\'t expose', 'Crew escapes quietly, Corinth\'s crimes remain hidden'],
            ].map(([ending, req, outcome], i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="py-2 pr-3 text-white font-medium">{ending}</td>
                <td className="py-2 pr-3">{req}</td>
                <td className="py-2">{outcome}</td>
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
          <a href="/save-everyone/" className="block text-d8020 hover:underline">
            How to Save Everyone &rarr;
          </a>
          <a href="/all-endings/" className="block text-d8020 hover:underline">
            All Endings Explained &rarr;
          </a>
          <a href="/choices-consequences/" className="block text-d8020 hover:underline">
            All Choices &amp; Consequences &rarr;
          </a>
        </div>
      </div>

      <FaqSection items={faqs} />
    </article>
  );
}
