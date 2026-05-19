import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { FaqSection } from '@/components/faq-section';
import { ArticleSchema } from '@/components/article-schema';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Directive 8020 Crashing, Black Screen & Launch Fixes (PC, PS5, Xbox)',
  description:
    'Fix Directive 8020 crashing, black screen on startup, won\'t launch, low FPS, and other technical issues on PC, PS5, and Xbox Series X|S. Step-by-step solutions.',
  alternates: { canonical: 'https://directive8020.top/crashing-fix' },
};

const faqs = [
  {
    question: 'Why does Directive 8020 keep crashing on PC?',
    answer:
      'The most common causes are outdated GPU drivers, insufficient VRAM, or corrupted game files. Update your drivers, verify game files through Steam/Epic, and ensure you meet the minimum system requirements.',
  },
  {
    question: 'How do I fix the black screen on startup?',
    answer:
      'Try: 1) Add -windowed to launch options, 2) Delete the config file in AppData, 3) Update GPU drivers, 4) Disable fullscreen optimizations in the exe properties.',
  },
  {
    question: 'Is Directive 8020 having server issues on launch day?',
    answer:
      'As a primarily single-player game, server issues only affect online co-op. If you cannot connect to a friend, check the game\'s official social media for server status updates.',
  },
  {
    question: 'How do I verify game files on Steam?',
    answer:
      'Right-click Directive 8020 in your library 鈫?Properties 鈫?Installed Files 鈫?Verify integrity of game files. This checks for and redownloads any corrupted files.',
  },
];

