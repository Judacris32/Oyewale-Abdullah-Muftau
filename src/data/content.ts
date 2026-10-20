/* ------------------------------------------------------------------
   Every fact on the site lives here. Sources: Oyewale's LinkedIn
   profile (primary, Oct 2026), his CV, award certificates, press
   coverage and the Full Stackers recommendation letter.
   Edit copy here rather than inside page components.
------------------------------------------------------------------- */

export type Theme = "green" | "gold" | "slate";

export type Metric = { value: string; label: string };

/** Local photos used in cards (public/images). */
export type Photo = { src: string; alt: string; credit?: string };

export const photos = {
  analysis: { src: "/images/capabilities/data-analysis.jpg", alt: "Analyst working on a laptop showing a data dashboard with performance trends, categories and regional results" },
  modelling: { src: "/images/capabilities/predictive-modelling.jpg", alt: "Laptop showing Python machine learning code beside an energy demand forecast, model performance scores and feature importance" },
  dashboards: { src: "/images/capabilities/dashboards-reporting.jpg", alt: "Operations dashboard on a laptop showing energy output, cost breakdown and site performance, next to Power BI books" },
  energy: { src: "/images/capabilities/energy-operations.jpg", alt: "Engineer in a hard hat reviewing an energy dashboard on a tablet at an electrical substation at sunset" },
} satisfies Record<string, Photo>;

export const stats: Metric[] = [
  { value: "2", label: "National awards for my analytics work" },
  { value: "15%", label: "Better energy efficiency from my machine learning forecasts" },
  { value: "30%", label: "More efficient project reporting at Pilot Science" },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  metrics?: Metric[];
  tags: string[];
};

