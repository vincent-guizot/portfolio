import {
  GraduationCap,
  Trophy,
  Users,
  FolderGit2,
  Rocket,
  Star,
  Award,
  Medal,
  ShieldCheck,
  Lightbulb,
  Boxes,
  BadgeCheck,
} from "lucide-react";

/* ---------------------------------------------------------------------- *
 * Achievements
 *
 * NOTE: the CV has no awards/achievements section at all. Everything
 * below is still the original template's placeholder content — see the
 * chat reply for how to handle this page.
 * ---------------------------------------------------------------------- */
export const achievementStats = [
  { icon: Medal, value: "15+", label: "Awards & Recognitions" },
  { icon: Users, value: "8+", label: "Years in Teaching" },
  { icon: GraduationCap, value: "1000+", label: "Students Trained" },
  { icon: Star, value: "50+", label: "Projects Completed" },
];

export const awards = [
  {
    year: "2023",
    icon: Trophy,
    title: "Best Mentor Award",
    description: "Awarded for outstanding dedication in mentoring and empowering junior developers.",
    issuer: "Orange Kode Bootcamp",
  },
  {
    year: "2022",
    icon: Award,
    title: "High Merit Graduate",
    description: "Graduated with High Merit for excellence in academics and leadership contributions.",
    issuer: "Bina Nusantara University",
  },
  {
    year: "2021",
    icon: Medal,
    title: "Top Instructor",
    description: "Recognized as one of the top instructors for exceptional teaching and impact.",
    issuer: "Dicoding Indonesia",
  },
  {
    year: "2020",
    icon: ShieldCheck,
    title: "Outstanding Contributor",
    description: "Contributed to open source projects and tech communities with meaningful impact.",
    issuer: "GitHub Community",
  },
];

export const keyAchievements = [
  { icon: Users, title: "Trained 1000+ Students", description: "Helped more than 1000 students start their career in tech through training and mentoring." },
  { icon: FolderGit2, title: "Open Source Contributor", description: "Actively contributing to open source projects and sharing knowledge with the community." },
  { icon: Rocket, title: "50+ Successful Projects", description: "Completed and delivered 50+ projects across various industries and technologies." },
  { icon: Boxes, title: "Curriculum Developer", description: "Designed and developed practical curriculum for web development bootcamps." },
  { icon: BadgeCheck, title: "Tech Speaker", description: "Invited to speak and share knowledge in webinars, bootcamps, and tech events." },
  { icon: Lightbulb, title: "Lifelong Learner", description: "Always learning new technologies and improving skills to stay relevant and add more value." },
];

export const highlights = [
  "Consistent hard work and dedication",
  "Passion for teaching and sharing",
  "Strong problem solving mindset",
  "Positive impact on many lives",
  "Always open to new challenges",
];
