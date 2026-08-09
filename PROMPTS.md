# PROMPTS.md — ABTalks Redesign Build Log

All prompts below were given to OpenCode (running Gemini) to build the ABTalks 60-Day Challenge redesign. Architecture, UX decisions, data modeling, and prompt-writing were done with Claude; OpenCode/Gemini handled code generation from these prompts. Listed in the order they were actually used.

Stack: React + Vite + Tailwind CSS v3 (pinned, not v4) + mocked JSON data, deployed to Vercel.

---

## Phase 0 — Scaffold + Design Tokens

```
Scaffold a Vite + React project called abtalks-redesign. Install tailwindcss@3 (not v4)
with postcss and autoprefixer, and run `npx tailwindcss init -p` to generate a standard
tailwind.config.js + postcss.config.js. Set up a dark-first design token system in
tailwind.config.js's theme.extend.colors: background near-black (#0B0D12), card surface
slightly lighter (#151821), accent color for streaks (amber/orange), success green, muted
gray text. Add Inter or Manrope via Google Fonts link in index.html. Set the viewport meta
tag for mobile. Create src/data/ and add the three JSON files: student-day1.json,
student-active.json, student-empty.json [schema + content provided]. Don't build any
screens yet — just scaffold, tokens, and data.
```

*Note: these initial tokens/fonts were fully replaced in the Phase "polish" pass below — see the token overhaul prompt.*

---

## Phase 1 — Landing Page (`/`)

```
Build the / landing page for abtalks-redesign in src/pages/Landing.jsx, using the existing
Tailwind v3 dark tokens (background, card, accent amber, success green) from
tailwind.config.js. Mobile-first at exactly 390px width — no desktop media queries yet.
Use Inter/Manrope already loaded. Break into components under src/components/landing/.

1. Nav (Nav.jsx) — Sticky top, bg-background/90 backdrop-blur, h-16, px-5. Left: text logo
"AB TALKS". Right: "Sign in" text button, muted gray, no border.

2. Hero (Hero.jsx) — pt-16 pb-10 px-5, center-aligned. Eyebrow: "Build in public. Prove it
daily." Headline, 3 stacked lines, last line amber: "Code every day. / Post the proof. /
Get discovered." Subtext: "A 60-day coding challenge for Indian college students. Pick a
track, ship something daily, and build a public streak recruiters can actually see."
Primary CTA full-width amber "Start Day 1 →" → /dashboard. Small muted line below: "No
signup friction for this demo — jump straight in."

3. Trust stats strip (StatsStrip.jsx) — bg-card rounded-2xl mx-5 my-6 py-6, 3-column grid:
"10,000+ members", "60 days per cohort", "100+ hiring partners".

4. Pick Your Track (TrackPicker.jsx) — Horizontal scroll-snap row, 5 track cards (icon +
title + one-liner): Full-Stack Web Development, DSA & Competitive Programming, Data Science
& ML, Mobile App Development, DevOps & Cloud. Each with a "Select track" ghost button
(visual only for this demo).

5. How It Works (HowItWorks.jsx) — 3 stacked numbered cards: "Commit to a track", "Build
daily proof", "Get visible".

6. Streak Freeze callout (StreakFreezeCallout.jsx) — Distinct green-accented card (not
amber). Title: "Life happens. Your streak doesn't have to break." Body: "Every student gets
2 Streak Freeze tokens per challenge. Miss a day, use a freeze, keep your streak alive — no
excuses needed, no penalty." Tag: "2 free freezes included".

7. Testimonials (Testimonials.jsx) — Horizontal scroll-snap cards, 3 original fictional
testimonials about the daily habit/streak (not reused from any existing source), placeholder
initial-avatars.

8. Final CTA band (FinalCta.jsx) — Gradient card. "Your streak starts whenever you're
ready." / "Late night, early morning — the challenge doesn't care when, just that you show
up." CTA → /dashboard.

9. Footer (Footer.jsx) — Wordmark, copyright, row of social icon placeholders.

Rules: lucide-react for all icons, no images/photos, consistent px-5/py-8–10 rhythm, no
autoplay carousels (native scroll-snap only), visible active:/focus: states, no real auth
wiring on Sign in.
```

