/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: './', // Required for GitHub Pages
    images: {
      unoptimized: true, // Avoids image optimization
    },
  };
  
  module.exports = nextConfig;
  