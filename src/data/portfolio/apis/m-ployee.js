const mPloyee = {
  slug: "m-ployee",
  index: "14",
  name: "M-ployee",
  subtitle: "Employee Information System (HRIS) API",
  category: "APIs",
  year: "", // TODO
  featured: false,
  // No screenshots for APIs — the card uses this gradient instead
  coverFrom: "#1d4ed8",
  coverTo: "#0f172a",
  description:
    "HRIS backend for managing employee information — a region → country → location → department hierarchy, jobs, employee profiles, and each employee's dependents.",
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
    "Region, Country & Location Hierarchy",
    "Departments & Jobs",
    "Employee Profiles",
    "Employee Dependents",
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
      "Regions",
      "Countries",
      "Locations",
      "Departments",
      "Jobs",
      "Employee Profiles",
      "Dependents",
      "Audit Logs",
    ],
    relations: [
      "Region → Country → Location → Department → Employee Profile",
      "Job → Employee Profile",
      "User 1:1 Employee Profile",
      "Employee Profile → Dependents",
    ],
    notes: [
      "Users register first; an admin then links the user to an Employee Profile",
      "Employee Profiles and Dependents require an admin token",
      "Countries are queried with ?regionId=",
      "Locations are queried with ?countryId=",
    ],
  },
};

export default mPloyee;
