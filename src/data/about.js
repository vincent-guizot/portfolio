import {
  Briefcase,
  Layers,
  GraduationCap,
  Mail,
  Users,
  TrendingUp,
  Heart,
  Handshake,
  MapPin,
  Boxes,
  Palette,
} from "lucide-react";
import { profile } from "./profile";

/* ---------------------------------------------------------------------- *
 * About Me
 * ---------------------------------------------------------------------- */
export const quickInfo = [
  { icon: MapPin, label: profile.location },
  { icon: Mail, label: profile.email },
  { icon: Briefcase, label: "8+ Years in Development" },
  { icon: Users, label: profile.availability },
];

export const myStory = [
  "I'm a Computer Science graduate from Binus University with a strong focus on Front-End Development and UI/UX Design, and a long-standing interest in multimedia.",
  "Over the years I've moved from IT support, into UI/UX design, into full stack development \u2014 building responsive, user-friendly web applications along the way.",
  "Alongside building products, I mentor aspiring developers through hands-on training and real-world projects \u2014 teaching has been part of my journey since 2017.",
];

export const milestones = [
  { icon: Users, title: "Started in IT Support", description: "Began my career keeping systems running at Kompas.com." },
  { icon: Palette, title: "Moved into UI/UX & Front-End", description: "Designed interfaces and built front-ends at Intikom Berlian Mustika." },
  { icon: GraduationCap, title: "Started Teaching", description: "Began training aspiring developers at Course Net and Hacktiv8." },
  { icon: Briefcase, title: "Full Stack Developer", description: "Building end-to-end web applications and continuing to mentor." },
];

export const beliefs = [
  { icon: Heart, title: "Build with Purpose", description: "I build products that solve real problems and create meaningful impact." },
  { icon: Users, title: "Share & Empower", description: "I love teaching and sharing knowledge to empower others to grow." },
  { icon: Handshake, title: "Collaborate Honestly", description: "I believe in clear communication, trust, and long-term collaboration." },
  { icon: TrendingUp, title: "Keep Improving", description: "I'm committed to continuous learning and becoming a better version of myself." },
];

export const skillGroups = [
  {
    group: "Front End",
    skills: ["React.js", "Redux", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "SCSS/SASS", "Zustand", "Shadcn", "TanStack Query", "React Hook Form", "Axios"],
  },
  { group: "Back End", skills: ["Node.js", "Express.js", "Prisma", "Sequelize ORM", "Zod"] },
  { group: "Database", skills: ["PostgreSQL", "MongoDB", "MongoDB Atlas", "Firestore"] },
  { group: "Cloud / BaaS / Deployment", skills: ["Firebase", "Supabase", "Neon", "Vercel", "Render"] },
  { group: "Version Control", skills: ["Git", "GitHub", "GitLab", "BitBucket"] },
  { group: "AI Tools", skills: ["ChatGPT", "Codex", "Claude", "Claude Code", "GitHub Copilot"] },
];

export const aFewNumbers = [
  { icon: Briefcase, value: "8+", label: "Years in Development" },
  { icon: Users, value: "9+", label: "Years Teaching" },
  { icon: Layers, value: "6+", label: "Companies & Clients" },
  { icon: Boxes, value: "30+", label: "Tools & Technologies" },
];
