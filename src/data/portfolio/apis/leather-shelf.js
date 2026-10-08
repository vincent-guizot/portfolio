const leatherShelf = {
  slug: "leather-shelf",
  index: "15",
  name: "Leather Shelf",
  subtitle: "Library Management API",
  category: "APIs",
  year: "", // TODO
  featured: false,
  // No screenshots for APIs — the card uses this gradient instead
  coverFrom: "#1d4ed8",
  coverTo: "#0f172a",
  description:
    "Library management backend for managing books together with their publishers, authors, and genres, plus reader reviews.",
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
    "Book Management (ISBN, year, cover, copies)",
    "Publishers, Authors & Genres",
    "Book Reviews (one per user per book)",
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
      "Publishers",
      "Books",
      "Authors",
      "Genres",
      "Reviews",
      "Audit Logs",
    ],
    relations: [
      "Publisher 1:N Book",
      "Book N:N Author",
      "Book N:N Genre",
      "Book 1:N Review",
    ],
    notes: [
      "Books store ISBN, publishedYear, coverUrl and totalCopies",
      "A publisher is required when creating a book",
      "One review per user per book — duplicates are rejected with HTTP 409",
      "Reviews are only available via /books/{id}/reviews",
    ],
  },
};

export default leatherShelf;
