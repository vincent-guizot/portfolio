import {
  Home as HomeIcon,
  UserRound,
  Briefcase,
  Layers,
  GraduationCap,
  Trophy,
  Image as ImageIcon,
  Mail,
  Code2,
  Database,
  Users,
  TrendingUp,
  FolderGit2,
  Calendar,
  BookOpen,
  Rocket,
  Star,
  Award,
  Medal,
  ShieldCheck,
  Heart,
  Handshake,
  Sparkles,
  Lightbulb,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Clock,
  Boxes,
  Wrench,
  Puzzle,
  Brain,
  BadgeCheck,
  Palette,
} from "lucide-react";

/* ---------------------------------------------------------------------- *
 * Profile
 *
 * Sourced from the real CV. `website` and the `social` URLs were never
 * part of the CV (it lists no personal site/social handles) — they're
 * still placeholders carried over from the template. Swap them for the
 * real ones, or the "Follow Me" / sidebar social icons will point nowhere.
 * ---------------------------------------------------------------------- */
export const profile = {
  name: "Vincent Sadino",
  greeting: "Hello, I'm",
  roles: ["Full Stack Developer", "Front-End & UI/UX Focused"],
  tagline:
    "I build responsive, user-friendly web applications and love mentoring aspiring developers through hands-on training and real-world projects.",
  email: "vincentguizot@yahoo.com",
  phone: "+62 818-1880-1005",
  location: "Jakarta Barat, DKI Jakarta, Indonesia",
  website: "vincentsadino.dev",
  availability: "Available for new opportunities",
  quote:
    "I enjoy building thoughtful interfaces and helping developers grow through hands-on mentoring.",
  social: {
    github: "https://github.com/vincentsadino",
    linkedin: "https://linkedin.com/in/vincentsadino",
    instagram: "https://instagram.com/vincentsadino",
  },
};

/* ---------------------------------------------------------------------- *
 * Navigation
 * ---------------------------------------------------------------------- */
export const navItems = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "About Me", path: "/about", icon: UserRound },
  { name: "Portfolio", path: "/portfolio", icon: Briefcase },
  { name: "Experience", path: "/experience", icon: Layers },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Achievements", path: "/achievements", icon: Trophy },
  { name: "Gallery", path: "/gallery", icon: ImageIcon },
  { name: "Contact", path: "/contact", icon: Mail },
];

/* Tint rotation reused by every icon-square across the site — cycles
   through the brand palette so nothing outside the design system is used. */
export const tintRotation = ["blue", "orange", "navy", "slate"];

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

/* ---------------------------------------------------------------------- *
 * Portfolio / Projects
 *
 * NOTE: the CV has no project list, so the entries below are still the
 * original template's placeholder projects (WareTrack, Kings Brew, etc.).
 * Replace them with real project details when you have them — see the
 * chat reply for more on this.
 * ---------------------------------------------------------------------- */
export const portfolioCategories = [
  "All",
  "Company Profile",
  "Dashboard",
  "E-commerce",
  "APIs",
  "Others",
];

