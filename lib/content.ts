/**
 * Every Proton product name, price, feature and claim below was read directly
 * from proton.me and proton.me/business/plans in July 2026. Prices are the
 * monthly-billing EUR list price per user unless stated otherwise.
 *
 * Nothing here is invented. Where a number is a market benchmark rather than a
 * Proton fact, it carries its own source label so it can be challenged.
 */

export const CONTACT = {
  name: "Thomas Germain",
  email: "thomasgermain5@proton.me",
  location: "Barcelona",
  linkedin: "https://linkedin.com/in/thomasgermain5",
  adsfellow: "https://adsfellow.app",
  b2blast: "https://b2blast.com",
} as const;

/* ------------------------------------------------------------------ why me */

export type Credential = {
  title: string;
  claim: string;
  body: string;
  proof: string[];
  /** Used as a fill (the rule); no text-contrast requirement. */
  accent: string;
  /** Same hue, darkened for use as text on white. */
  accentInk: string;
};

export const CREDENTIALS: Credential[] = [
  {
    title: "Google Ads",
    claim: "125% of quota",
    body:
      "Six years inside the platforms Proton buys on. At Google I ran Search, Shopping, Performance Max, Display and YouTube for advertisers managing eight-figure quarterly budgets, which means I know where the platform's defaults quietly work against a privacy-first advertiser.",
    proof: [
      "125% quota attainment",
      "€15M+ quarterly budgets influenced",
      "Search, Shopping, PMax, Display, YouTube",
    ],
    accent: "var(--p-mail)",
    accentInk: "var(--p-mail-ink)",
  },
  {
    title: "LinkedIn Ads",
    claim: "3× leads at −43% CPL",
    body:
      "Above target every year across 75+ B2B accounts. For Devoteam I rebuilt the LinkedIn Ads → HubSpot lead engine end to end: form strategy, audience architecture, offline conversion sync. Leads tripled while cost per lead fell 43%.",
    proof: [
      "Above target 3 consecutive years",
      "75+ B2B accounts managed",
      "Devoteam: 3× leads, −43% CPL",
    ],
    accent: "var(--p-meet)",
    accentInk: "var(--p-meet-ink)",
  },
  {
    title: "Agency management",
    claim: "Both sides of the brief",
    body:
      "At Pinterest I managed an Accenture-placed team, so I have written the brief and been held to it. I know the difference between an agency that is underperforming and one that has been briefed badly, and how to tell which is which inside two reporting cycles.",
    proof: [
      "Managed an outsourced Accenture team",
      "Promoted within 12 months at Pinterest",
      "Ships own products: adsfellow.app, b2blast.com",
    ],
    accent: "var(--p-pass)",
    accentInk: "var(--p-pass-ink)",
  },
  {
    title: "Product alignment",
    claim: "thomasgermain5@proton.me",
    body:
      "I wrote this application from a Proton Mail address I created for it, on a site I built myself. If you market an encrypted suite while running your own funnel on third-party trackers, buyers notice. I would rather use the product I sell.",
    proof: [
      "Applying from a Proton Mail address",
      "This site: Next.js, zero third-party scripts",
      "Based in Barcelona already",
    ],
    accent: "var(--p-vpn)",
    accentInk: "var(--p-vpn-ink)",
  },
];

/* -------------------------------------------------------------- audiences */

export type Audience = {
  product: string;
  plan: string;
  price: string;
  priceNote: string;
  accent: string;
  personas: string[];
  industries: string[];
  size: string;
  pain: string;
  message: string;
  channels: string[];
};

