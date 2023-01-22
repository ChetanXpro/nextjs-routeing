/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      "mongodb+srv://chetan:chetan@cluster0.tr5f1lc.mongodb.net/SuperHero?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
