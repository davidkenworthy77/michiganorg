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
    id: '03', slug: 'team-makeup', label: 'THE TEAM', title: 'The people doing the work', theme: 'light',
    notes: `(People wave as Casey names what they do.) "The people you see on your screen today are the ones who'll do the work. Leaders in the digital space who are out there right now as a voice for where this industry is heading. (Dave waves.) Content specialists who'll define what actually wins on a web filling up with slop. The technical minds who make sure Michigan shows up where the answers get formed. (Sean waves.) Global leadership betting our future on this space and in love with this industry. (Katie waves.) Creative leadership that keeps every pixel unmistakably Pure Michigan. (Rick waves.) And the partnership muscle that's in it for the long game. (Justin waves.)"`,
  },

  // ----- SECTION 2 — THE FUTURE OF AI -----
  {
    id: '04', slug: 'where-today', label: 'THE SHIFT', title: 'Where are we today?', theme: 'dark',
    notes: `Casey hands to Dave. A scene-setting beat. "Here's how we see that chapter." → Dave: "Thanks Casey. Before we get into where michigan.org goes next, I want to set the scene — to look at where we actually are today, and how the way people find a destination has quietly changed underneath all of us." Then into the shift.`,
  },
  {
    id: '05', slug: 'two-front-war', label: 'THE SHIFT', title: 'A war on two fronts', theme: 'dark',
    notes: `Dave reframes the problem. "DMOs are fighting a war on two fronts. Human travelers have moved on — they're planning trips with ChatGPT, expecting Netflix-level personalization, and generic content has become irrelevant. And the AI bots don't use you either — most queries never reach your site, LLMs don't recognize you as the authority, and your content lacks the structure they need. Neither side trusts you." This sets up the trust theme that runs through the next few slides.`,
  },
  {
    id: '06', slug: 'trust-gap', label: 'THE SHIFT', title: 'It comes down to trust', theme: 'dark',
    notes: `"Stack all of that up and it comes down to one word: trust. Travelers don't fully trust DMOs to give them the experience they now expect. And here's the harder part. The machines don't trust us either. When an AI answers a question about Michigan, it's often not pulling from the DMO, it's pulling from everyone else. So we've got a trust gap on two fronts at the same time: the people, and the systems now answering on our behalf."`,
  },

  // ----- SECTION 3 — DESTINATION INTELLIGENCE -----
  {
    id: '07', slug: 'future', label: 'HOW WE WIN', title: 'What does the future of michigan.org look like?', theme: 'dark',
    notes: `Transition into the solution. "So that's where we are. The question is: what does the future of michigan.org actually look like — and how does a destination win from here? That's what the rest of this is about." Then into the website-as-intelligence reframe.`,
  },
  {
    id: '08', slug: 'website-is-intelligence', label: 'DESTINATION INTELLIGENCE', title: 'The website is the intelligence', theme: 'light',
    notes: `"Here's the shift. Stop picturing michigan.org as a website, a stack of pages people visit. Picture it as the destination's intelligence. One living, structured source of truth about Michigan. The site is the engine, and everything else feeds from it: the LLMs, the agents, social, email, PR, the paid media. Build it once and build it right, and Michigan shows up accurate and on-brand everywhere a traveler or a machine is asking. The website stops being a destination you visit and becomes the brain behind all of it."`,
  },
  {
    id: '09', slug: 'feedback-loop', label: 'THE LOOP', title: 'Every interaction makes it smarter', theme: 'light',
    notes: `"Here's what makes it compound. Every interaction is a signal. Humans interact with the site, the concierge, the content. Bots query through schema and structured data. The platform learns what people ask and what works. And the system adapts — content expands, audiences refine. Then it runs again. The longer it runs, the more it knows; the more it knows, the better it performs. We manage michigan.org like a living organization, not a static brochure."`,
  },

  // ----- SECTION 4 — TRAFFIC, SECURITY, CONSENT, ADA -----
  {
    id: '10', slug: 'visibility', label: 'THE NEW SCOREBOARD', title: 'Visibility is the new traffic', theme: 'light',
    notes: `"We know website traffic has been falling, and that's a real concern. But here's the reframe: traffic was only ever measuring one surface — your website. The new scoreboard is visibility: your destination's presence across every place a person or a machine forms an opinion of Michigan. Website traffic is just one grey line. Add LLM citations, agent traffic, social, earned — and the sum, the orange line, is what actually matters, and it's growing. So the new metrics aren't pageviews. They're share of voice in the discovery conversations, owning how Michigan is perceived, being wherever the traveler is asking, and funding the knowledge and point of view that everything else draws from."`,
  },
  {
    id: '11', slug: 'secure-accessible', label: 'SECURE & ACCESSIBLE', title: 'Secure & accessible', theme: 'dark',
    notes: `"Two things have to be true at once: the site has to be accessible, and it has to be secure. Accessible in every sense of the word — findable to the machines, with clean schema and structured data so LLMs and agents read Michigan accurately, and accessible to people, meeting WCAG 2.1 AA at 90% or higher, screen-reader and keyboard tested. And secure — firewall, intrusion prevention and vulnerability scanning, high availability and uptime, and privacy, consent and data governance that stays compliant as the rules change. Everything we do, we do within the rules."`,
  },

  // ----- TRANSITION → LIVE DEMO -----
  {
    id: '12', slug: 'time-for-design', label: 'LIVE DEMO', title: 'Time for some design', theme: 'dark',
    notes: `"That's the foundation handled. Now the fun part." → Click the button, go live into the demo. Everything past this point is live: Front Horizon + design, the AI Concierge, individualization, then the engine. One person shares screen for the whole demo.`,
  },

  // ----- PARKED — not currently in use, kept at the end -----
  {
    id: '13', slug: 'team-values', label: 'THE TEAM', title: 'A team of people who', theme: 'light',
    notes: `(Parked / not in use.) "And every one of them shares three things. They care. They push the bleeding edge. And they want to be better every single day."`,
  },
  {
    id: '14', slug: 'discovery-changed', label: 'THE SHIFT', title: 'Discovery has changed', theme: 'light',
    notes: `(Parked / not in use.) "The way people find a trip has changed. They're not starting on a homepage anymore, they're starting in ChatGPT, Gemini, Perplexity, in the AI answer sitting at the top of Google."`,
  },
  {
    id: '15', slug: 'bots-outnumber', label: 'THE SHIFT', title: 'Bots now outnumber humans', theme: 'dark',
    notes: `(Parked / not in use.) "Last year, for the second year running, more than half of all web traffic was automated, not human. And AI agent traffic grew almost 8,000% in twelve months."`,
  },
]

export function getSlideByIndex(i: number) {
  return SLIDES[i]
}

export function getSlideIndex(id: string) {
  return SLIDES.findIndex(s => s.id === id)
}
