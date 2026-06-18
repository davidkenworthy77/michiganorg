export type SlideTheme = 'dark' | 'light'

export interface SlideMeta {
  id: string          // route param: '01', '02', ...
  slug: string        // file name
  label: string       // small all-caps section marker
  title: string       // for nav / overview
  theme: SlideTheme
  /** Verbatim talk track — presenter speaker notes (toggle with "N"). */
  notes?: string
}

// Master registry. Order = navigation order.
// Michigan.org RFP finalist pitch — JEC virtual presentation.
// ~13 content slides + cover, ending on the live-demo button.
export const SLIDES: SlideMeta[] = [
  // ----- COVER -----
  {
    id: '01', slug: 'cover', label: 'MICHIGAN.ORG',
    title: 'Michigan.org — The next chapter', theme: 'dark',
    notes: `Casey opens. Every camera on. Warm, confident, unhurried. "Thanks for having us. We're the team that's protected Pure Michigan for four years, and today we want to show you where we'd take it next." Then into the team intro.`,
  },

  // ----- SECTION 1 — TEAM -----
  {
    id: '02', slug: 'we-know-michigan', label: 'THE TEAM', title: 'We know Michigan', theme: 'light',
    notes: `"In 2021 we were proud to be named Pure Michigan's agency of record, and today we lead media, creative and brand. We also lead two other Michigan DMOs, Visit Detroit and Destination Ann Arbor, and we've got an office full of talented people right here in the state, twenty of us on this account today. This team already gets who you are. Now we're ready to take that into the digital space."`,
  },
  {
    id: '03', slug: 'team-makeup', label: 'THE TEAM', title: 'The people doing the work', theme: 'dark',
    notes: `(People wave as Casey names what they do.) "The people you see on your screen today are the ones who'll do the work. Leaders in the digital space who are out there right now as a voice for where this industry is heading. (Dave waves.) Content specialists who'll define what actually wins on a web filling up with slop. The technical minds who make sure Michigan shows up where the answers get formed. (Sean waves.) Global leadership betting our future on this space and in love with this industry. (Katie waves.) Creative leadership that keeps every pixel unmistakably Pure Michigan. (Rick waves.) And the partnership muscle that's in it for the long game. (Justin waves.)"`,
  },
  {
    id: '04', slug: 'team-values', label: 'THE TEAM', title: 'A team of people who', theme: 'dark',
    notes: `"And every one of them shares three things. They care. They push the bleeding edge. And they want to be better every single day. For Michigan that means no ramp, no brand drift, and far less risk, because nobody on this call is learning you on your clock. The team that's protected Pure Michigan for four years, ready to build what's next." Handoff: "Here's how we see that chapter." → Dave.`,
  },

  // ----- SECTION 2 — THE FUTURE OF AI -----
  {
    id: '05', slug: 'discovery-changed', label: 'THE SHIFT', title: 'Discovery has changed', theme: 'dark',
    notes: `"The way people find a trip has changed. They're not starting on a homepage anymore, they're starting in ChatGPT, Gemini, Perplexity, in the AI answer sitting at the top of Google. And the information they pull lives everywhere now: social, LLMs, agents acting on their behalf, PR. They arrive expecting a conversation and an experience built for them. The old model, one site with one set of pages for everyone, just doesn't meet them where they are."`,
  },
  {
    id: '06', slug: 'trust-gap', label: 'THE SHIFT', title: 'It comes down to trust', theme: 'dark',
    notes: `"Stack all of that up and it comes down to one word: trust. Travelers don't fully trust DMOs to give them the experience they now expect. And here's the harder part. The machines don't trust us either. When an AI answers a question about Michigan, it's often not pulling from the DMO, it's pulling from everyone else. So we've got a trust gap on two fronts at the same time: the people, and the systems now answering on our behalf."`,
  },
  {
    id: '07', slug: 'bots-outnumber', label: 'THE SHIFT', title: 'Bots now outnumber humans', theme: 'dark',
    notes: `"This is the stat that stops the room. Last year, for the second year running, more than half of all web traffic was automated, not human. And AI agent traffic grew almost 8,000% in twelve months, I wish my stock portfolio grew like that. Most people hear this and brace for impact. We don't. The systems reading destination content are now an audience in their own right, and every one of those surfaces is a new place Michigan can show up and tell its story. This is the biggest set of new front doors the destination has ever had."`,
  },
  {
    id: '08', slug: 'why-optimistic', label: 'THE OPPORTUNITY', title: "Why we're optimistic", theme: 'light',
    notes: `"So why are we optimistic? It starts with one idea: destination knowledge sits at the center of all of this. Own that, and everything else follows. We focus on brand perception, not just rankings, how Michigan is understood everywhere people and machines form their opinions. The first movers in this space are already pulling ahead, and the window to be one is open right now. And this isn't theory for us, we've done the work and moved the needle on discoverability for destinations already. That's what we want to bring to Michigan." Handoff: "And the way you do that is to stop thinking about a website, and start thinking about destination intelligence."`,
  },

  // ----- SECTION 3 — DESTINATION INTELLIGENCE -----
  {
    id: '09', slug: 'website-is-intelligence', label: 'DESTINATION INTELLIGENCE', title: 'The website is the intelligence', theme: 'light',
    notes: `"Here's the shift. Stop picturing michigan.org as a website, a stack of pages people visit. Picture it as the destination's intelligence. One living, structured source of truth about Michigan. The site is the engine, and everything else feeds from it: the LLMs, the agents, social, email, PR, the paid media. Build it once and build it right, and Michigan shows up accurate and on-brand everywhere a traveler or a machine is asking. The website stops being a destination you visit and becomes the brain behind all of it."`,
  },
  {
    id: '10', slug: 'three-words', label: 'HOW WE WIN', title: 'Trust. Taste. Ownability.', theme: 'dark',
    notes: `"So how does a destination actually win in this world? Three words.
Trust. You become the source the answers are built from, so when anyone, a person or an AI, asks about Michigan, it traces back to you.
Taste. Anyone can be accurate. Only Michigan can sound like Michigan, and that point of view is the one thing AI can't fake.
Ownability. You claim the questions that are yours to win, the fall color drive, the Great Lakes summer, and you own them.
Trust gets you cited. Taste gets you chosen. Ownability keeps you the answer. If you take three words out of today, take those." Handoff: "Before any of that, you asked us three direct questions. Let me hand to Sean." → Sean.`,
  },

  // ----- SECTION 4 — TRAFFIC, SECURITY, CONSENT, ADA -----
  {
    id: '11', slug: 'site-traffic', label: 'TRAFFIC · SECURITY · ACCESS', title: 'Managing site traffic', theme: 'light',
    notes: `"You asked us directly how we manage site traffic, so let me answer it head on. michigan.org runs on Pantheon, US-based managed hosting built specifically for Drupal. You get four separate environments, dev, test, beta and production, so nothing untested ever touches the live site. A global CDN and autoscaling absorb the seasonal spikes, fall color season, the winter rush, without anyone lifting a finger. Automated backups and disaster recovery let us roll back fast, and we monitor performance in real time with alerts on uptime and page speed before a visitor ever notices. One more thing: the old scoreboard was raw traffic. The new one is visibility, whether Michigan shows up in the answer. We manage both."`,
  },
  {
    id: '12', slug: 'secure-by-design', label: 'TRAFFIC · SECURITY · ACCESS', title: 'Secure by design', theme: 'dark',
    notes: `"On security. Remember that more than half of web traffic is bots, much of it bad? This is where we stop them. Active firewall and intrusion prevention that identifies, logs, blocks and reports malicious activity. Load balancing for high availability. Ongoing vulnerability scanning and security testing. Role-based permissions so people only touch what they should. And support with severity-based response times and a clear escalation path, so if something does happen, you know exactly who's on it and how fast."`,
  },
  {
    id: '13', slug: 'private-accessible', label: 'TRAFFIC · SECURITY · ACCESS', title: 'Private & accessible by default', theme: 'light',
    notes: `"Two more the JEC cares about. Privacy: a consent management platform and full cookie compliance, and Michigan's data stays Michigan's, stored separately, never used to train anyone else's models, governed by clear retention and access rules. And accessibility, which we build in from day one, not bolt on at the end. The RFP asks for WCAG 2.1 AA at 90% or higher. We meet or exceed it, validated with automated scans, manual screen-reader and keyboard testing, and real users, then monitored continuously so it stays compliant."`,
  },

  // ----- TRANSITION → LIVE DEMO -----
  {
    id: '14', slug: 'time-for-design', label: 'LIVE DEMO', title: 'Time for some design', theme: 'dark',
    notes: `"That's the foundation handled. Now the fun part." → Click the button, go live into the demo. Everything past this point is live: Front Horizon + design, the AI Concierge, individualization, then the engine. One person shares screen for the whole demo.`,
  },
]

export function getSlideByIndex(i: number) {
  return SLIDES[i]
}

export function getSlideIndex(id: string) {
  return SLIDES.findIndex(s => s.id === id)
}