/** Work history, taken from Oyewale's LinkedIn profile. Newest first. */
export const experience: Experience[] = [
  {
    id: "oldham-council",
    company: "Oldham Metropolitan Borough Council",
    role: "Maintenance Engineer (Electrical)",
    period: "Nov 2024 to present",
    location: "Greater Manchester, UK",
    current: true,
    summary: "Keeping electrical systems across council buildings safe and reliable, and using fault and maintenance records to cut repeat repairs.",
    highlights: [
      "Tracked recurring fault trends and recommended corrective maintenance changes that cut reactive work orders by 25% over six months.",
      "Completed more than 150 planned maintenance tasks and reduced average system downtime from 4 hours to under 1.5 hours.",
      "Resolve 95% of reactive call-outs and emergency electrical failures within 3 hours.",
      "Carry out planned preventive maintenance on distribution boards, lighting, HVAC plant, fire alarm panels and emergency lighting across multiple council sites, to 18th Edition wiring regulations.",
      "Log inspection findings on the CAFM asset management system to support compliance and remediation planning.",
      "Completed more than 50 safety inspections with a zero-incident record.",
    ],
    metrics: [
      { value: "−25%", label: "reactive work orders" },
      { value: "95%", label: "call-outs fixed within 3 hours" },
      { value: "150+", label: "maintenance tasks completed" },
      { value: "50+", label: "safety inspections, zero incidents" },
    ],
    tags: ["Fault trend analysis", "CAFM", "BS 7671", "Preventive maintenance"],
  },
  {
    id: "10alytics",
    company: "10Alytics",
    role: "Data Scientist",
    period: "Aug 2024 to present",
    current: true,
    summary: "Data science work focused on data analysis, machine learning and predictive modelling.",
    highlights: [],
    tags: ["Python", "SQL", "Machine learning", "Tableau"],
  },
  {
    id: "pilot-science",
    company: "Pilot Science Company Limited",
    role: "Technical Business Analyst / Electrical Engineer",
    period: "Aug 2021 to Sep 2023",
    location: "Lagos, Nigeria",
    summary: "Used data to improve reporting, energy use and costs across telecom power projects, while leading a large engineering team.",
    highlights: [
      "Built a Python and Excel reporting template that made project reporting 30% more efficient and transparent.",
      "Used machine learning to predict energy use at telecom data centres, improving energy efficiency by 15%.",
      "Created dashboards in Excel, Tableau and Google Data Studio that improved stakeholder decision-making by 20%.",
      "Cleaned and analysed large datasets, improving data quality by 25% and making forecasts more accurate.",
      "Led a team of more than 70 engineers, raising technical support efficiency by 20% through performance data.",
      "Supported a network consolidation that cut operating costs by 18% and capital spending by 22%.",
    ],
    metrics: [
      { value: "30%", label: "more efficient reporting" },
      { value: "15%", label: "better energy efficiency" },
      { value: "−18%", label: "operating costs" },
      { value: "70+", label: "engineers led" },
    ],
    tags: ["Python", "Excel", "Tableau", "Google Data Studio", "Machine learning"],
  },
  {
    id: "west-africa-thread",
    company: "West Africa Thread Co. Ltd / Karma Group",
    role: "Electrical Engineer (Maintenance)",
    period: "Jan 2019 to Jan 2021",
    location: "Apapa, Lagos",
    summary: "Kept factory machinery and industrial automation systems running safely and reliably.",
    highlights: [
      "Planned and carried out preventive and corrective maintenance on industrial automation systems (PLC, SCADA and Siemens Logic).",
      "Ran daily checks on factory machines and equipment before production started.",
      "Diagnosed and repaired motors and electrical faults quickly to keep production moving.",
    ],
    tags: ["PLC", "SCADA", "Preventive maintenance"],
  },
  {
    id: "ogroma",
    company: "Ogun State Road Management Agency (OGROMA)",
    role: "Technical Support Engineer (NYSC)",
    period: "Nov 2017 to Oct 2018",
    location: "Abeokuta, Ogun State",
    summary: "Provided electrical and technical support across the agency during national youth service.",
    highlights: [
      "Evaluated electrical systems, components and equipment.",
      "Installed and maintained CCTV and surveillance systems.",
      "Resolved network issues and gave remote technical support.",
    ],
    tags: ["Technical support", "CCTV", "Networking"],
  },
  {
    id: "semdemo",
    company: "Semdemo Nigeria Limited",
    role: "Electrical / Solar Technician",
    period: "Nov 2016 to Nov 2017",
    location: "Lagos, Nigeria",
    summary: "Installed and maintained electrical and solar power systems.",
    highlights: [
      "Installed solar PV and inverter systems to codes and standards.",
      "Maintained panels, batteries, charge controllers and other system equipment.",
      "Supported field engineers with routine maintenance and firmware upgrades.",
    ],
    tags: ["Solar PV", "Inverters", "Electrical installation"],
  },
  {
    id: "tcn",
    company: "Transmission Company of Nigeria",
    role: "Engineering Intern",
    period: "Apr 2015 to Oct 2015",
    location: "Osogbo, Nigeria",
    summary: "My first experience of working with data: monitoring a 330/132kV electricity substation.",
    highlights: [
      "Recorded hourly energy consumption and monitored load and frequency.",
      "Helped maintain transformers, transmission lines and other substation equipment.",
      "Assisted with installing breakers, relays and current transformers.",
    ],
    tags: ["Substations", "Load monitoring", "Data recording"],
  },
];

export type JourneyItem = {
  year: string;
  title: string;
  org: string;
  body: string;
  kind: "work" | "education" | "award" | "community" | "writing";
  href?: string;
};

