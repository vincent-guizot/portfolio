const byteBurger = {
  slug: "byte-burger",
  index: "09",
  name: "Byte Burger",
  subtitle: "Food Ordering API",
  category: "APIs",
  year: "", // TODO
  featured: false,
  // No screenshots for APIs — the card uses this gradient instead
  coverFrom: "#c2410c",
  coverTo: "#0f172a",
  description:
    "Backend REST API for a burger ordering platform — burger catalog and categories, cart and checkout, orders with status history, payments, reviews, and favorites.",
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
    "Burger & Category CRUD",
    "Search, Pagination, Sorting & Filtering",
    "Cart & Checkout",
    "Order Management & History",
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
      "Burger Categories",
      "Burgers",
      "Burger Images",
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
      "Category 1:N Burger",
      "Burger 1:N Burger Image",
      "Burger 1:N Review",
      "User N:N Burger via Favorite",
      "User N:N Burger via Cart Item",
      "User 1:N Order",
      "Order 1:N Order Item",
      "Order 1:1 Payment",
      "Order 1:N Order Status History",
    ],
    notes: [
    ],
  },
};

export default byteBurger;
