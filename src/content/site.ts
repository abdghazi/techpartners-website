export const site = {
  name: "TechPartners",
  tagline: "Better together in tech",
  description:
    "TechPartners is an IT consultancy for managed services, outsourcing, security, ERP, and AI. We write a plan, then we build and run it.",
  formNotice:
    "Sending is not connected yet. This checks the form and shows the confirmation.",
  phone: "+1 514 998 9496",
  phoneHref: "tel:+15149989496",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  problem: string;
  deliver: string[];
};

export const services: Service[] = [
  {
    id: "managed",
    title: "Managed services",
    kicker: "Run",
    summary:
      "A named team that keeps your systems up, patched, and supported after the project ends.",
    problem:
      "The build ships, then the same people who asked for it are left watching alerts and chasing vendors.",
    deliver: [
      "Day-to-day operation of the systems we agree to own",
      "Database administration, monitoring, and a clear path when something breaks",
      "A monthly view of what ran, what failed, and what should change",
    ],
  },
  {
    id: "outsource",
    title: "Outsourcing",
    kicker: "Deliver",
    summary:
      "A delivery team you can hand a defined scope to, for a build, a run, or both.",
    problem:
      "The work is real and the in-house team is already full. Hiring for one project is the slow path.",
    deliver: [
      "A scope, a sequence, and the people assigned to it",
      "Build or operate against that plan, with progress you can see",
      "Handoff back to your team when you want the work in-house",
    ],
  },
  {
    id: "security",
    title: "Security solutions",
    kicker: "Protect",
    summary:
      "Monitor the systems you run, find the gaps, and respond when something is wrong.",
    problem:
      "Security shows up as a tool purchase, while the actual risk sits in access, backups, and how people work.",
    deliver: [
      "Threat detection, vulnerability assessment, and a monitoring view",
      "Incident response, from the first alert through the fix",
      "Audits for configuration, policy, and regulatory compliance",
      "Training so your team can keep the controls in place",
    ],
  },
  {
    id: "erp",
    title: "ERP systems",
    kicker: "Operate",
    summary:
      "Select and roll out the system for finance, people, sales, inventory, and the work between them.",
    problem:
      "Spreadsheets and disconnected tools are doing the job of one system, and every new process makes it worse.",
    deliver: [
      "Coverage for financials, human resources, CRM, supply chain, and point of sale",
      "Governance, risk, and compliance built into the same system",
      "A rollout plan with data, roles, and a go-live sequence",
      "The implementation, then support while people start using it",
    ],
  },
  {
    id: "ai",
    title: "AI solutions",
    kicker: "Build",
    summary:
      "Put a model to work inside a real product, with a plan for the data, the risk, and the first release.",
    problem:
      "The goal is clear and the data exists, but there is no reliable path from a demo into something people use.",
    deliver: [
      "The uses worth building, and the ones to leave for later",
      "How the model, the data, and the product fit together",
      "A written plan, then the working system",
    ],
  },
  {
    id: "software",
    title: "Software",
    kicker: "Build",
    summary:
      "Web, mobile, and custom software shaped around how the business actually runs.",
    problem:
      "Off-the-shelf tools stop fitting, and a full rebuild with no sequence is how projects stall.",
    deliver: [
      "The product scope, the users, and what done means",
      "A build plan with a sequence, not a single big launch",
      "The application, tested against that plan",
    ],
  },
  {
    id: "agentic",
    title: "Agentic AI",
    kicker: "Build",
    summary:
      "Agents and workflows that take a defined job, with a person still responsible for the outcome.",
    problem:
      "The same handoff happens every day. Collect, decide, update a system, tell someone. It does not need another dashboard.",
    deliver: [
      "The job the agent is allowed to do, and where a person steps in",
      "The tools, data, and checks the agent uses",
      "A plan, then the workflow running on real work",
    ],
  },
];

export const steps = [
  {
    title: "Discover",
    text: "We learn the business problem, who it is for, and what a useful result looks like.",
  },
  {
    title: "Propose a plan",
    text: "You get a written plan: scope, sequence, and what we will not do yet.",
  },
  {
    title: "Build",
    text: "We deliver in the order the plan sets, so each step can be used before the last one.",
  },
  {
    title: "Support",
    text: "After launch we stay on to run it, fix what breaks, and adjust what the work taught us.",
  },
];