export const journey: JourneyItem[] = [
  {
    year: "2011",
    title: "BEng, Electrical & Electronics Engineering",
    org: "Osun State University",
    body: "A grounding in electrical systems, signals and the mathematics behind them.",
    kind: "education",
  },
  {
    year: "2015",
    title: "Engineering Intern",
    org: "Transmission Company of Nigeria, Osogbo",
    body: "Recorded hourly energy consumption and monitored load and frequency at a 330/132kV substation. My first experience of how much depends on accurate data.",
    kind: "work",
  },
  {
    year: "2016",
    title: "Electrical / Solar Technician",
    org: "Semdemo Nigeria Limited, Lagos",
    body: "Installed and maintained solar PV and inverter systems, and supported field engineers on maintenance and firmware upgrades.",
    kind: "work",
  },
  {
    year: "2017",
    title: "Technical Support Engineer (NYSC)",
    org: "Ogun State Road Management Agency",
    body: "Evaluated electrical systems and provided technical and network support across the agency.",
    kind: "work",
  },
  {
    year: "2019",
    title: "Electrical Engineer (Maintenance)",
    org: "West Africa Thread Co. / Karma Group, Apapa",
    body: "Planned and carried out maintenance on industrial automation systems, including PLC, SCADA and Siemens logic controllers.",
    kind: "work",
  },
  {
    year: "2021",
    title: "Technical Business Analyst / Electrical Engineer",
    org: "Pilot Science Company Limited, Lagos",
    body: "Machine learning energy forecasts, reporting automation and dashboards, and leadership of 70+ engineers.",
    kind: "work",
    href: "/work#pilot-science",
  },
  {
    year: "2023",
    title: "MEng, Mechatronics, Robotics & Automation",
    org: "University of Salford, Manchester",
    body: "Moved to the UK for my master's degree, and began mentoring analysts on the Full Stackers programme.",
    kind: "education",
  },
  {
    year: "2024",
    title: "Analytics Innovation Award",
    org: "20th Titans of Tech Awards",
    body: "Recognised for delivering measurable results through analytics and business intelligence.",
    kind: "award",
    href: "/recognition",
  },
  {
    year: "2024",
    title: "Data Scientist",
    org: "10Alytics",
    body: "Data science and analytics work spanning analysis, machine learning and predictive modelling.",
    kind: "work",
  },
  {
    year: "2024",
    title: "Maintenance Engineer (Electrical)",
    org: "Oldham Council, Greater Manchester",
    body: "Using fault data from the asset system to cut repeat repairs by a quarter.",
    kind: "work",
  },
  {
    year: "2025",
    title: "Published in New Telegraph",
    org: "SME financing gap",
    body: "An opinion piece on how better use of data could help lenders reach viable small businesses.",
    kind: "writing",
    href: "/press#article",
  },
  {
    year: "2025",
    title: "Emerging Data & Analytics Professional of the Year",
    org: "11th Nigeria Technology Awards",
    body: "Selected after screening and grading by the NiTA judging panel and advisory board.",
    kind: "award",
    href: "/recognition",
  },
];

export const education = [
  { title: "MEng, Mechatronics, Robotics and Automation Engineering", org: "University of Salford, Manchester", period: "2023 to 2024" },
  { title: "BEng, Electrical and Electronics Engineering", org: "Osun State University, Nigeria", period: "2011 to 2016" },
  { title: "NVQ Level 3, Electrical and Electronic Engineering", org: "City & Guilds", period: "In progress" },
];

export const certifications = [
  { title: "Full Stack Data Scientist", org: "10alytics" },
  { title: "Data Analysis in Excel", org: "DataCamp" },
  { title: "Postgraduate Diploma in Project Management", org: "Chartered Institute of Project Management" },
  { title: "Diploma in Facility Management", org: "Chartered Institute of Project and Facility Management" },
  { title: "Energy Grid of the Future", org: "Professional certificate" },
  { title: "Energy Audits and Energy Efficiency", org: "Nigerian Society of Engineers" },
];

export const memberships = ["ACICPFM", "GIEEE", "MNSE"];

/** Areas of expertise shown next to the brand-icon tools. */
export const expertise = [
  { title: "Data analysis & statistics", icon: "chart" as const, tone: "green" as const },
  { title: "Machine learning & predictive modelling", icon: "brain" as const, tone: "plum" as const },
  { title: "Data cleaning & data quality", icon: "database" as const, tone: "gold" as const },
  { title: "Dashboards & data visualisation", icon: "dashboard" as const, tone: "green" as const },
  { title: "Business analysis & reporting", icon: "file" as const, tone: "clay" as const },
  { title: "Energy & operations analytics", icon: "bolt" as const, tone: "gold" as const },
  { title: "Industrial automation (PLC & SCADA)", icon: "cpu" as const, tone: "plum" as const },
  { title: "Project & team leadership", icon: "users" as const, tone: "clay" as const },
];

export const principles = [
  {
    title: "Understand the operation first",
    body: "Numbers can be tidy and still wrong. Before I trust a pattern, I check it against what is actually happening on site or in the business.",
  },
  {
    title: "Rigour before reporting",
    body: "Clean, validated data comes before any model or dashboard. It is the difference between a forecast people use and one they ignore.",
  },
  {
    title: "Design for the decision",
    body: "I build reports and dashboards around the decisions people actually make, so the right number is in front of them at the right time.",
  },
  {
    title: "Communicate with clarity",
    body: "Findings are only valuable if the people responsible can act on them. I present analysis in plain, precise language.",
  },
];