export const AUDIENCES: Audience[] = [
  {
    product: "Proton Workspace",
    plan: "Workspace Standard / Premium",
    price: "€14.99 to €24.99",
    priceNote: "per user / month, billed monthly · €12.99 to €19.99 on annual",
    accent: "var(--p-mail)",
    personas: ["IT Director", "Head of Operations", "CTO", "Office Manager"],
    industries: ["Tech", "Digital consultancies", "Professional services"],
    size: "10 to 250 employees",
    pain:
      "They are on Google Workspace, they have read the privacy policy, and they cannot get a straight answer about what happens to their data during AI training.",
    message:
      "A privacy-first alternative to Google Workspace and Microsoft 365: the same daily tools, without the data mining.",
    channels: ["Google Search (competitor + category)", "LinkedIn (job title + company size)", "Reddit"],
  },
  {
    product: "Proton Mail",
    plan: "Mail Essentials",
    price: "€7.99",
    priceNote: "per user / month · 15 GB, 3 custom domains",
    accent: "var(--p-mail)",
    personas: ["Managing Partner", "Practice Manager", "Compliance Lead"],
    industries: ["Law and finance", "Healthcare", "Accounting"],
    size: "2 to 50 employees",
    pain:
      "Privileged and patient communication is sitting in an inbox their provider can technically read, and their clients are starting to ask about it.",
    message:
      "If your email provider can read your emails, privilege is a policy, not a guarantee.",
    channels: ["Google Search (high intent)", "LinkedIn (industry + seniority)"],
  },
  {
    product: "Proton VPN",
    plan: "VPN Essentials / Professional",
    price: "€8.99 to €11.99",
    priceNote: "per user / month · min. 2 users · 140+ countries",
    accent: "var(--p-vpn)",
    personas: ["Head of IT", "Security Engineer", "Bureau Chief"],
    industries: ["News and media", "NGOs", "Distributed teams"],
    size: "5 to 500 employees",
    pain:
      "Staff and sources connect from hostile or censored networks, and a leak is not an inconvenience. It is someone's safety.",
    message:
      "Protect the network your team works on, and the sources who trust them.",
    channels: ["Google Search", "Reddit", "LinkedIn (media + NGO)"],
  },
  {
    product: "Proton Pass",
    plan: "Pass Essentials / Professional",
    price: "€4.99 to €6.99",
    priceNote: "per user / month · min. 3 users · SSO and SCIM on Professional",
    accent: "var(--p-pass)",
    personas: ["IT Manager", "Security Lead", "Head of People"],
    industries: ["Tech", "Agencies", "Startups"],
    size: "3 to 200 employees",
    pain:
      "Credentials live in a shared spreadsheet and a Slack DM, and offboarding is a leap of faith.",
    message:
      "The cheapest entry point into Proton, and the fastest security win an IT lead can show their board.",
    channels: ["Google Search (competitor)", "Reddit", "LinkedIn retargeting"],
  },
  {
    product: "Proton Drive",
    plan: "Drive Professional",
    price: "€9.99",
    priceNote: "per user / month · 1 TB per user · starts at 2 users",
    accent: "var(--p-drive)",
    personas: ["Creative Director", "Project Lead", "Research Manager"],
    industries: ["Agencies", "Architecture", "Research"],
    size: "2 to 100 employees",
    pain:
      "Client IP and unreleased work sit on a drive whose provider scans everything on it.",
    message:
      "Store, share and co-edit files that your storage provider cannot open.",
    channels: ["Google Search", "LinkedIn", "Meta retargeting"],
  },
  {
    product: "Lumo AI",
    plan: "Lumo Professional",
    price: "€14.99",
    priceNote: "per user / month · add-on to any Proton business plan",
    accent: "var(--p-lumo)",
    personas: ["Head of AI", "CISO", "General Counsel"],
    industries: ["Legal", "Healthcare", "Finance"],
    size: "20 to 1,000 employees",
    pain:
      "Half the company already pastes confidential material into a consumer AI chatbot, and nobody has approved it.",
    message:
      "Your team is already using AI. The only open question is who else is reading the prompts.",
    channels: ["LinkedIn (security + legal titles)", "Google Search", "Reddit"],
  },
];

/* ------------------------------------------------------------- 90-day plan */

export type Phase = {
  window: string;
  title: string;
  thesis: string;
  workstreams: { label: string; items: string[] }[];
  deliverable: string;
};

