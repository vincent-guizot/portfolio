const waretrackApi = {
  slug: "waretrack-api",
  index: "16",
  name: "WareTrack",
  subtitle: "Warehouse & Inventory Management API",
  category: "APIs",
  year: "", // TODO
  featured: false,
  // No screenshots for APIs — the card uses this gradient instead
  coverFrom: "#1d4ed8",
  coverTo: "#0f172a",
  description:
    "Warehouse and inventory management backend and the Operations Core API with the most complex relations — products, warehouses and locations, stock and stock movements, supplier purchases, and inter-warehouse transfers.",
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
    "Products, Categories & Brands",
    "Warehouses & Warehouse Locations",
    "Stock & Stock Movements",
    "Suppliers & Purchases",
    "Warehouse Transfers",
    "Settings",
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
      "Product Categories",
      "Products",
      "Brands",
      "Warehouses",
      "Warehouse Locations",
      "Stocks",
      "Stock Movements",
      "Suppliers",
      "Purchases",
      "Purchase Items",
      "Transfers",
      "Transfer Items",
      "Settings",
      "Audit Logs",
    ],
    relations: [
      "Product Category 1:N Product",
      "Brand 1:N Product",
      "Warehouse 1:N Warehouse Location",
      "Product 1:N Stock",
      "Warehouse 1:N Stock",
      "Stock 1:N Movement",
      "Supplier 1:N Purchase",
      "Purchase 1:N Purchase Item",
      "Transfer 1:N Transfer Item",
    ],
    notes: [
      "Products store SKU, unit, costPrice, sellingPrice, minimumQty and maximumQty",
      "Stock is keyed by warehouseId + productId [+ locationId]",
      "Movement types: PURCHASE, SALE, TRANSFER, ADJUSTMENT",
      "Purchases have a unique invoice, purchaseDate and status (PENDING, COMPLETED, CANCELLED)",
      "Transfers have a unique code, fromWarehouseId, toWarehouseId and status — a COMPLETED transfer actually moves the stock",
      "Settings is a single row",
    ],
  },
};

export default waretrackApi;
