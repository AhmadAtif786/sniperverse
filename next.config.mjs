/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Important for generating static HTML files
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