/* ---------------------------- What I do / services ---------------------------- */

export type Capability = {
  title: string;
  lead: string;
  body: string;
  example: string;
  photo: Photo;
  tone: "green" | "gold" | "plum" | "clay";
  icon: "search" | "trend" | "dashboard" | "bolt";
};

export const capabilities: Capability[] = [
  {
    title: "Data analysis",
    lead: "Turning raw records into clear answers.",
    body: "I clean, combine and explore data to find out what is really driving performance, then check the findings against what is happening on the ground.",
    example: "Found the recurring faults behind a quarter of Oldham Council's emergency repairs.",
    photo: photos.analysis,
    tone: "green",
    icon: "search",
  },
  {
    title: "Predictive modelling & machine learning",
    lead: "Using past data to plan for what's coming.",
    body: "I build machine learning models that forecast demand, consumption and risk, so teams can act before costs rise or problems occur.",
    example: "ML energy forecasts improved energy use efficiency at telecom data centres by 15%.",
    photo: photos.modelling,
    tone: "plum",
    icon: "trend",
  },
  {
    title: "Dashboards & reporting",
    lead: "Putting the right numbers in front of the right people.",
    body: "I design dashboards and reporting templates in Tableau, Power BI, Excel and Google Data Studio that decision-makers can read in minutes.",
    example: "A Python and Excel reporting template made project reporting 30% more efficient.",
    photo: photos.dashboards,
    tone: "gold",
    icon: "dashboard",
  },
  {
    title: "Energy & operations analytics",
    lead: "Making sites, buildings and equipment run better.",
    body: "After nearly a decade in electrical and power engineering, I understand where operational data comes from and what it means in practice.",
    example: "A data-led network consolidation cut operating costs by 18% and capital spend by 22%.",
    photo: photos.energy,
    tone: "clay",
    icon: "bolt",
  },
];

export type Service = {
  slug: string;
  title: string;
  icon: "database" | "trend" | "dashboard" | "bolt" | "users";
  short: string;
  description: string;
  deliverables: string[];
  tools: string[];
};

export const services: Service[] = [
  {
    slug: "analysis",
    title: "Data cleaning & analysis",
    icon: "database",
    short: "Turn messy records into numbers you can trust.",
    description:
      "Most organisations already hold the data they need, but it is scattered, inconsistent or sitting in a system nobody queries. I bring it together, clean it and explain what it shows.",
    deliverables: ["A data health check of what you have", "Cleaned, joined and documented datasets", "Clear definitions for the metrics that matter", "A concise written summary of findings"],
    tools: ["Python", "SQL", "Excel"],
  },
  {
    slug: "forecasting",
    title: "Predictive modelling & machine learning",
    icon: "trend",
    short: "Plan ahead with models you can explain.",
    description:
      "From energy demand and equipment faults to repayment behaviour, I build forecasting and machine learning models that support planning, and I document how they work so they are not a black box.",
    deliverables: ["Forecasts with honest ranges, not single magic numbers", "Risk and scoring models", "What-if scenarios for planning", "Plain-English model documentation"],
    tools: ["Python", "Machine learning", "Excel", "MATLAB"],
  },
  {
    slug: "dashboards",
    title: "Dashboards & reporting",
    icon: "dashboard",
    short: "Clear reports your team will read and use.",
    description:
      "I design dashboards and reporting templates around the decisions your team makes each week, and automate the repetitive work of producing them.",
    deliverables: ["Tableau, Power BI or Google Data Studio dashboards", "Automated weekly and monthly reports", "KPI scorecards", "A walkthrough so your team owns it"],
    tools: ["Tableau", "Power BI", "Excel", "Python"],
  },
  {
    slug: "operations",
    title: "Operations & energy analytics",
    icon: "bolt",
    short: "Find the waste in sites, buildings and equipment.",
    description:
      "My background is in power systems, telecoms infrastructure and building maintenance. I know how to read fault records, energy data and asset logs in their operational context.",
    deliverables: ["Fault and maintenance trend analysis", "Energy consumption analysis and forecasting", "Asset data clean-up", "Advice on what to monitor and why"],
    tools: ["Python", "CAFM systems", "SCADA data", "Excel"],
  },
  {
    slug: "training",
    title: "Training & mentorship",
    icon: "users",
    short: "Help your team build confidence with data.",
    description:
      "I have mentored analysts on the Full Stackers programme since 2023. I can run practical sessions for your team using your own data and your own questions.",
    deliverables: ["Hands-on workshops in Excel, SQL, Tableau and Power BI", "One-to-one mentoring", "Process mapping sessions", "Agile and Scrum fundamentals for data teams"],
    tools: ["Excel", "SQL", "Power BI", "Tableau"],
  },
];

