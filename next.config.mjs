/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep production builds from overwriting files served by the dev server.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
};

export default nextConfig;