export const projects = [
  {
    slug: "waretrack",
    index: "01",
    name: "WareTrack",
    subtitle: "Warehouse Management System",
    category: "Dashboard",
    year: "2024",
    featured: true,
    coverFrom: "#0f766e",
    coverTo: "#0f172a",
    description:
      "A modern warehouse management system to streamline inventory, manage locations, handle transfers, and generate real-time reports.",
    tags: ["Web Application", "SaaS", "Admin Dashboard"],
    liveUrl: "https://waretrack.app",
    sourceUrl: "https://github.com/vincentsadino/waretrack",
    techStack: [
      { name: "Next.js", role: "React framework" },
      { name: "TypeScript", role: "Static typing" },
      { name: "Shadcn UI", role: "UI components" },
      { name: "Tailwind CSS", role: "Styling" },
      { name: "PostgreSQL", role: "Database" },
      { name: "Prisma ORM", role: "Database toolkit" },
      { name: "Zustand", role: "State management" },
      { name: "React Query", role: "Data fetching" },
    ],
    features: [
      "Role Management",
      "Inventory Tracking",
      "Transfer & Receiving",
      "Reports & Analytics",
    ],
    keyFeatures: [
      { title: "Real-time Tracking", description: "Track inventory in real time across multiple locations." },
      { title: "Smart Alerts", description: "Get notified about low stock, expiring items, and more." },
      { title: "Data Insights", description: "Visualize key metrics and make data-driven decisions." },
      { title: "Role-based Access", description: "Secure access control for owners, admins, and staff." },
      { title: "Stock Transfers", description: "Track and manage stock transfers between locations." },
      { title: "Low Stock Alerts", description: "Automatic notifications when stock levels run low." },
      { title: "Reports Dashboard", description: "Export data to CSV / Excel for offline reporting." },
      { title: "Responsive UI", description: "A clean, responsive interface that works on any device." },
    ],
    myRole: {
      title: "Full Stack Developer",
      description: "I handled the entire development process from UI/UX design to front-end and back-end development.",
      points: ["Requirement analysis", "UI/UX design", "Front-end development", "Back-end development", "Database design", "Testing & deployment"],
    },
    meta: {
      projectType: "Web Application",
      projectCategory: "Dashboard",
      duration: "Feb 2024 \u2013 Apr 2024 (2 months)",
      status: "Completed",
      client: "Personal Project",
    },
    results: [
      { icon: Rocket, value: "40%", label: "Faster inventory process" },
      { icon: ShieldCheck, value: "30%", label: "Reduction in stock errors" },
      { icon: TrendingUp, value: "20+", label: "Reports generated" },
      { icon: Star, value: "100%", label: "User satisfaction from testers" },
    ],
    screenshots: ["Dashboard", "Inventory List", "Stock Transfers", "Reports"],
  },
  {
    slug: "kings-brew",
    index: "02",
    name: "Kings Brew",
    subtitle: "Coffee Ordering Experience",
    category: "E-commerce",
    year: "2024",
    featured: false,
    coverFrom: "#78350f",
    coverTo: "#1c1917",
    description:
      "A fun and interactive coffee ordering app with a game-like experience for baristas and customers.",
    tags: ["Web Application", "Ordering System"],
    liveUrl: "https://kingsbrew.app",
    sourceUrl: "https://github.com/vincentsadino/kings-brew",
    techStack: [
      { name: "Next.js", role: "React framework" },
      { name: "Zustand", role: "State management" },
      { name: "Tailwind CSS", role: "Styling" },
      { name: "Node.js", role: "Backend runtime" },
    ],
    features: ["Order Management", "Game-like UI", "Payment & Pickup"],
    keyFeatures: [
      { title: "Order Management", description: "A streamlined queue for baristas to track incoming orders." },
      { title: "Game-like UI", description: "Playful, reward-driven ordering flow that keeps customers engaged." },
      { title: "Payment & Pickup", description: "Simple checkout with pickup-time estimates." },
    ],
    myRole: {
      title: "Full Stack Developer",
      description: "Designed the ordering flow and built the full application end-to-end.",
      points: ["UI/UX design", "Front-end development", "Back-end development"],
    },
    meta: {
      projectType: "Web Application",
      projectCategory: "E-commerce",
      duration: "3 weeks",
      status: "Completed",
      client: "Personal Project",
    },
    results: [
      { icon: Rocket, value: "2x", label: "Faster order throughput" },
      { icon: Star, value: "98%", label: "Positive tester feedback" },
    ],
    screenshots: ["Menu", "Order Flow", "Checkout"],
  },
  {
    slug: "orange-lms-v3",
    index: "03",
    name: "Orange LMS V3",
    subtitle: "Learning Management System",
    category: "Dashboard",
    year: "2024",
    featured: false,
    coverFrom: "#1d4ed8",
    coverTo: "#0f172a",
    description:
      "A learning management platform for classes, meetings, tasks, materials, and progress tracking.",
    tags: ["Web Application", "Education"],
    liveUrl: "https://orangelms.app",
    sourceUrl: "https://github.com/vincentsadino/orange-lms",
    techStack: [
      { name: "Next.js", role: "React framework" },
      { name: "TypeScript", role: "Static typing" },
      { name: "PostgreSQL", role: "Database" },
      { name: "Prisma ORM", role: "Database toolkit" },
    ],
    features: ["Class & Meeting", "Task & Submission", "Attendance", "Progress Tracking"],
    keyFeatures: [
      { title: "Class & Meetings", description: "Schedule and run live classes with attendance built in." },
      { title: "Task & Submission", description: "Assign work and collect submissions in one place." },
      { title: "Progress Tracking", description: "Track each student's progress across every course." },
    ],
    myRole: {
      title: "Full Stack Developer",
      description: "Built the platform from curriculum structure through to deployment.",
      points: ["Requirement analysis", "Front-end development", "Back-end development", "Deployment"],
    },
    meta: {
      projectType: "Web Application",
      projectCategory: "Dashboard",
      duration: "2 months",
      status: "Completed",
      client: "Orange Kode",
    },
    results: [
      { icon: Users, value: "1000+", label: "Students onboarded" },
      { icon: TrendingUp, value: "35%", label: "Higher completion rate" },
    ],
    screenshots: ["Overview", "Class Detail", "Task Board"],
  },
  {
    slug: "matchmaking-app",
    index: "04",
    name: "MatchMaking App",
    subtitle: "Dating & Matchmaking Platform",
    category: "Others",
    year: "2023",
    featured: false,
    coverFrom: "#9d174d",
    coverTo: "#1e1b4b",
    description:
      "A matchmaking platform that connects people with meaningful connections.",
    tags: ["Mobile App", "Social"],
    liveUrl: "https://matchmaking.app",
    sourceUrl: "https://github.com/vincentsadino/matchmaking-app",
    techStack: [
      { name: "React", role: "UI library" },
      { name: "Redux Toolkit", role: "State management" },
      { name: "Express.js", role: "Backend framework" },
      { name: "MongoDB", role: "Database" },
    ],
    features: ["User Matching", "Chat System", "Notifications", "Profile Management"],
    keyFeatures: [
      { title: "User Matching", description: "A preference-based matching algorithm connects compatible users." },
      { title: "Chat System", description: "Real-time messaging between matched users." },
      { title: "Notifications", description: "Push notifications for new matches and messages." },
    ],
    myRole: {
      title: "Full Stack Developer",
      description: "Built the matching logic, chat system, and mobile-first interface.",
      points: ["UI/UX design", "Front-end development", "Back-end development", "API integration"],
    },
    meta: {
      projectType: "Mobile Application",
      projectCategory: "Others",
      duration: "6 weeks",
      status: "Completed",
      client: "Startup Client",
    },
    results: [
      { icon: Users, value: "5k+", label: "Matches created" },
      { icon: Star, value: "4.6/5", label: "Average app rating" },
    ],
    screenshots: ["Discover", "Chat", "Profile"],
  },
  {
    slug: "lumina-corp",
    index: "05",
    name: "Lumina Corp",
    subtitle: "Corporate Company Profile Website",
    category: "Company Profile",
    year: "2023",
    featured: false,
    coverFrom: "#334155",
    coverTo: "#0f172a",
    description:
      "A clean, content-driven company profile site showcasing services, team, and case studies for a consulting firm.",
    tags: ["Company Profile", "Marketing Site"],
    liveUrl: "https://luminacorp.example.com",
    sourceUrl: "https://github.com/vincentsadino/lumina-corp",
    techStack: [
      { name: "Next.js", role: "React framework" },
      { name: "Tailwind CSS", role: "Styling" },
      { name: "Figma", role: "Design" },
    ],
    features: ["Service Pages", "Team Showcase", "Case Studies", "Contact Form"],
    keyFeatures: [
      { title: "Service Pages", description: "Clear, structured pages for each service offering." },
      { title: "Team Showcase", description: "Profiles introducing the people behind the company." },
      { title: "Case Studies", description: "Real project write-ups that build client trust." },
    ],
    myRole: {
      title: "Front End & UI/UX Designer",
      description: "Designed the visual identity and built the responsive front-end.",
      points: ["UI/UX design", "Front-end development", "Content structuring"],
    },
    meta: {
      projectType: "Web Application",
      projectCategory: "Company Profile",
      duration: "3 weeks",
      status: "Completed",
      client: "Consulting Firm",
    },
    results: [
      { icon: Rocket, value: "2x", label: "More inbound inquiries" },
      { icon: Star, value: "95%", label: "Client satisfaction" },
    ],
    screenshots: ["Home", "Services", "About"],
  },
  {
    slug: "authgate-api",
    index: "06",
    name: "AuthGate API",
    subtitle: "RESTful Authentication Service",
    category: "APIs",
    year: "2022",
    featured: false,
    coverFrom: "#4338ca",
    coverTo: "#0f172a",
    description:
      "A RESTful authentication and authorization API used across multiple internal products, handling login, roles, and token management.",
    tags: ["API", "Backend Service"],
    liveUrl: "https://authgate.example.com/docs",
    sourceUrl: "https://github.com/vincentsadino/authgate-api",
    techStack: [
      { name: "Node.js", role: "Runtime" },
      { name: "Express.js", role: "API framework" },
      { name: "PostgreSQL", role: "Database" },
      { name: "Prisma ORM", role: "Database toolkit" },
    ],
    features: ["JWT Authentication", "Role-based Access", "Rate Limiting", "API Documentation"],
    keyFeatures: [
      { title: "JWT Authentication", description: "Secure, stateless authentication across services." },
      { title: "Role-based Access", description: "Fine-grained permissions for different user roles." },
      { title: "Rate Limiting", description: "Protects endpoints from abuse and traffic spikes." },
    ],
    myRole: {
      title: "Back End Developer",
      description: "Designed and built the API, its data model, and its documentation.",
      points: ["API design", "Database design", "Testing & deployment", "Documentation"],
    },
    meta: {
      projectType: "REST API",
      projectCategory: "APIs",
      duration: "1 month",
      status: "Completed",
      client: "Internal Product",
    },
    results: [
      { icon: ShieldCheck, value: "99.9%", label: "Uptime" },
      { icon: Rocket, value: "5+", label: "Products integrated" },
    ],
    screenshots: ["API Docs", "Endpoints", "Dashboard"],
  },
];

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