export const process = [
  { title: "An initial conversation", body: "We discuss the decision you need to make and the question behind it, so the work is aimed at the right outcome." },
  { title: "A data assessment", body: "I review what data you hold and tell you plainly what it can and cannot answer before any significant work begins." },
  { title: "Analysis and build", body: "I carry out the analysis or build the solution, sharing progress early so there are no surprises." },
  { title: "Handover", body: "You receive the work, documentation and a walkthrough, so your team can continue using it independently." },
];

export const needSignals = [
  "You have plenty of data but no clear answers.",
  "Your reports take days to build and nobody reads them.",
  "You keep fixing the same problems over and over.",
  "Your team wants to get better with data, fast.",
];

export const faqs = [
  {
    q: "What kind of work do you take on?",
    a: "Data analysis, predictive modelling and machine learning, dashboards and reporting, and operational or energy analytics. I also run training for teams who want to build confidence with Excel, SQL, Tableau and Power BI.",
  },
  {
    q: "Can you work with messy or incomplete data?",
    a: "Yes. Most real data is messy. I start by assessing what you have and telling you honestly what it can and cannot answer, before you commit to the analysis.",
  },
  {
    q: "Which tools do you use?",
    a: "Mainly Python, SQL, Excel, Tableau, Power BI and Google Data Studio, with machine learning in Python where forecasting is needed. If your team already uses other tools, I will work with them.",
  },
  {
    q: "Where are you based?",
    a: "I am based in Manchester. I am happy to work remotely, and on site when that improves the work.",
  },
  {
    q: "Are you open to full-time roles?",
    a: "I am open to conversations about both permanent roles and project work. Tell me what you have in mind and we can take it from there.",
  },
  {
    q: "How do we get started?",
    a: "Send a short note through the contact form describing what you are working on. I will reply within two working days to arrange a conversation.",
  },
];

/* ---------------------------- Recognition & press ---------------------------- */

export type Award = {
  id: string;
  year: string;
  title: string;
  event: string;
  organiser: string;
  date: string;
  summary: string;
  details: string[];
  image: string;
  imageAlt: string;
  certificate: string;
  certificateAlt: string;
  link?: { label: string; href: string };
};

