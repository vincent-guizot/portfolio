const tradeHub = {
  slug: "trade-hub",
  index: "13",
  name: "Trade Hub",
  subtitle: "E-commerce Marketplace API",
  category: "APIs",
  year: "", // TODO
  featured: false,
  // No screenshots for APIs — the card uses this gradient instead
  coverFrom: "#c2410c",
  coverTo: "#0f172a",
  description:
    "Backend REST API for an e-commerce marketplace, managing the product catalog and catalog categories, cart and checkout, orders, payments, reviews, and favorites.",
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
    "Catalog & Catalog Category Management",
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
      "Catalog Categories",
      "Catalog",
      "Catalog Images",
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
      "Catalog Category 1:N Catalog",
      "Catalog 1:N Catalog Image",
      "Catalog 1:N Review",
      "User N:N Catalog via Favorite",
      "User N:N Catalog via Cart Item",
      "User 1:N Order",
      "Order 1:N Order Item",
      "Order 1:1 Payment",
      "Order 1:N Order Status History",
    ],
    notes: [
      "Product entities use /catalog-categories, /catalog and /catalog-images",
      "Catalog reviews use /reviews/catalog/{id}",
    ],
  },
};

export default tradeHub;
