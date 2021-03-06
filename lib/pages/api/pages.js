const getPagesManifest = require("../../helpers/getPagesManifest");
const isApiRoute = require("../../helpers/isApiRoute");

// Collect pages
const pages = [];

// Get HTML and SSR pages and API endpoints from the NextJS pages manifest
const pagesManifest = getPagesManifest();

// Parse pages
Object.entries(pagesManifest).forEach(([route, filePath]) => {
  // Skip non-API endpoints
  if (!isApiRoute(route)) return;

  // Add page
  pages.push({ route, filePath });
});

module.exports = pages;
