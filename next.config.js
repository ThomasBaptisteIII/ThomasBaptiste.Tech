/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withEslint = require('next/dist/client/withEslint');

module.exports = withEslint({
  eslint: false,
});