export const PHASES: Phase[] = [
  {
    window: "Days 1 to 30",
    title: "Audit",
    thesis:
      "Nothing gets restructured before I can prove what is currently true. The first month buys a baseline nobody can argue with later.",
    workstreams: [
      {
        label: "Accounts",
        items: [
          "Full teardown of live Google, LinkedIn and Meta campaigns: structure, intent, waste",
          "Search term and placement audit: which spend is B2C bleed into B2B budgets",
          "Creative and landing page inventory by product line",
        ],
      },
      {
        label: "Measurement",
        items: [
          "Map every conversion event to its true source of truth",
          "Audit HubSpot lifecycle stages, UTM capture and form routing",
          "Quantify the reporting gap between platform-claimed and CRM-recorded conversions",
        ],
      },
      {
        label: "Agency",
        items: [
          "Review the current brief, scope and fee model against delivered output",
          "Agree a single shared scorecard: CPL, MQL rate, pipeline, not impressions",
          "Set the weekly cadence and the escalation path",
        ],
      },
    ],
    deliverable:
      "A baseline document: real CPL and CAC by product and channel, the measurement gap quantified, and a ranked list of what is wasting money.",
  },
  {
    window: "Days 31 to 60",
    title: "Rebuild",
    thesis:
      "Restructure around product and intent rather than platform convenience, and fix the attribution before scaling anything.",
    workstreams: [
      {
        label: "Campaigns",
        items: [
          "Rebuild Google Search by intent tier: competitor, category, problem-aware",
          "LinkedIn split by product and buying committee role, not one blended B2B audience",
          "Meta demoted to retargeting and lookalike-of-customer only",
          "Reddit test in the privacy and sysadmin communities Proton's buyers actually read",
        ],
      },
      {
        label: "Measurement",
        items: [
          "Server-side tagging live, with CRM as the system of record",
          "Conversion APIs sending hashed, consented, first-party events",
          "Closed-loop pipeline reporting from ad click to closed-won in HubSpot",
        ],
      },
      {
        label: "Message testing",
        items: [
          "Structured message tests per segment, not creative refreshes",
          "Landing page tests on the four concepts in this pitch",
          "Form friction tests: seat count and use case, asked at the right moment",
        ],
      },
    ],
    deliverable:
      "A rebuilt account structure, working privacy-first attribution, and the first read on which message wins per segment.",
  },
  {
    window: "Days 61 to 90",
    title: "Scale what is proven",
    thesis:
      "Only now does budget move, and it moves toward what incrementality testing says actually caused the pipeline.",
    workstreams: [
      {
        label: "Proof",
        items: [
          "Geo holdout on the largest channel to separate incremental from harvested demand",
          "Conversion lift tests where platform-native tooling supports them",
          "Reallocate budget on measured incrementality, not last-click",
        ],
      },
      {
        label: "Growth",
        items: [
          "Scale the winning product, message and channel combinations",
          "Open the next market on evidence of demand, not on a map",
          "Brief the agency on the proven playbook so execution scales without me",
        ],
      },
      {
        label: "Durability",
        items: [
          "Automated reporting with the Ad Tech team, so no manual weekly rebuild",
          "Quarterly budget and KPI forecast the Lead can defend upward",
          "Content structured to be cited by AI search, where B2B research now starts",
        ],
      },
    ],
    deliverable:
      "A defensible quarterly forecast, an agency running a proven playbook, and budget allocated on evidence of incrementality.",
  },
];

/* -------------------------------------------------------------- campaigns */

export type Campaign = {
  headline: string;
  audience: string;
  insight: string;
  message: string;
  cta: string;
  channels: string[];
  kpi: string;
  accent: string;
  accentInk: string;
  demo?: { href: string; label: string };
};

