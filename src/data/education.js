import {
  GraduationCap,
  Code2,
  Users,
  Calendar,
  BookOpen,
  Sparkles,
  Lightbulb,
  Brain,
} from "lucide-react";

/* ---------------------------------------------------------------------- *
 * Education — formal education from the real CV.
 * ---------------------------------------------------------------------- */
export const academicJourney = [
  {
    period: "2010 \u2014 2014",
    icon: GraduationCap,
    institution: "Bina Nusantara University (BINUS)",
    program: "Computer Science",
    description: "Computer Science graduate with a keen interest in Multimedia.",
    badges: [],
  },
  {
    period: "2007 \u2014 2010",
    icon: BookOpen,
    institution: "Santa Maria 1 High School",
    program: "Senior High School",
    description: "Completed senior high school in Kota Cirebon.",
    badges: [],
  },
  {
    period: "2004 \u2014 2007",
    icon: BookOpen,
    institution: "Santa Maria Junior High School",
    program: "Junior High School",
    description: "Completed junior high school in Kota Cirebon.",
    badges: [],
  },
  {
    period: "1998 \u2014 2004",
    icon: BookOpen,
    institution: "Santa Maria Elementary School",
    program: "Elementary School",
    description: "Completed elementary school in Kota Cirebon.",
    badges: [],
  },
];

export const keyLearnings = [
  { icon: Code2, title: "Problem Solving", description: "Learning to break down complex problems into simple, solvable steps." },
  { icon: Brain, title: "Logical Thinking", description: "Building strong logic and analytical skills through algorithms and math." },
  { icon: Users, title: "Collaboration", description: "Working in teams on projects, presentations, and assignments." },
  { icon: Lightbulb, title: "Lifelong Learning", description: "Always curious and open to new technologies and ideas." },
];

/* Informal education — bootcamps & courses from the real CV. Kept under
   the `certifications` export name since Achievements.jsx also reads it. */
export const certifications = [
  { name: "Full Stack JavaScript Immersive Bootcamp", issuer: "Hacktiv8, Jakarta", year: "2020" },
  { name: "Web Design Course", issuer: "Dumet School, Jakarta", year: "2017" },
  { name: "CorelDraw Course", issuer: "LPK Santa Maria, Kota Cirebon", year: "2010" },
];

export const learningStats = [
  { icon: Calendar, value: "15+", label: "Years of Self Learning" },
  { icon: Sparkles, value: "Everyday", label: "Stay Curious" },
];
