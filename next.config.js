/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
}

const path = require('node:path');

const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, 'src/styles'),
    };

    return config;
  },
};

module.exports = nextConfig;