export const CAMPAIGNS: Campaign[] = [
  {
    headline: "Your inbox is not private",
    audience: "IT Directors and CISOs, 50 to 500 employees",
    insight:
      "Most buyers assume encrypted-in-transit means private. The gap between that assumption and zero-access encryption is the whole sale.",
    message:
      "Your provider encrypts your email. It can also read it. Those two things are not in conflict, and that is the problem.",
    cta: "See how zero-access encryption works",
    channels: ["Google Search: competitor and category", "LinkedIn: security titles"],
    kpi: "CPL and MQL-to-SQL rate",
    accent: "var(--p-mail)",
    accentInk: "var(--p-mail-ink)",
    demo: { href: "/demo/legal", label: "Legal variant" },
  },
  {
    headline: "Built for those who can't afford leaks",
    audience: "Journalists, legal teams, NGOs",
    insight:
      "For this segment a breach is not a compliance line item. Proton already has the customer proof. It just is not doing the arguing.",
    message:
      "When a leak costs a source, a case, or a life, encryption stops being an IT preference.",
    cta: "Request a demo",
    channels: ["LinkedIn: media, legal, NGO", "Reddit", "Google Search"],
    kpi: "Pipeline value and win rate",
    accent: "var(--p-vpn)",
    accentInk: "var(--p-vpn-ink)",
    demo: { href: "/demo/media", label: "Newsroom variant" },
  },
  {
    headline: "The Google Workspace alternative",
    audience: "IT leads actively evaluating a switch",
    insight:
      "This is the highest-intent query in the category and the shortest path to revenue. Easy Switch removes the only real objection: migration risk.",
    message:
      "Same productivity. Zero data mining. Move your team with Easy Switch and guided live support at no extra cost.",
    cta: "Get a migration plan",
    channels: ["Google Search: high intent", "Meta: retargeting only"],
    kpi: "CAC and trial-to-paid rate",
    accent: "var(--p-drive)",
    accentInk: "var(--p-drive-ink)",
    demo: { href: "/demo/compare", label: "Comparison page" },
  },
  {
    headline: "Your AI sees everything",
    audience: "Teams already using consumer AI tools at work",
    insight:
      "Shadow AI is this year's shadow IT. The buyer is not shopping for an assistant. They are trying to stop an uncontrolled leak.",
    message:
      "Your team is already pasting confidential work into a chatbot. Lumo processes the prompt, returns the answer, and never trains on it.",
    cta: "Try Lumo for your team",
    channels: ["LinkedIn: security and legal", "Google Search", "Reddit"],
    kpi: "CPL and add-on attach rate",
    accent: "var(--p-lumo)",
    accentInk: "var(--p-lumo-ink)",
    demo: { href: "/demo/startups", label: "Startup variant" },
  },
];

/* ------------------------------------------------------------ channel mix */

export type Channel = {
  name: string;
  share: number;
  role: string;
  why: string;
  accent: string;
};

export const CHANNELS: Channel[] = [
  {
    name: "Google Search",
    share: 40,
    role: "Capture existing demand",
    why:
      "The only channel where someone types the problem into a box. Competitor and alternative-to queries convert closest to revenue, so they get the largest share and the tightest CPA control.",
    accent: "var(--p-mail)",
  },
  {
    name: "LinkedIn Ads",
    share: 30,
    role: "Create demand in the buying committee",
    why:
      "The only platform with reliable firmographic and job-title targeting for a 10 to 500 seat B2B buyer. Dreamdata's 2026 benchmark study (66M+ sessions across roughly 3,500 B2B companies) puts LinkedIn at 121% ROAS against Google Search at 67% and Meta at 51%. Expensive per lead, but the lead is the right person, which is what CPL alone never tells you.",
    accent: "var(--p-meet)",
  },
  {
    name: "Reddit",
    share: 10,
    role: "Reach the privacy-native audience",
    why:
      "Proton's most credible advocates already argue for it here unprompted. Cheap clicks, high scepticism. The copy has to be honest or the comments will say so.",
    accent: "var(--p-drive)",
  },
  {
    name: "Meta",
    share: 10,
    role: "Retargeting only",
    why:
      "Weak B2B targeting and a business model Proton publicly criticises. Justified for warm retargeting and customer lookalikes; not for cold B2B prospecting.",
    accent: "var(--p-pass)",
  },
  {
    name: "AI and LLM search",
    share: 10,
    role: "Be the cited answer",
    why:
      "A growing share of software evaluation starts in an AI assistant rather than a search box. Structured comparison content is how Proton becomes the recommendation instead of the footnote.",
    accent: "var(--p-lumo)",
  },
];

