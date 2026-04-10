export type Category = "AI" | "SaaS" | "Finance" | "Health" | "E-commerce";
export type Difficulty = "Easy" | "Medium" | "Hard";

export type Idea = {
  id: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  trending: boolean;
};

export const ideas: Idea[] = [
  {
    id: "1",
    title: "AI Resume Builder",
    description:
      "Generate tailored resumes instantly using AI based on job descriptions.",
    category: "AI",
    difficulty: "Medium",
    trending: true,
  },
  {
    id: "2",
    title: "Micro-SaaS Analytics",
    description:
      "Plug-and-play dashboards for indie hackers with zero-config Stripe sync.",
    category: "SaaS",
    difficulty: "Easy",
    trending: true,
  },
  {
    id: "3",
    title: "Split Bill Social",
    description:
      "Consumer app that makes group dinners painless with smart receipt scanning.",
    category: "Finance",
    difficulty: "Medium",
    trending: false,
  },
  {
    id: "4",
    title: "Clinic Queue Copilot",
    description:
      "Reduce wait times with AI triage and patient-friendly check-in flows.",
    category: "Health",
    difficulty: "Hard",
    trending: true,
  },
  {
    id: "5",
    title: "Headless Commerce Starter",
    description:
      "Opinionated e-commerce boilerplate with subscriptions and global tax.",
    category: "E-commerce",
    difficulty: "Hard",
    trending: false,
  },
  {
    id: "6",
    title: "Voice Note to Tasks",
    description:
      "Turn rambling voice memos into structured todos and calendar blocks.",
    category: "AI",
    difficulty: "Easy",
    trending: false,
  },
  {
    id: "7",
    title: "Freelancer CRM Lite",
    description:
      "Lightweight client pipeline with proposals, contracts, and time tracking.",
    category: "SaaS",
    difficulty: "Medium",
    trending: false,
  },
  {
    id: "8",
    title: "Carbon-Aware Shipping",
    description:
      "E-commerce plugin that surfaces lower-emission delivery options at checkout.",
    category: "E-commerce",
    difficulty: "Medium",
    trending: true,
  },
  {
    id: "9",
    title: "Subscription Health Monitor",
    description:
      "Never miss a renewal—track SaaS spend and unused seats in one place.",
    category: "Finance",
    difficulty: "Easy",
    trending: false,
  },
  {
    id: "10",
    title: "Sleep Rhythm Coach",
    description:
      "Consumer wearable companion that adapts nudges to your real sleep debt.",
    category: "Health",
    difficulty: "Medium",
    trending: true,
  },
  {
    id: "11",
    title: "Prompt Library for Teams",
    description:
      "Shared AI prompt templates with versioning, reviews, and analytics.",
    category: "AI",
    difficulty: "Hard",
    trending: false,
  },
  {
    id: "12",
    title: "Local Pickup Marketplace",
    description:
      "Hyperlocal buy-sell with escrow and same-day pickup scheduling.",
    category: "E-commerce",
    difficulty: "Hard",
    trending: false,
  },
  {
    id: "13",
    title: "Invoice Autopilot",
    description:
      "Auto-generate and chase invoices from your calendar and time entries.",
    category: "Finance",
    difficulty: "Easy",
    trending: false,
  },
  {
    id: "14",
    title: "Focus Blocks",
    description:
      "Pomodoro meets calendar—defend deep work with smart meeting buffers.",
    category: "SaaS",
    difficulty: "Easy",
    trending: true,
  },
];

export const categoryOptions: Category[] = [
  "AI",
  "SaaS",
  "Finance",
  "Health",
  "E-commerce",
];

export const difficultyOptions: Difficulty[] = ["Easy", "Medium", "Hard"];