/* ---------------------------------------------------------------------- *
 * Gallery
 *
 * NOTE: the CV has no photos/gallery content. Everything below is still
 * the original template's placeholder content.
 * ---------------------------------------------------------------------- */
export const galleryCategories = ["All", "Work & Projects", "Events & Workshops", "Travel", "Learning", "Life"];

export const galleryStats = [
  { icon: ImageIcon, value: "250+", label: "Photos" },
  { icon: Rocket, value: "40+", label: "Events Documented" },
  { icon: MapPin, value: "15+", label: "Countries Visited" },
  { icon: Star, value: "100+", label: "Memories Captured" },
];

export const galleryItems = [
  {
    id: "coding-new-features",
    title: "Coding New Features",
    category: "Work & Projects",
    date: "May 12, 2024",
    coverFrom: "#1e293b",
    coverTo: "#0f172a",
    location: "Jakarta, Indonesia",
    description: "A late-night session shipping a new feature \u2014 the best kind of focused, quiet work.",
    tags: ["Code", "Focus", "Craft"],
    camera: "iPhone 14 Pro",
    shotOn: "Studio desk",
    likes: 64,
  },
  {
    id: "tech-talk-2024",
    title: "Tech Talk: Building Scalable Apps",
    category: "Events & Workshops",
    date: "Mar 18, 2024",
    coverFrom: "#1d4ed8",
    coverTo: "#0f172a",
    location: "Jakarta, Indonesia",
    description: "Sharing lessons on building scalable applications with a room full of curious developers.",
    tags: ["Speaking", "Community", "Architecture"],
    camera: "Canon EOS R6",
    shotOn: "24mm \u00b7 f/4 \u00b7 1/60s",
    likes: 152,
  },
  {
    id: "exploring-banff",
    title: "Exploring Banff, Canada",
    category: "Travel",
    date: "Aug 24, 2023",
    coverFrom: "#0e7490",
    coverTo: "#164e63",
    location: "Banff National Park, Alberta, Canada",
    description:
      "One of the most breathtaking places I've ever visited. The combination of mountains, lakes, and fresh air made this trip unforgettable.",
    tags: ["Travel", "Nature", "Adventure"],
    camera: "Canon EOS R6",
    shotOn: "24mm \u00b7 f/8 \u00b7 1/125s \u00b7 ISO 100",
    likes: 128,
  },
  {
    id: "learning-typescript",
    title: "Learning TypeScript Deeply",
    category: "Learning",
    date: "Jan 10, 2024",
    coverFrom: "#334155",
    coverTo: "#0f172a",
    location: "Jakarta, Indonesia",
    description: "Deep-diving into advanced TypeScript patterns \u2014 generics, utility types, and more.",
    tags: ["Learning", "TypeScript", "Growth"],
    camera: "iPhone 14 Pro",
    shotOn: "Home office",
    likes: 47,
  },
  {
    id: "web-dev-bootcamp",
    title: "Web Development Bootcamp",
    category: "Events & Workshops",
    date: "Feb 25, 2024",
    coverFrom: "#c2410c",
    coverTo: "#7c2d12",
    location: "Jakarta, Indonesia",
    description: "A full day teaching a new cohort the fundamentals of full stack web development.",
    tags: ["Teaching", "Bootcamp", "Community"],
    camera: "Canon EOS R6",
    shotOn: "35mm \u00b7 f/5.6 \u00b7 1/100s",
    likes: 96,
  },
  {
    id: "sunset-singapore",
    title: "Sunset in Singapore",
    category: "Travel",
    date: "Jul 07, 2023",
    coverFrom: "#b45309",
    coverTo: "#1e1b4b",
    location: "Marina Bay, Singapore",
    description: "A golden-hour view over Marina Bay after a long day of conference talks.",
    tags: ["Travel", "Skyline", "Golden Hour"],
    camera: "iPhone 14 Pro",
    shotOn: "Marina Bay Sands",
    likes: 141,
  },
  {
    id: "designing-ui-ux",
    title: "Designing UI/UX",
    category: "Work & Projects",
    date: "Apr 03, 2024",
    coverFrom: "#1e40af",
    coverTo: "#0f172a",
    location: "Jakarta, Indonesia",
    description: "Sketching new interface ideas before bringing them to life in code.",
    tags: ["Design", "UI/UX", "Process"],
    camera: "iPhone 14 Pro",
    shotOn: "Studio desk",
    likes: 73,
  },
  {
    id: "hiking-adventure",
    title: "Hiking Adventure",
    category: "Life",
    date: "Sep 14, 2023",
    coverFrom: "#166534",
    coverTo: "#052e16",
    location: "Bromo, Indonesia",
    description: "Chasing sunrise at 2,300 meters \u2014 a reminder to unplug and recharge.",
    tags: ["Hiking", "Nature", "Life"],
    camera: "Canon EOS R6",
    shotOn: "16mm \u00b7 f/8 \u00b7 1/250s",
    likes: 118,
  },
];