/* ------------------------------------------------------------ benchmarks */

export type Benchmark = {
  metric: string;
  value: string;
  source: string;
  confidence: "strong" | "medium" | "weak";
};

/**
 * Deliberately conservative. Several figures that circulate widely in B2B
 * marketing decks trace back to blog posts citing other blog posts, so the
 * confidence column is doing real work here rather than decorating the table.
 */
export const BENCHMARKS: Benchmark[] = [
  {
    metric: "Paid ROAS by channel, B2B",
    value: "LinkedIn 121% · Google Search 67% · Meta 51%",
    source:
      "Dreamdata, LinkedIn Ads Benchmarks Report 2026 (Mar 2026). 66M+ sessions across ~3,500 B2B companies",
    confidence: "strong",
  },
  {
    metric: "Search Ads CPC, all-industry median",
    value: "$5.42 · Business Services $5.87",
    source: "LocaliQ / WordStream search advertising benchmarks (2026)",
    confidence: "strong",
  },
  {
    metric: "LTV:CAC ratio",
    value: "3:1 target, 5:1+ top quartile",
    source:
      "Long-standing SaaS convention (Bessemer, a16z). A rule of thumb, not a measured benchmark",
    confidence: "strong",
  },
  {
    metric: "CAC payback period",
    value: "12 to 18 months",
    source: "Consistent across SaaS operating benchmarks; varies sharply by ACV",
    confidence: "strong",
  },
  {
    metric: "MQL → SQL conversion, B2B SaaS",
    value: "13%",
    source:
      "First Page Sage (2026). Cybersecurity 15%, IT 14%. Far below the 20% to 30% repeated in most B2B decks",
    confidence: "medium",
  },
  {
    metric: "Cost per lead, B2B SaaS",
    value: "$310 paid · $237 blended",
    source:
      "First Page Sage (2026). Headline figure is credible, but the methodology behind it is not published",
    confidence: "medium",
  },
  {
    metric: "LinkedIn Ads CPC, B2B SaaS",
    value: "$10 to $16",
    source:
      "HockeyStack Labs: a vendor's analysis of its own customer base, so it skews to well-funded advertisers",
    confidence: "weak",
  },
  {
    metric: "LinkedIn CPL, “$60 to $150 top-funnel”",
    value: "Not used",
    source:
      "Quoted constantly, traceable to no original dataset. I checked and could not source it, so it is not in my forecast",
    confidence: "weak",
  },
];

/* -------------------------------------- verified Proton facts (proton.me) */

/** Launch dates verified against Proton's own announcements. */
export const TIMELINE = [
  { date: "31 March 2026", event: "Proton Workspace and Proton Meet launch" },
  { date: "17 June 2026", event: "Easy Switch for Business launches" },
  { date: "30 June 2026", event: "Lumo 2.0 ships on a new architecture" },
] as const;

export const PROTON_FACTS = {
  businesses: "100,000+",
  accounts: "100 million+",
  trial: "14 days free",
  guarantee: "30-day money-back guarantee",
  seats: "1 to 5,000 users on Workspace",
  vpnCountries: "140+ countries",
  certifications:
    "ISO 27001 certified, SOC 2 Type II audited, and supports compliance with HIPAA, CCPA and GDPR",
  jurisdiction: "Based in Switzerland, under European privacy protections",
} as const;

export const SEGMENT_STATS = [
  { value: "30k+", label: "Finance and technology professionals" },
  { value: "15k+", label: "Non-profit organizations" },
  { value: "10k+", label: "Growing startups" },
  { value: "20+", label: "EU government organizations" },
] as const;
