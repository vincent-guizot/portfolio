const codigram = {
  slug: "codigram",
  index: "17",
  name: "Codigram",
  subtitle: "Photo-based Social Media API",
  category: "APIs",
  year: "", // TODO
  featured: false,
  // No screenshots for APIs — the card uses this gradient instead
  coverFrom: "#1d4ed8",
  coverTo: "#0f172a",
  description:
    "Backend for a photo-based social media app — categorized posts, comments, likes, and notifications.",
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
    "Posts & Post Categories",
    "Comments",
    "Likes (toggle)",
    "Notifications",
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
      "Post Categories",
      "Posts",
      "Post Comments",
      "Post Likes",
      "Notifications",
      "Audit Logs",
    ],
    relations: [
      "Post Category 1:N Post",
      "User 1:N Post",
      "Post 1:N Post Comment",
      "User N:N Post via Post Like",
      "User 1:N Notification",
    ],
    notes: [
      "Likes use a toggle model",
    ],
  },
};

export default codigram;
