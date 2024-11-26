/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes for static files
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  assetPrefix: './', // Fix relative paths for GitHub Pages
  // No basePath needed for user sites
};

module.exports = nextConfig;