### Phase 1.5 — Desktop Responsiveness Pass

```
Add desktop responsiveness to the existing Landing page using Tailwind's mobile-first
breakpoints. Do not change or remove any existing unprefixed (mobile) classes — only add
md:/lg: variants. The 390px layout must render pixel-identical to before this pass.

1. Global container: max-w-6xl mx-auto at md:, keep px-5 on mobile, md:px-8 lg:px-0.
2. Nav: md:px-8, layout unchanged.
3. Hero: md:text-5xl lg:text-6xl headline, md:text-lg subtext, md:max-w-3xl md:mx-auto.
CTA stops being full-width at md: (md:w-auto md:px-12 md:mx-auto md:block).
4. Stats strip: keep 3-col grid, md:py-10 md:text-4xl.
5. Track picker: scroll-snap on mobile unchanged; md:grid md:grid-cols-3 lg:grid-cols-5,
remove snap behavior above md:.
6. How It Works: flex-col → md:grid md:grid-cols-3 md:gap-4.
7. Streak Freeze callout: md:flex md:items-center md:gap-6 (icon beside text at md:).
8. Testimonials: same scroll-snap→grid pattern as track picker, md:grid-cols-2
lg:grid-cols-4.
9. Final CTA band: md:py-12 md:px-12, md:max-w-xl md:mx-auto.
10. Footer: stacked → md:flex md:items-center md:justify-between.

Verify: 390px unchanged from before, 1024px+ no overflow, no unintended horizontal scroll.
```

---

## Phase 2 — Student Dashboard (`/dashboard`)

*(Corrected version, after extracting real reference structure from ABTalks screenshots — supersedes an earlier draft written from assumptions alone.)*

```
Build /dashboard in src/pages/Dashboard.jsx using src/data/student-active.json. Mobile-first
at 390px, same dark tokens/rhythm as Landing. Components in src/components/dashboard/,
icons from lucide-react.

1. Header (DashboardHeader.jsx) — Two-row compact header. Row 1: "AB TALKS" wordmark (link
to /) + circular avatar (initials fallback, generic icon if name also empty). Row 2:
track name (or "No track selected yet" muted-warning state) + streak mini pill (flame icon
+ currentStreak number).

2. 60-Day Journey card (JourneyGrid.jsx) — Heading "Your 60-Day Journey", subtitle
"{totalDaysCompleted} days complete · Day {currentDay} of {challengeLength}". Contribution
grid: grid-cols-10, one cell per day (60 total), color-coded: completed=green,
frozen=cyan+snowflake, missed=red, pending(today)=amber+ring, locked=faint/opacity-30.
Tappable cells (except locked) → /day/{n}. Legend: Completed / Frozen / Missed / Upcoming
(4 states only — no "Rejected", we have no moderation system).

3. Today's Task card (TodayTaskCard.jsx) — Difficulty badge (color-coded Easy/Medium/Hard)
+ "~{estimatedMinutes} min". Day number + task title. CTA "Start Today's Challenge →" →
/day/{currentDay}. Missed-day variant: warning-tinted, "You missed Day {n}. Use a freeze or
catch up."

4. Stat row (StatRow.jsx) — 2×2 grid (not 4-across, doesn't fit 390px): Day X of {length}
w/ progress bar; Current Streak w/ Longest; Days Completed; Freeze Tokens Left w/ used count.

5. Recent Activity (RecentActivity.jsx) — Last 7 days list, status icon + "Day {n}" + "View
→" link. Empty state (Day 1 profile only): "No submissions yet. Complete Day 1 to get
started."

6. Achievements (StandingSection.jsx) — Mocked "Top 20% this week" line (hardcoded,
presentation-only) + badge chips from student.badges. Empty fallback: "Complete your first
day to start earning badges."

7. Footer — reuse Landing's Footer.jsx as-is.

Rules: no bottom tab bar (not in reference, added later in its own phase). All numbers from
JSON except the mocked standing line. Must not crash on student.track === null or
student.name === "".
```

---

## Phase 3 — Challenge Day (`/day/:dayNumber`)