export const awards: Award[] = [
  {
    id: "titans-of-tech-2024",
    year: "2024",
    title: "Analytics Innovation Award",
    event: "20th Titans of Tech Awards",
    organiser: "TechTV Global Network",
    date: "21 July 2024",
    summary: "For delivering measurable results through data, AI and business intelligence.",
    details: [
      "The Titans of Tech Awards were established by TechTV Global Network in 2004 to recognise people and organisations making a significant contribution to Nigeria's technology industry. Past winners include telecoms companies, banks, government bodies and senior technology leaders.",
      "The Analytics Innovation category recognises individuals who have delivered tangible results for organisations through analytics, AI, business intelligence and data-driven work.",
    ],
    image: "/images/awards/titans-of-tech-plaque.jpg",
    imageAlt: "Titans of Tech Analytics Innovation Award 2024 crystal plaque engraved with Oyewale's name",
    certificate: "/images/awards/titans-of-tech-certificate.jpg",
    certificateAlt: "Titans of Tech Awards certificate for the Analytics Innovation Award 2024, presented to Oyewale Abdullah Muftau",
    link: { label: "Read the Independent story", href: "https://independent.ng/oyewale-muftau-wins-titans-of-tech-analytics-innovation-award/" },
  },
  {
    id: "nita-2025",
    year: "2025",
    title: "Emerging Data Intelligence & Analytics Professional of the Year",
    event: "11th Nigeria Technology Awards (NiTA)",
    organiser: "Nigeria Technology Awards",
    date: "6 December 2025",
    summary: "Selected after screening and grading by the judging panel and advisory board.",
    details: [
      "The Nigeria Technology Awards recognise technology professionals, founders, companies and public institutions driving growth through technology. Selection is based on proven innovation, career growth, industry impact and ongoing contribution to the sector.",
      "My nomination went through step-by-step screening, verification and detailed grading by the NiTA Judging Panel and Advisory Board before I was named the winner.",
    ],
    image: "/images/awards/nita-trophy.jpg",
    imageAlt: "Nigeria Technology Awards 2025 gold trophy engraved with Oyewale's name",
    certificate: "/images/awards/nita-certificate.jpg",
    certificateAlt: "Nigeria Technology Awards certificate naming Oyewale Abdullah Muftau Emerging Data Intelligence and Analytics Professional of the Year",
    link: { label: "Read the Blueprint story", href: "https://blueprint.ng/data-scientist-muftau-bags-national-technology-award/" },
  },
];

export type PressItem = {
  outlet: string;
  title: string;
  date: string;
  display: string;
  href: string;
  kind: "Feature" | "Quoted" | "Opinion";
  author?: string;
  summary: string;
  /** Screenshot of the published article (4:3). */
  image: string;
};

export const press: PressItem[] = [
  {
    outlet: "Blueprint",
    title: "Data scientist Muftau bags national technology award",
    date: "2025-09-20",
    display: "Sep 2025",
    href: "https://blueprint.ng/data-scientist-muftau-bags-national-technology-award/",
    image: "/images/press/blueprint.jpg",
    kind: "Feature",
    summary: "Reports my recognition as Emerging Data Intelligence & Analytics Professional of the Year at the Nigeria Technology Awards.",
  },
  {
    outlet: "Disrupt Africa",
    title: "Could data analytics help close Africa's small business financing gap?",
    date: "2025-03-03",
    display: "Mar 2025",
    href: "https://disruptafrica.com/2025/03/03/could-data-analytics-help-close-africas-small-business-financing-gap/",
    image: "/images/press/disrupt-africa.jpg",
    kind: "Quoted",
    author: "Ifeoluwa Adebayo",
    summary: "Quotes my view on how transaction, mobile-money and point-of-sale data can help lenders assess small businesses fairly.",
  },
  {
    outlet: "PM News",
    title: "Oyewale Muftau, Adebowale Samuel and fellow mentors recognised for advancing practical tech learning",
    date: "2025-02-25",
    display: "Feb 2025",
    href: "https://pmnewsnigeria.com/2025/02/25/oyewale-muftau-adebowale-samuel-and-fellow-mentors-recognised-for-advancing-practical-tech-learning/",
    image: "/images/press/pm-news.jpg",
    kind: "Feature",
    author: "Sola Adetola",
    summary: "Recognises the Full Stackers mentors, including me, for making technology education more practical and career-focused.",
  },
  {
    outlet: "New Telegraph",
    title: "SME financing gap: why better data could change the lending equation",
    date: "2025-02-04",
    display: "Feb 2025",
    href: "https://newtelegraphng.com/sme-financing-gap-why-better-data-could-change-the-lending-equation/",
    image: "/images/press/new-telegraph-article.jpg",
    kind: "Opinion",
    summary: "My opinion piece on why Nigerian lenders turn down viable small businesses, and how better use of data could change that.",
  },
  {
    outlet: "Independent",
    title: "Oyewale Muftau wins Titans of Tech Analytics Innovation Award",
    date: "2024-07-27",
    display: "Jul 2024",
    href: "https://independent.ng/oyewale-muftau-wins-titans-of-tech-analytics-innovation-award/",
    image: "/images/press/independent-article.jpg",
    kind: "Feature",
    summary: "Reports my Analytics Innovation Award at the 20th Titans of Tech Awards.",
  },
];

/* ---------------------------- Article ---------------------------- */

