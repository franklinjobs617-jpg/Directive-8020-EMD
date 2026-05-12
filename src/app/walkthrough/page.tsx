import type { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { FaqSection } from "@/components/faq-section";
import { ArticleSchema } from "@/components/article-schema";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Directive 8020 Full Walkthrough - Complete Chapter Guide",
  description:
    "Complete Directive 8020 walkthrough covering all chapters, stealth mechanics, scanner usage, acoustic signature system, tools, and the full story of the Cassiopeia crew.",
  alternates: { canonical: "https://directive8020.top/walkthrough/" },
};

const faqs = [
  {
    question: "How long does it take to beat Directive 8020?",
    answer:
      "A single playthrough takes approximately 6-8 hours. Completing all chapters with different choices, finding all collectibles, and unlocking every ending can take 15-20 hours.",
  },
  {
    question: "Does Directive 8020 have a stealth system?",
    answer:
      "Yes. Directive 8020 introduces a real-time stealth system with acoustic signatures. Crouching reduces your detection chance by 60%, and using the Scanner reveals enemy positions through walls.",
  },
  {
    question: "Can I replay specific chapters?",
    answer:
      "Yes, using the Turning Points feature. You can revisit any key decision point from the story tree without replaying the entire game.",
  },
  {
    question: "What is the Acoustic Signature system?",
    answer:
      "Acoustic Signature is a detection mechanic where your movement noise is tracked in real-time. Running generates maximum noise, walking produces moderate noise, and crouching minimizes your acoustic footprint. Enemies use sound to locate you.",
  },
  {
    question: "Is there co-op in Directive 8020?",
    answer:
      "Yes, Directive 8020 supports both online co-op (2 players) and local couch co-op (Movie Night mode with up to 5 players passing the controller).",
  },
];

