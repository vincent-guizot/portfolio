import {
  Briefcase,
  Code2,
  Users,
  TrendingUp,
  Calendar,
  Star,
  Lightbulb,
} from "lucide-react";

/* ---------------------------------------------------------------------- *
 * Experience — from the real CV. Full-time and part-time roles are merged
 * into one reverse-chronological timeline, distinguished by `type`.
 * ---------------------------------------------------------------------- */
export const experienceStats = [
  { icon: Calendar, value: "8+", label: "Years in Development" },
  { icon: Users, value: "9+", label: "Years in Teaching" },
  { icon: Briefcase, value: "6+", label: "Companies & Clients" },
  { icon: Star, value: "7", label: "Roles Held" },
];

export const experienceTimeline = [
  {
    period: "Mar 2025 \u2014 Aug 2025",
    company: "PT Silvertech Indonesia",
    role: "Full Stack Developer",
    type: "Full-time",
    description:
      "Developed and maintained web applications using front-end and back-end technologies, and designed responsive interfaces with HTML, CSS, JavaScript, and React.",
    tags: ["React", "Front-End", "Back-End", "Team Collaboration"],
  },
  {
    period: "Nov 2024 \u2014 Jan 2025",
    company: "Hacktiv8",
    role: "Front End Instructor",
    type: "Part-time",
    description:
      "Conducted training sessions on React.js, Redux, Firebase, Tailwind CSS, and Next.js, and scored and reviewed student projects.",
    tags: ["React.js", "Redux", "Teaching", "Curriculum"],
  },
  {
    period: "Jul 2021 \u2014 Jan 2025",
    company: "PT. Code Development Indonesia",
    role: "Full Stack Web",
    type: "Full-time",
    description:
      "Conducted a Full Stack JavaScript Bootcamp program for aspiring developers, while developing and maintaining web applications with responsive UI in HTML, CSS, JavaScript, and React.",
    tags: ["Full Stack", "React", "Bootcamp", "Teaching"],
  },
  {
    period: "2021",
    company: "Hacktiv8",
    role: "Front End Instructor",
    type: "Full-time",
    description:
      "Conducted training on React.js, Redux, Firebase, Tailwind CSS, and Next.js, and developed course content, tutorials, and project-based learning materials.",
    tags: ["React.js", "Redux", "Teaching", "Curriculum"],
  },
  {
    period: "Feb 2018 \u2014 Sep 2019",
    company: "PT Intikom Berlian Mustika",
    role: "Front End & UI/UX Designer",
    type: "Full-time",
    description:
      "Designed wireframes, prototypes, and high-fidelity mockups in Figma and Adobe XD, and collaborated with developers to ensure accurate implementation of design specs.",
    tags: ["UI/UX", "Figma", "Adobe XD", "Front-End"],
  },
  {
    period: "2017 \u2014 2026",
    company: "Course Net Indonesia",
    role: "Full Stack Web",
    type: "Part-time",
    description:
      "Conducted training sessions on front-end and back-end development, developed course materials, and guided students and corporate employees through coding exercises and projects.",
    tags: ["Teaching", "Full Stack", "Curriculum", "Mentoring"],
  },
  {
    period: "2014 \u2014 2016",
    company: "Kompas.com",
    role: "IT Support",
    type: "Full-time",
    description:
      "Provided technical support and troubleshooting for hardware, software, and network issues, and maintained office IT infrastructure.",
    tags: ["IT Support", "Troubleshooting", "Infrastructure"],
  },
];

export const experienceWhatIDo = [
  { icon: Code2, title: "Build", description: "I build scalable, user-friendly web applications that solve real problems." },
  { icon: Users, title: "Teach", description: "I simplify complex concepts and help others grow their tech skills." },
  { icon: Lightbulb, title: "Collaborate", description: "I enjoy working with great people and turning ideas into reality." },
  { icon: TrendingUp, title: "Improve", description: "I'm always learning and improving to deliver better solutions." },
];

export const techIUse = [
  "React.js", "Next.js", "TypeScript", "Redux",
  "Node.js", "Express.js", "Prisma", "PostgreSQL",
  "MongoDB", "Firebase", "Vercel", "Git",
];
