/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  basePath: '/mcdeliciascampestres',
  assetPrefix: '/mcdeliciascampestres',
};

module.exports = nextConfig;
