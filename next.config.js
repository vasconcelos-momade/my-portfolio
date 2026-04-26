const path = require("path");
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack must resolve `next` from the real project root (fixes Docker + bind mount).
  turbopack: {
    root: path.resolve(__dirname)
  }
};

module.exports = withNextIntl(nextConfig);