export default function WalkthroughPage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 Full Walkthrough"
        description="Complete chapter-by-chapter walkthrough for Directive 8020 with stealth mechanics and tool guides."
        url="https://directive8020.top/walkthrough/"
      />
      <Breadcrumb items={[{ label: "Walkthrough" }]} />
      <PageHero
        src="/steam-ss01.jpg"
        alt="Directive 8020 astronaut in distress during full game walkthrough"
      />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        Directive 8020 Full Walkthrough
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        A complete chapter-by-chapter walkthrough for Directive 8020, covering
        stealth tactics, tool usage, every critical choice, and the full story
        of the starship Cassiopeia.
      </p>

      {/* Video placeholder */}
      <div className="video-placeholder">
        <div className="aspect-video overflow-hidden rounded-md">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/KQee8_ojuso`}
            title={`Directive 8020 Full Walkthrough - Complete Chapter Guide`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
   
      <h2>Before You Begin: Key Mechanics</h2>

      <h3>Stealth &amp; Acoustic Signature</h3>
      <p>
        Unlike previous Dark Pictures entries, Directive 8020 features a{" "}
        <strong>real-time stealth system</strong>. Your movement generates an
        Acoustic Signature that enemies can detect. Understanding this system is
        critical to keeping your crew alive.
      </p>
      <div className="warn-box">
        <p className="text-yellow-400 text-sm font-semibold mb-1">
          Stealth Tip
        </p>
        <p className="text-sm text-zinc-400">
          Crouching reduces your Acoustic Signature by <strong>60%</strong>.
          Always crouch when mimics are nearby. Running is only safe in scripted
          chase sequences.
        </p>
      </div>

      <h3>Your Toolkit</h3>
      <p>
        Throughout the Cassiopeia, you will find and use these critical tools:
      </p>
      <ul>
        <li>
          <strong>Scanner</strong> &mdash; Reveals enemy positions and
          interactive objects through walls. Has a limited battery that
          recharges over time. Essential for planning routes.
        </li>
        <li>
          <strong>Wedge Tool</strong> &mdash; Opens sealed doors and access
          panels. Some doors only open from one side, meaning your choice of
          route matters.
        </li>
        <li>
          <strong>Noisemakers</strong> &mdash; Throw to distract mimics and draw
          them away from your path. Limited supply, use wisely.
        </li>
        <li>
          <strong>Smoke Grenades</strong> &mdash; Create cover for emergency
          escapes when stealth fails. Does not damage mimics but breaks their
          line of sight.
        </li>
      </ul>

      <h3>Turning Points</h3>
      <p>
        Directive 8020 introduces <strong>Turning Points</strong> &mdash; a
        story tree that lets you revisit and replay key decisions without
        starting over. This is essential for seeing different outcomes, but{" "}
        <strong>Turning Points are disabled in Survivor Mode</strong> (required
        for the platinum trophy).
      </p>
      <div className="tip-box">
        <p className="text-emerald-400 text-sm font-semibold mb-1">Pro Tip</p>
        <p className="text-sm text-zinc-400">
          Play on normal difficulty first using Turning Points to explore all
          branches. Then attempt Survivor Mode once you know every optimal
          choice.
        </p>
      </div>

      <h2>Chapter 1: The Meteor</h2>
      <p>
        The story begins aboard the deep-space vessel{" "}
        <strong>Cassiopeia</strong>, where the crew detects an incoming meteor
        swarm. Captain <strong>Carter</strong> must decide whether to alter
        course or maintain trajectory. This seemingly minor decision has ripple
        effects throughout the entire game.
      </p>
      <figure className="my-8">
        <img
          src="/steam-ss02.jpg"
          alt="Directive 8020 Cassiopeia spaceship bridge - meteor approach warning scene"
          className="w-full rounded-lg border border-zinc-800"
        />
        <figcaption className="text-sm text-zinc-500 mt-2 text-center">
          The Cassiopeia bridge as the meteor swarm approaches — your first
          critical decision.
        </figcaption>
      </figure>
      <div className="choice-box">
        <p className="choice-label">
          Key Choice: Alter Course or Hold Position?
        </p>
        <p className="text-sm text-zinc-400">
          <strong>Alter Course:</strong> The ship avoids the worst of the meteor
          impact but drifts into uncharted space where the mimic organism is
          detected.
          <br />
          <strong>Hold Position:</strong> The ship takes heavy damage, leading
          to power failures that force the crew into mimic-infested corridors.
          More dangerous, but certain characters gain early access to the
          Scanner.
        </p>
      </div>

      <h2>Chapter 2: First Contact</h2>
      <p>
        The crew encounters the alien organism for the first time.{" "}
        <strong>Lt. Sims</strong> leads an investigation team into the damaged
        sectors. This chapter introduces the stealth mechanics and the Scanner
        tool.
      </p>
      <p>
        You will find your first <strong>Wedge Tool</strong> in the maintenance
        corridor. Use it to access a supply room containing Noisemakers and a
        crew log from Officer Williams &mdash; the first hint that something is
        deeply wrong with the ship&rsquo;s records.
      </p>
      <figure className="my-8">
        <img
          src="/steam-ss08.jpg"
          alt="Directive 8020 first contact alien organism - Sims investigation team in damaged sector"
          className="w-full rounded-lg border border-zinc-800"
        />
        <figcaption className="text-sm text-zinc-500 mt-2 text-center">
          First Contact — Lt. Sims leads the team into the damaged sectors.
        </figcaption>
      </figure>
      <p>
        After the first mimic attack, <strong>Dr. Eisele</strong> (Lotte
        Verbeek) establishes a quarantine zone in the medical bay. Trust begins
        to fracture as crew members suspect each other of being infected.
      </p>
      <figure className="my-8">
        <img
          src="/steam-ss09.jpg"
          alt="Directive 8020 quarantine zone medical bay - Eisele and Young argument scene"
          className="w-full rounded-lg border border-zinc-800"
        />
        <figcaption className="text-sm text-zinc-500 mt-2 text-center">
          Quarantine — trust fractures as the crew suspects mimic infection.
        </figcaption>
      </figure>
      <div className="choice-box">
        <p className="choice-label">Key Choice: Side with Eisele or Young?</p>
        <p className="text-sm text-zinc-400">
          <strong>Side with Eisele:</strong> Strict quarantine protocols save
          lives but alienate crew members who feel imprisoned.
          <br />
          <strong>Side with Young:</strong> Relaxed quarantine keeps morale up
          but risks mimic infiltration in safe zones.
        </p>
      </div>

      <h2>Chapter 4: The Oracle</h2>
      <p>
        The crew discovers the ship&rsquo;s AI, <strong>Oracle</strong>, has
        been withholding information. Accessing Oracle&rsquo;s hidden files
        reveals fragments of data about previous missions &mdash; but the files
        are corrupted. This is the first breadcrumb leading to the clone
        revelation.
      </p>
      <p>
        <strong>Williams&rsquo; private files</strong> can be found in the
        captain&rsquo;s quarters during this chapter. They reference crew
        members who should not exist on the current manifest &mdash; a critical
        clue.
      </p>

      <h2>Chapter 5: Breach</h2>
      <p>
        The mimics breach the safe zone. This is the most action-intensive
        chapter, requiring mastery of stealth and tools. Multiple characters can
        die here depending on your earlier choices and how well you navigate the
        encounters.
      </p>
      <div className="warn-box">
        <p className="text-yellow-400 text-sm font-semibold mb-1">
          High Danger
        </p>
        <p className="text-sm text-zinc-400">
          If you sided with Eisele in Chapter 3, the quarantine doors can be
          used as barriers. If you sided with Young, you must rely entirely on
          stealth and Noisemakers.
        </p>
      </div>

      <h2>Chapter 6: The Lab</h2>
      <p>
        The crew discovers a hidden laboratory deep in the ship. This is where
        the <strong>clone revelation</strong> begins to unfold. Vats of
        unconscious bodies &mdash; exact copies of the crew &mdash; line the
        walls. The truth becomes unavoidable: these are not the original crew
        members.
      </p>
      <figure className="my-8">
        <img
          src="/steam-ss03.jpg"
          alt="Directive 8020 clone laboratory discovery scene - vats of unconscious bodies"
          className="w-full rounded-lg border border-zinc-800"
        />
        <figcaption className="text-sm text-zinc-500 mt-2 text-center">
          The Clone Lab — the moment everything changes. You are not who you
          think you are.
        </figcaption>
      </figure>
      <p>
        This chapter contains the most important collectible:{" "}
        <strong>the experiment logs</strong> that explain the 13th cycle and the
        true nature of the Corinth mission.
      </p>

      <h2>Chapter 7: Revelation</h2>
      <p>
        The full truth is revealed. The crew are clones with memory backups from
        the original crew, who died cycles ago. This is the{" "}
        <strong>13th iteration</strong>
        of the experiment, designed by Corinth to study how humans respond to
        the mimic organism. Every previous cycle ended in total crew death.
      </p>
      <figure className="my-8">
        <img
          src="/steam-ss11.jpg"
          alt="Directive 8020 Revelation scene - crew discovers they are clones with memory backups"
          className="w-full rounded-lg border border-zinc-800"
        />
        <figcaption className="text-sm text-zinc-500 mt-2 text-center">
          Revelation — the 13th cycle. Everything you believed was a lie.
        </figcaption>
      </figure>
      <div className="choice-box">
        <p className="choice-label">Key Choice: Accept the Truth or Deny It?</p>
        <p className="text-sm text-zinc-400">
          <strong>Accept:</strong> Characters who accept their clone identity
          gain clarity and make more rational decisions in the final chapters.
          <br />
          <strong>Deny:</strong> Characters who refuse to believe it become
          erratic and unpredictable, leading to more dangerous outcomes.
        </p>
      </div>

      <h2>Chapter 8: Directive 8020</h2>
      <p>
        The final chapter. Directive 8020 is the ultimate protocol: destroy the
        Cassiopeia to prevent the mimic organism from reaching Earth. The crew
        must decide whether to sacrifice themselves, find another way, or
        &mdash; in the best possible outcome &mdash; survive and expose Corinth.
      </p>
      <p>
        Your ending depends on: how many crew members are alive, whether they
        accepted the clone truth, and the key decisions made in Chapters 3, 5,
        and 7. See our <a href="/all-endings/">All Endings Guide</a> for the
        full breakdown.
      </p>

      <div className="mt-8 rounded-lg border border-white/5 bg-surface p-5">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Continue Reading
        </h3>
        <div className="space-y-2 text-sm">
          <a href="/all-endings/" className="block text-d8020 hover:underline">
            All Endings Explained &rarr;
          </a>
          <a
            href="/choices-consequences/"
            className="block text-d8020 hover:underline"
          >
            All Choices &amp; Consequences &rarr;
          </a>
          <a
            href="/save-everyone/"
            className="block text-d8020 hover:underline"
          >
            How to Save Everyone &rarr;
          </a>
        </div>
      </div>

      <FaqSection items={faqs} />
    </article>
  );
}