/* ---------------------------------------------------------------------- *
 * Contact — pulls straight from `profile`, so updating profile above is
 * enough to keep this in sync.
 * ---------------------------------------------------------------------- */
export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    note: "I usually reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    note: "Mon - Fri, 9:00 AM - 6:00 PM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    note: "Open to Remote Work",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open for new opportunities",
    note: "Full-time / Freelance / Consulting",
  },
];

/* ---------------------------------------------------------------------- *
 * Icon-square tint helper — used by IconCard everywhere.
 * ---------------------------------------------------------------------- */
export const tintStyles = {
  blue: { background: "var(--tint-blue)", color: "var(--color-primary-blue)" },
  orange: { background: "var(--tint-orange)", color: "var(--color-primary-orange)" },
  navy: { background: "var(--tint-navy)", color: "var(--color-dark-navy)" },
  slate: { background: "var(--tint-slate)", color: "var(--color-slate-gray)" },
};

export const socialIcons = { Github, Linkedin, Instagram };
export const uiIcons = { Puzzle, Wrench };

/* ---------------------------------------------------------------------- *
 * Tech logos — real brand marks shipped in /public (see the logo-*.png
 * files). Looked up by the exact skill/tech name used elsewhere in this
 * file; anything not listed here just falls back to a generic icon in
 * the component that renders it.
 * ---------------------------------------------------------------------- */
