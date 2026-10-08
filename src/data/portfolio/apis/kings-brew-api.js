const kingsBrewApi = {
  slug: "kings-brew-api",
  index: "10",
  name: "Kings Brew",
  subtitle: "Coffee Ordering API",
  category: "APIs",
  year: "", // TODO
  featured: false,
  // No screenshots for APIs — the card uses this gradient instead
  coverFrom: "#c2410c",
  coverTo: "#0f172a",
  description:
    "Backend REST API for a coffee ordering platform and the most complete API in the Commerce Core — on top of the catalog, cart, order, and payment flow it adds health, statistics, monitoring, and activity endpoints, plus public endpoints.",
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
    "Authentication & Role Authorization",
    "Coffee & Category CRUD",
    "Search, Pagination, Filtering & Sorting",
    "Cart & Checkout",
    "Orders, Payments & Order History",
    "Reviews & Favorites",
    "Monitoring & Statistics",
    "Public Endpoints",
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
      "Coffee Categories",
      "Coffees",
      "Coffee Images",
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
      "Coffee Category 1:N Coffee",
      "Coffee 1:N Coffee Image",
      "Coffee 1:N Review",
      "User N:N Coffee via Favorite",
      "User N:N Coffee via Cart Item",
      "User 1:N Order",
      "Order 1:N Order Item",
      "Order 1:1 Payment",
      "Order 1:N Order Status History",
    ],
    notes: [
      "Additional endpoints: /health, /stats, /monitoring, /activities",
      "Public endpoints: /public/orders, /public/payments, /public/cart, /public/favorites, /public/order-status-history",
    ],
  },
};

export default kingsBrewApi;
