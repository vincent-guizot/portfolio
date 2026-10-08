const pineappleStack = {
  slug: "pineapple-stack",
  index: "18",
  name: "Pineapple Stack",
  subtitle: "Forum / Discussion API",
  category: "APIs",
  year: "", // TODO
  featured: false,
  // No screenshots for APIs — the card uses this gradient instead
  coverFrom: "#1d4ed8",
  coverTo: "#0f172a",
  description:
    "Backend for a discussion forum — threads, comments, likes, stars, and notifications, with search and category filtering.",
  tags: ["REST API", "Operations Core"],
  liveUrl: "", // TODO Swagger / Render URL
  sourceUrl: "", // TODO
  techStack: [
    { name: "NestJS", role: "Backend framework" },
    { name: "PostgreSQL", role: "Database" },
    { name: "Neon", role: "Hosted PostgreSQL" },
    { name: "Swagger", role: "API documentation" },
    { name: "JWT", role: "Bearer authentication" },
    { name: "Render", role: "Deployment" },
  ],
  features: [
    "Authentication & Role Authorization",
    "Threads",
    "Comments",
    "Likes & Stars",
    "Notifications",
    "Search & Category Filter",
    "Audit Logs",
  ],
  keyFeatures: [],
  myRole: null, // TODO
  meta: {
    projectType: "REST API",
    projectCategory: "APIs",
    duration: "", // TODO
    status: "Live",
    client: "Bootcamp Study Case",
  },
  results: [],
  screenshots: [],
  api: {
    core: "Operations Core",
    database: "Neon PostgreSQL (shared by the 5 Operations Core APIs)",
    idType: "UUID",
    // Only fill this with the real count from Swagger — never estimate.
    endpointCount: "Not yet counted from Swagger",
    resources: [
      "Users",
      "Threads",
      "Thread Comments",
      "Thread Likes",
      "Thread Stars",
      "Notifications",
      "Audit Logs",
    ],
    relations: [
      "User 1:N Thread",
      "Thread 1:N Thread Comment",
      "User N:N Thread via Thread Like",
      "User N:N Thread via Thread Star",
      "User 1:N Notification",
    ],
    notes: [
      "Threads have title, body, category and slug",
      "Category is a free-form string, not a foreign key — there is no Category table",
      "Threads can be filtered by search and category",
    ],
  },
};

export default pineappleStack;