export const techLogos = {
  "React": "/logo-react.png",
  "React.js": "/logo-react.png",
  "Next.js": "/logo-nextjs.png",
  "TypeScript": "/logo-typescript.png",
  "JavaScript": "/logo-javascript.png",
  "Tailwind CSS": "/logo-tailwind.png",
  "Bootstrap": "/logo-bootstrap.png",
  "Node.js": "/logo-nodejs.png",
  "Express.js": "/logo-express.png",
  "Prisma": "/logo-prisma.png",
  "Prisma ORM": "/logo-prisma.png",
  "Sequelize": "/logo-sequelize.png",
  "Sequelize ORM": "/logo-sequelize.png",
  "PostgreSQL": "/logo-postgres.png",
  "MongoDB": "/logo-mongodb.png",
  "MongoDB Atlas": "/logo-mongodb.png",
  "Firebase": "/logo-firebase.png",
  "Git": "/logo-git.png",
  "GitHub": "/logo-github.png",
  "GitLab": "/logo-gitlab.png",
  "BitBucket": "/logo-bitbucket.png",
  "Vercel": "/logo-vercel.png",
  "Render": "/logo-render.png",
  "Figma": "/logo-figma.png",
  "Axios": "/logo-axios.png",
  "Shadcn": "/logo-shadcn.png",
  "Shadcn UI": "/logo-shadcn.png",
  "HTML": "/logo-html5.png",
  "HTML5": "/logo-html5.png",
  "CSS": "/logo-css3.png",
  "CSS3": "/logo-css3.png",
  "SCSS/SASS": "/logo-css3.png",
  "JSON": "/logo-json.png",
  "Python": "/logo-python.png",
  "Flutter": "/logo-flutter.png",
  "Firestore": "/logo-database.png",
  "Neon": "/logo-database.png",
  "Supabase": "/logo-database.png",
};