*(Built after extracting real reference structure — confirmed: GitHub/LinkedIn proof is optional with a confirm-checkbox as the real submission action, plus a "synergy points" bonus system, matching the live site rather than the problem statement's literal wording.)*

```
Build /day/:dayNumber in src/pages/ChallengeDay.jsx using src/data/student-active.json,
targeting day 12 by default. Mobile-first at 390px. Components in src/components/day/.

1. Context bar (DayContextBar.jsx) — "← Dashboard" link + "Today (IST): Day
{student.currentDay}" (always shows actual current day, regardless of which day URL is
open).

2. Task detail card (TaskDetailCard.jsx) — Difficulty + time badge, title, "Day {n} · {track
short label}". If task.detail exists, render rich sections in order: welcome line → Context
→ What to do (bullets) → Task (numbered steps) → Example Output (monospace block) →
Submission note. Fallback (most days): task.description + task.requirements as "What you'll
build" bullets.

3. Submission card (SubmissionForm.jsx) — branches on day status:
   Case A (completed/confirmed) — read-only success: checkmark, "You completed Day {n}",
   timestamp, optional GitHub/LinkedIn link rows (omit if null), "+{synergyEarned} synergy"
   pill.
   Case B (frozen) — read-only, snowflake-tinted: "Day {n} was covered by a Streak Freeze."
   / "No submission needed — your streak stayed intact." / "Freezes protect your streak but
   don't earn synergy."
   Case C (missed) — normal submission form AND a freeze option shown together (not
   either/or toggle): "Missed this one?" + "Use a Streak Freeze Token ({n} left)" button,
   disabled + relabeled "No freeze tokens left" at 0.
   Case D (pending/today, default case) — "Submit your solution" / "Confirm you completed
   today's task. GitHub and LinkedIn are optional — they earn bonus synergy." Checkbox: "I
   confirm I have completed today's task." Optional GitHub URL field (+5 synergy caption),
   optional LinkedIn URL field (+8 synergy caption). Submit button disabled until checkbox
   checked; on click, transitions to Case A view in local state.

4. Locked day guard — if requested day > student.currentDay: lock icon, "Day {n} hasn't
unlocked yet", "Come back on Day {n} to see this challenge.", button back to /dashboard.

Rules: reuse Dashboard's header + Footer, don't rebuild. All copy from real JSON fields
where available. Confirm-checkbox → submit button must be functionally interactive, not
decorative.
```

---

## Phase 4 — Shared Profile Context + Edge-Case Sweep

```
Part A — Shared data context: Create src/context/ProfileContext.jsx. Import all three JSON
files. ProfileProvider holds activeProfileKey state (default "active"), exposes current
student/days + setActiveProfileKey via a useProfile() hook. Wrap the app in this provider.
Update Dashboard.jsx and ChallengeDay.jsx to pull from context instead of a hardcoded
import. Landing.jsx untouched — no personalized data.

Part B — Dev profile switcher: src/components/dev/ProfileSwitcher.jsx — floating pill,
three buttons (Day 1 / Active / Empty), highlights active selection, calls
setActiveProfileKey. Gated behind import.meta.env.DEV.
[Note: this DEV gate was later removed — see "Keep profile switcher visible in
production" below.]

Part C — Bug sweep across specific known risk points:
- Dashboard × Day 1: muted 0-streak state, journey grid mostly-locked doesn't look broken,
  achievements/recent-activity empty states correct, stat row handles all-zeros cleanly.
- Dashboard × Empty: "No track selected yet" (not null/blank), avatar falls back to generic
  icon (not blank initials), missed-day rows in Recent Activity must NOT trigger the
  Day-1-only "no submissions yet" empty state.
- ChallengeDay × Day 1: /day/1 → Case D; /day/12 → locked guard (real stress-test of the
  guard, not just "one day ahead").
- ChallengeDay × Empty: /day/1–3 → Case C (missed+freeze); header must not crash on
  track:null/name:"". /day/4+ → locked guard.
- ChallengeDay × Active: regression check only, same 5 cases as Phase 3.
- Landing: confirm untouched by the context refactor.

Fix issues directly in components — don't special-case around them in JSON data.
```

---

## Polish Round — Navbar Back-Link + Footer Social Icons

```
Fix 1 — Dashboard has no way back to Landing: make the "AB TALKS" wordmark in
DashboardHeader.jsx a Link back to /, with a hover/active state. This fix should propagate
to ChallengeDay.jsx for free since it reuses the same header component.

Fix 2 — Footer social icons wrong: use lucide-react's Instagram/Linkedin/Youtube directly.
lucide-react has no correct X or Discord mark — install react-icons and use
FaXTwitter/FaDiscord from react-icons/fa6 instead of substituting a generic icon. Render as
a flex row, 20px icons, muted→white on hover/active, href="#" placeholders for now. Verify
exactly 5 icons render correctly on /, /dashboard, /day/12 (shared component).
```

## Bottom Navigation (Home / Jobs / Rewards / Explore / Profile)

```
Part A — App shell: src/components/shell/BottomNav.jsx — 5 items (Home, Jobs, Rewards,
Explore, Profile), lucide icons + tiny labels. Rewards gets a raised amber pill treatment
(-mt-3, bg-accent/20 border). Active route highlighted amber, inactive muted.
src/components/shell/AppShell.jsx wraps Dashboard/ChallengeDay/Jobs/Rewards/Explore/Profile
in DashboardHeader + content + BottomNav (pb-20 on content). Landing NOT wrapped — keeps
its own standalone Nav/Footer.

Part B — Jobs (src/pages/Jobs.jsx) — 3 mock job cards (generic, non-real company names),
type badge, company/location, posted date.

Part C — Explore (src/pages/Explore.jsx) — "Your track" card (real data from context,
handles null-track case) + "Switch tracks" vertical stack reusing Landing's 5 track cards
(non-functional selection, same as Landing).

Part D — Rewards (src/pages/Rewards.jsx) — Hero with real synergyPoints total. "Ways to
earn" — 3 chips only (Complete task +10, GitHub +5, LinkedIn +8 — must match ChallengeDay's
actual values, no referral chip since we don't track referrals). Reward catalog grid (4-6
hardcoded mock merch items), Redeem button enabled/disabled + "Need {n} more SP" based on
real synergyPoints.

Part E — Profile (src/pages/Profile.jsx) — Simple recap: avatar, name/track fallbacks,
streak/completed/synergy stat lines. No settings/toggles — no backing data for those.

Rules: all 4 new pages read from ProfileContext, reflect whichever mock profile is active,
same bg-card/rounded-2xl/px-5 rhythm as the rest of the app, handle empty-profile edge case
without crashing.
```

---

## Visual Identity Overhaul (Token, Font, Layout, Glass Pass)

*(Full rework after flagging the original build as reading generically "AI-generated" — near-black + single accent + Inter/Manrope + rounded-2xl-everywhere is a recognizable default pattern. Replaced with an identity grounded in the product's actual subject matter: git commits + late-night coding culture.)*

```
1. Token overhaul (tailwind.config.js): replace color tokens with ink #0B0E14 (background),
surface #141922 (card), ember #F5A65B (primary accent, replaces old amber), frost #6EE7F0
(freeze/cyan accent), signal #B79CFF (rare tertiary, glass highlights only), parchment
#EDEAE3 (body text, replaces pure white). Find-and-replace across every component — no two
token systems coexisting.

2. Fonts: replace Inter/Manrope with Space Mono (400/700) + Hanken Grotesk (400/500/600/
700). Sans = Hanken Grotesk (default everywhere). Mono = Space Mono, applied ONLY to
numbers/data: nav wordmark, all streak/day/synergy/percentage numbers across Dashboard,
Streak Hero, Journey card, ChallengeDay, Rewards. Body copy stays on sans.

3. Commit-grid background texture (src/components/effects/GridTexture.jsx): pure-CSS
repeating-radial-gradient dot pattern, low opacity (~0.06), behind Landing hero and
Dashboard's Journey Grid header only. Pointer-events-none.

4. Card style pass: rounded-2xl → rounded-xl border border-white/5 globally, plus
border-t border-white/[0.08] for a subtle raised-panel light catch. Applied across every
page uniformly.

5. Liquid glass — exactly two surfaces: .glass-panel utility (backdrop-blur-xl
bg-surface/60 border border-white/10 + inset highlight shadow). Applied ONLY to
BottomNav.jsx and StreakHero.jsx. Rewards' raised pill nav item stays solid ember, not
glass — it's the one deliberately-colored item against an otherwise glass/monochrome bar.

6. Full-app pass: sweep all pages for lingering old token names/fonts/rounded-2xl. Confirm
parchment-on-ink/surface contrast still readable at 390px.

Rule: no glass beyond the two named surfaces, no grid texture beyond the two named
locations, no third accent color introduced "just because."
```

### Footer Regression Fix (post-overhaul)

```
Footer's 5 social icons went missing after the token/font overhaul — likely old
bg-card/text-white classes broke silently against the new tokens rather than erroring.
Fix Footer.jsx once: restore all 5 icon imports if missing, replace any leftover old token
classes with surface/parchment equivalents, confirm hover states work against the new ink
background. This is a SHARED component — fixing it once must be verified across ALL 7
routes that import it (/, /dashboard, /day/:n, /jobs, /rewards, /explore, /profile), not
patched separately per page. While in there, scan for any other component that may have
silently broken the same way during the token sweep.
```

### Real Social Links

```
Replace Footer's placeholder href="#" with the real ABTalks handles (sourced directly from
abtalks.in, not guessed):
- Instagram → https://www.instagram.com/abtalksonai/
- LinkedIn → https://www.linkedin.com/company/abtalks-on-ai/
- YouTube → https://www.youtube.com/@ABTalksOnAI
- X → https://x.com/abtalksonai
- Discord → https://discord.gg/j4Q8tvDj6
Add target="_blank" rel="noopener noreferrer" to all 5 (now real outbound links). Verify
across all 7 shared-Footer routes.
```

---

## GlitchText Integration (Landing Hero, "GET DISCOVERED")

*(Adapted from the React Bits GlitchText component — recolored to fit our token system rather than used with library defaults, to avoid introducing off-brand red/cyan.)*

```
Integrate GlitchText into src/components/effects/GlitchText.jsx + GlitchText.css, using the
provided source as a base but NOT the default CSS verbatim:
- Replace hardcoded background-color: #120F17 with our ink token (#0B0E14) — must match
  the actual page background exactly, or the clip-path masking shows a visible mismatched
  box on hover.
- Replace default red/cyan shadow colors with ember (#F5A65B) and frost (#6EE7F0) — stay
  inside our existing palette instead of introducing two new colors.
- Remove the fixed font-size clamp from the component's own CSS — let it inherit size from
  the parent Hero headline instead of forcing its own huge standalone sizing.
- font-family: inherit, so it stays on Space Mono/Hanken Grotesk instead of falling back to
  a default sans.

Wire into Hero.jsx: replace the existing "Get noticed." headline line with
<GlitchText enableOnHover={true} speed={1.2} enableShadows={true} className="text-ember">
GET DISCOVERED.</GlitchText> — uppercase copy change, hover-only (never glitch on load/
continuously — would compete with the CTA for attention). This is the one additional
flourish layered onto the identity overhaul (glass on BottomNav + StreakHero, grid texture
on hero) — not added anywhere else in the app.

Mobile check: enableOnHover relies on :hover, which won't fire on touch — expected and
fine, but verify the static (non-hovered) render doesn't overflow or overlap in the 3-line
headline stack at 390px, since that's the only state phone/screenshot viewports will ever
see.
```

---

## Phase 5 — QA + Deploy Prep

```
Part A — 390px visual QA sweep across every route: /, /dashboard, /day/12 (graded route —
checked most carefully: full rich detail renders, not fallback; checkbox/submit
interaction still works after all styling passes), /jobs, /rewards, /explore, /profile.
Confirm Rewards' bottom-nav pill stays solid ember (not accidentally caught by the glass
pass). Confirm all four shell pages handle the empty-profile edge case without crashing.
Confirm ProfileSwitcher is NOT visible in a production build (npm run build && npm run
preview) — verify explicitly, don't trust the DEV gate blindly.
[Note: this specific requirement was later reversed — see "Keep profile switcher visible
in production" below.]

Part B — Accessibility/motion floor: prefers-reduced-motion override for GlitchText hover
animation and other transitions. Visible focus: states on every interactive element (not
just hover/active). Spot-check parchment-on-ink/surface contrast, especially muted/
secondary text.

Part C — Build & routing for deploy: npm run build clean with no unresolved warnings. Add
vercel.json rewrite rule (all paths → index.html) so /day/12 doesn't 404 on direct visit —
this is a client-side-routed SPA with dynamic routes. Confirm /day/12 works via a DIRECT
URL visit, not just in-app navigation.

Part D — Deploy to Vercel, verify all three graded routes on the live deployed URL (not
localhost): /, /dashboard, /day/12.
```

---

## Post-Deploy Fixes

### Keep Profile Switcher Visible in Production

```
Remove the import.meta.env.DEV conditional from ProfileSwitcher.jsx entirely — it should
render in both dev and production now, since it demonstrates the edge-case handling
(first day/no streak, missed day, empty profile) the problem statement explicitly asks to
be judged on, and doesn't affect the three fixed screenshot routes either way. Rename away
from "dev" naming (now shipping to production). Add a small "Demo profiles" label. Keep/
apply .glass-panel styling so it reads as intentional, not a debug leftover.
```

### Fix Header/Switcher Layout Collision at 390px

```
Fix 1 — Remove "Sign in" from Landing's Nav.jsx entirely (no auth in scope, shouldn't be a
dead UI element).

Fix 2 — ProfileSwitcher was mounted globally (showing on Landing, which has no profile
data) — move it so it only renders inside AppShell.jsx, not at the app root.

Fix 3 — Stop using fixed positioning for the switcher pill (was colliding with the logo at
390px). Restructure as a full-width row in normal document flow, directly below the header,
inside AppShell. Compact for mobile: shorten label to "Demo:", shrink buttons (text-xs
px-2.5 py-1) so the row fits one line without wrapping at 390px.

Verify: logo fully clear on /dashboard, /day/12, and a shell page; switcher sits cleanly
underneath with no overlap; Landing shows neither the switcher nor Sign in.
```
In AppShell.jsx, the content wrapper around <Outlet />/children needs bottom padding large enough to clear the fixed BottomNav (which is h-16, roughly 64px, plus safe-area on some devices). Check the current padding value — it's either missing entirely or too small (e.g. pb-4 instead of pb-20+).

Fix: set the content wrapper to pb-24 (or higher if BottomNav has grown taller since the original spec, e.g. due to the "Demo:" profile-switcher row now also sitting in that fixed area — check whether BottomNav height changed and size the padding to match, don't just hardcode the original value blindly).

Specifically re-check Footer.jsx itself too, since this is a shared component sitting inside AppShell on 6 different pages (/dashboard, /day/:n, /jobs, /rewards, /explore, /profile) \u2014 confirm the wordmark, copyright line, and full 5-icon social row all render with clear spacing above the nav bar, not squeezed against it, on every one of those routes. Landing (/) isn't affected since it isn't wrapped in AppShell and has no fixed bottom nav to clear.

After the fix, verify at 390px specifically on /profile or /rewards (whichever has the shortest content \u2014 the overlap is worst on pages where Footer ends up closest to the viewport bottom on load)
---

## Data Model Notes (for reference, not prompts — authored directly, not via OpenCode)

Three mock student profiles (`student-day1.json`, `student-active.json`,
`student-empty.json`) built to a shared schema covering: student meta (name, avatar, track,
streaks, freeze tokens, synergy points, badges), and a 60-entry `days[]` array per profile
(status: completed/frozen/missed/pending/locked; task with difficulty/time/requirements,
and a richer `detail` block authored for each profile's "current" day only). `synergyPoints`
and per-day `synergyEarned` were added after aligning the submission model to the real
site's optional-proof + confirm-checkbox mechanic rather than treating GitHub/LinkedIn as
mandatory. `student-active.json`'s `currentDay: 12` is deliberate — it's why `/day/12` was
chosen as the graded route in the first place; this value was preserved through later edits
rather than allowed to drift.
