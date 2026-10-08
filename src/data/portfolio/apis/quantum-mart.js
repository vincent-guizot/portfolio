const quantumMart = {
  slug: "quantum-mart",
  index: "12",
  name: "Quantum Mart",
  subtitle: "Retail / E-commerce API",
  category: "APIs",
  year: "", // TODO
  featured: false,
  // No screenshots for APIs — the card uses this gradient instead
  coverFrom: "#c2410c",
  coverTo: "#0f172a",
  description:
    "Backend REST API for a retail e-commerce store, managing inventory and inventory categories, cart and checkout, orders, payments, reviews, and favorites.",
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
    "Authentication",
    "Product / Inventory CRUD",
    "Search, Pagination, Filtering & Sorting",
    "Cart & Checkout",
    "Orders, Payments & Order History",
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
      "Inventory Categories",
      "Inventory",
      "Inventory Images",
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
      "Inventory Category 1:N Inventory",
      "Inventory 1:N Inventory Image",
      "Inventory 1:N Review",
      "User N:N Inventory via Favorite",
      "User N:N Inventory via Cart Item",
      "User 1:N Order",
      "Order 1:N Order Item",
      "Order 1:1 Payment",
      "Order 1:N Order Status History",
    ],
    notes: [
      "Product entities use /inventory-categories, /inventory and /inventory-images",
    ],
  },
};

export default quantumMart;
