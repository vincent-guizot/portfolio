const castleKitchen = {
  slug: "castle-kitchen",
  index: "11",
  name: "Castle Kitchen",
  subtitle: "Restaurant / Steak Ordering API",
  category: "APIs",
  year: "", // TODO
  featured: false,
  // No screenshots for APIs — the card uses this gradient instead
  coverFrom: "#c2410c",
  coverTo: "#0f172a",
  description:
    "Backend REST API for a restaurant / steak ordering platform, managing the menu and menu categories, cart, orders, payments, reviews, and favorites.",
  tags: ["REST API", "Commerce Core"],
  liveUrl: "", // TODO Swagger / Render URL
  sourceUrl: "", // TODO
  techStack: [
    { name: "NestJS", role: "Backend framework" },
    { name: "PostgreSQL", role: "Database" },
    { name: "Supabase", role: "Hosted PostgreSQL" },
    { name: "Swagger", role: "API documentation" },
    { name: "JWT", role: "Bearer authentication" },
    { name: "Render", role: "Deployment" },
  ],
  features: [
    "Authentication & Authorization",
    "Menu & Menu Category Management",
    "Cart & Checkout",
    "Orders & Order History",
    "Payments",
    "Reviews & Favorites",
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
    core: "Commerce Core",
    database: "Supabase PostgreSQL (shared by the 5 Commerce Core APIs)",
    idType: "Numeric ID",
    // Only fill this with the real count from Swagger — never estimate.
    endpointCount: "Not yet counted from Swagger",
    resources: [
      "Users",
      "Menu Categories",
      "Menu",
      "Menu Images",
      "Cart",
      "Orders",
      "Order Items",
      "Payments",
      "Reviews",
      "Favorites",
      "Order Status History",
      "Audit Logs",
    ],
    relations: [
      "Menu Category 1:N Menu",
      "Menu 1:N Menu Image",
      "Menu 1:N Review",
      "User N:N Menu via Favorite",
      "User N:N Menu via Cart Item",
      "User 1:N Order",
      "Order 1:N Order Item",
      "Order 1:1 Payment",
      "Order 1:N Order Status History",
    ],
    notes: [
      "Product entities use /menu-categories, /menu and /menu-images",
      "Product reviews use /reviews/product/{id}",
      "No /stats or /public/* endpoints (unlike Kings Brew)",
    ],
  },
};

export default castleKitchen;