export const article = {
  title: "SME financing gap: why better data could change the lending equation",
  outlet: "New Telegraph",
  date: "4 February 2025",
  href: "https://newtelegraphng.com/sme-financing-gap-why-better-data-could-change-the-lending-equation/",
  standfirst:
    "Nigeria's small businesses don't lack activity. They lack visibility. My argument is that the data they already create every day could help lenders assess them properly.",
  points: [
    {
      title: "The problem isn't always ability to repay",
      body: "A business can have loyal customers, steady sales and a good record of meeting its obligations, and still be turned down because it cannot provide audited accounts, collateral or a long credit history. Its capacity to repay is real. It just isn't visible to the lender.",
    },
    {
      title: "The evidence already exists",
      body: "Small businesses generate data every day: bank records, mobile-money and point-of-sale payments, stock turnover and cash flow. Combined properly, it gives a clearer picture of a business than many balance sheets.",
    },
    {
      title: "Analytics can make lending fairer",
      body: "Predictive analytics can identify repayment patterns and flag emerging risks, so lenders can structure finance around how a business actually earns, provided the data is used with consent and properly governed.",
    },
  ],
  gap: { demand: 13, supply: 1, gapValue: 12, source: "Development Bank of Nigeria MSME Data Insight Dashboard, as cited in my article" },
};

export const disruptAfrica = {
  title: "Could data analytics help close Africa's small business financing gap?",
  outlet: "Disrupt Africa",
  author: "Ifeoluwa Adebayo",
  date: "3 March 2025",
  href: "https://disruptafrica.com/2025/03/03/could-data-analytics-help-close-africas-small-business-financing-gap/",
  summary:
    "Disrupt Africa sought my view on how data could help financial institutions assess small businesses that lack formal records. The piece covers how transaction and cash-flow data can show repayment capacity, where predictive analytics and business intelligence fit in, and why data quality, governance and fairness matter as much as the models.",
};

export const speakingTopics = ["Data for financial inclusion", "Credit assessment for small businesses", "Energy and infrastructure data", "Machine learning for operations", "Building data skills in teams"];

/* ---------------------------- Mentorship ---------------------------- */

export const mentorship = {
  programme: "Full Stackers Mentorship Programme",
  url: "https://www.fullstackersmentorship.com/",
  since: "September 2023",
  focus: "Analysis, Statistics, Modelling & Data Visualisation",
  assigned: 15,
  employed: 5,
  employers: ["OPay", "Flutterwave", "Jumia", "Interswitch"],
  programmeFacts: [
    { title: "12-week programme", body: "A structured, mentor-led programme built around real projects rather than lectures." },
    { title: "Practical projects", body: "Mentees build work they can show employers, with feedback at every stage." },
    { title: "Career support", body: "Professional development and guidance on moving into a first tech role." },
  ],
  pathways: ["Data & AI", "Software engineering", "Product management", "Cloud computing", "Cybersecurity"],
  topics: [
    { title: "Excel, SQL, Tableau & Power BI", body: "The core tools, learned by working through real business problems instead of textbook exercises." },
    { title: "Data analysis & reporting", body: "How to organise data, build a meaningful report and interpret performance indicators." },
    { title: "Process mapping & optimisation", body: "Understanding how work actually flows through a business, and where it gets stuck." },
    { title: "Agile & Scrum", body: "How technology teams plan, collaborate and deliver in short, iterative cycles." },
  ],
  approach: [
    "Start with a real question, not a tool.",
    "Build something you can show an employer.",
    "Explain findings as if to a manager, not a teacher.",
    "Understand the business problem before the dashboard.",
  ],
  quotes: [
    "What distinguishes Oyewale is his ability to connect analytical knowledge with practical business applications.",
    "His approach encourages mentees to move beyond learning individual tools towards understanding how data, reporting, process analysis and collaboration can address real organisational needs.",
    "Oyewale helps learners appreciate that effective business analysis involves more than producing reports; it requires understanding operational problems, identifying opportunities for improvement and presenting evidence that can support better decisions.",
  ],
  quoteBy: { name: "Ayodeji Idowu", role: "Senior Software Engineer · Coordinator & Mentor, Full Stackers Mentorship Programme" },
};
