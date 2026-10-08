import {
  Briefcase,
  GraduationCap,
  Code2,
  Database,
  Users,
  Calendar,
  BookOpen,
  Palette,
} from "lucide-react";

/* ---------------------------------------------------------------------- *
 * Home
 *
 * Stats below are derived from the CV's own dates (first dev-focused role
 * in 2018, teaching since 2017, 6 distinct employers) rather than invented
 * round numbers — no project/student counts are asserted since the CV
 * doesn't state any.
 * ---------------------------------------------------------------------- */
export const homeStats = [
  { icon: Calendar, value: "8+", label: "Years in Development" },
  { icon: Users, value: "9+", label: "Years Teaching & Mentoring" },
  { icon: Briefcase, value: "6+", label: "Companies & Clients" },
  { icon: BookOpen, value: "\u221E", label: "Always Learning & Growing" },
];

export const whatIDo = [
  {
    icon: Code2,
    title: "Front-End Development",
    description: "Building responsive, user-friendly interfaces with React, Next.js, and modern tooling.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing wireframes, prototypes, and high-fidelity mockups in Figma and Adobe XD.",
  },
  {
    icon: Database,
    title: "Back-End Development",
    description: "Building APIs and server-side logic with Node.js, Express.js, and Prisma.",
  },
  {
    icon: GraduationCap,
    title: "Mentoring & Training",
    description: "Teaching front-end and full stack development to bootcamp students and corporate teams.",
  },
];