export default function CrashingFixPage() {
  return (
    <article className="prose-d8020">
      <ArticleSchema
        headline="Directive 8020 Crashing, Black Screen & Launch Fixes"
        description="Technical troubleshooting guide for Directive 8020 crashes and performance issues."
        url="https://directive8020.top/crashing-fix"
      />
      <Breadcrumb items={[{ label: 'Crashing Fix' }]} />
      <PageHero src="/steam-ss05.webp" alt="Directive 8020 astronaut thrown by explosion - crashing and bug fixes troubleshooting" />

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
        Crashing, Black Screen &amp; Launch Fixes
      </h1>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        Directive 8020 just launched and you&rsquo;re hitting technical issues?
        Here are the confirmed fixes for crashing, black screens, low FPS, and
        other launch day problems on PC, PS5, and Xbox.
      </p>

      <div className="tip-box mb-8">
        <p className="text-emerald-400 text-sm font-semibold mb-1">
          First Thing to Try
        </p>
        <p className="text-sm text-zinc-400">
          Before anything else: <strong>update your GPU drivers</strong> and{' '}
          <strong>verify game files</strong>. These two steps fix 80% of launch
          day issues.
        </p>
      </div>

      <h2>PC Fixes</h2>

      <h3>1. Game Crashes on Startup or During Play</h3>
      <ol>
        <li>
          <strong>Update GPU drivers</strong> &mdash; Download the latest
          Game Ready drivers from NVIDIA or AMD. Directive 8020 uses Unreal
          Engine 5 and needs recent driver support.
        </li>
        <li>
          <strong>Verify game files</strong> &mdash; Steam: Right-click game 鈫?          Properties 鈫?Installed Files 鈫?Verify integrity. Epic: Click the
          three dots 鈫?Verify.
        </li>
        <li>
          <strong>Run as Administrator</strong> &mdash; Right-click the exe 鈫?          Properties 鈫?Compatibility 鈫?Run as administrator.
        </li>
        <li>
          <strong>Disable overlays</strong> &mdash; Turn off Steam Overlay,
          Discord Overlay, NVIDIA GeForce Experience overlay, and any other
          overlays. These commonly conflict with UE5 games.
        </li>
        <li>
          <strong>Check VRAM</strong> &mdash; If you have less than 4GB VRAM,
          lower texture quality to Medium or Low. Insufficient VRAM causes
          crashes during scene transitions.
        </li>
        <li>
          <strong>Disable XMP/EXPO</strong> &mdash; If crashes are random and
          not reproducible, try running RAM at default speeds. Overclocked RAM
          can cause instability in UE5 titles.
        </li>
      </ol>

      <h3>2. Black Screen on Launch</h3>
      <ol>
        <li>
          <strong>Add launch option:</strong> Right-click game 鈫?Properties 鈫?          Launch Options 鈫?add <code className="text-d8020 bg-d8020/10 px-1.5 py-0.5 rounded text-xs">-windowed</code>
        </li>
        <li>
          <strong>Delete config file:</strong> Navigate to{' '}
          <code className="text-d8020 bg-d8020/10 px-1.5 py-0.5 rounded text-xs">
            %LOCALAPPDATA%/Directive8020/Saved/Config/
          </code>{' '}
          and delete the contents. The game will regenerate default settings.
        </li>
        <li>
          <strong>Disable fullscreen optimization:</strong> Find the game exe 鈫?          Right-click 鈫?Properties 鈫?Compatibility 鈫?Check &ldquo;Disable
          fullscreen optimization&rdquo;
        </li>
        <li>
          <strong>Alt+Enter:</strong> When the black screen appears, press
          Alt+Enter to force windowed mode, then set your resolution in-game.
        </li>
      </ol>

      <h3>3. Low FPS / Stuttering</h3>
      <ol>
        <li>
          <strong>Install on SSD</strong> &mdash; HDD causes severe stuttering
          during scene transitions and texture streaming.
        </li>
        <li>
          <strong>Enable DLSS/FSR</strong> &mdash; Upscaling gives 30-50% FPS
          boost with minimal quality loss. Use Quality mode for best balance.
        </li>
        <li>
          <strong>Lower shadow quality</strong> &mdash; Shadows have the largest
          performance impact. Setting to Medium rarely affects the cinematic
          experience.
        </li>
        <li>
          <strong>Limit background processes</strong> &mdash; Close Chrome,
          Discord, and other heavy apps. The game needs 12GB+ RAM at high
          settings.
        </li>
        <li>
          <strong>Cap framerate</strong> &mdash; Use NVIDIA Control Panel or
          RTSS to cap at 60fps. Uncapped framerates can cause frame pacing
          issues in UE5.
        </li>
      </ol>

      <h2>PS5 Fixes</h2>
      <ol>
        <li>
          <strong>Rebuild database</strong> &mdash; Turn off PS5 鈫?hold power
          button until second beep 鈫?Rebuild Database. Fixes most loading and
          crash issues.
        </li>
        <li>
          <strong>Clear cache</strong> &mdash; Turn off PS5 鈫?unplug for 2
          minutes 鈫?plug back in. Clears temporary data that may cause crashes.
        </li>
        <li>
          <strong>Update system software</strong> &mdash; Settings 鈫?System
          Software 鈫?Update. Game requires a recent PS5 firmware version.
        </li>
        <li>
          <strong>Switch performance mode</strong> &mdash; If you experience
          frame drops, switch from Quality to Performance mode in PS5 settings.
        </li>
      </ol>

      <h2>Xbox Fixes</h2>
      <ol>
        <li>
          <strong>Hard reset</strong> &mdash; Hold the power button for 10
          seconds until fully off. Wait 30 seconds, then restart.
        </li>
        <li>
          <strong>Clear local save data</strong> &mdash; My Games &amp; Apps 鈫?          Manage 鈫?Directive 8020 鈫?Saved Data 鈫?Delete Local (cloud saves
          remain).
        </li>
        <li>
          <strong>Reinstall if persistent</strong> &mdash; Uninstall and
          redownload. Corrupted installation files are a common cause of Xbox
          crashes on launch day.
        </li>
      </ol>

      <div className="mt-8 rounded-lg border border-white/5 bg-surface p-5">
        <h3 className="font-serif text-lg font-semibold text-white mb-3">
          Still Having Issues?
        </h3>
        <p className="text-sm text-zinc-400">
          Check the official{' '}
          <a
            href="https://store.steampowered.com/news/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-d8020 hover:underline"
          >
            Steam news page
          </a>{' '}
          for hotfix updates. The developers are actively patching launch day
          issues. Also see our{' '}
          <a href="/system-requirements" className="text-d8020 hover:underline">
            System Requirements
          </a>{' '}
          page to confirm your hardware meets the minimum specs.
        </p>
      </div>

      <FaqSection items={faqs} />
    </article>
  );
}

