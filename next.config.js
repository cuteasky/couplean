module.exports = {
  reactStrictMode: true,
  env: {
    appName: "Couplean",
    appBy: "Rizki Maulana",
  },

  images: {
    domains: ["1.bp.blogspot.com", "i.pinimg.com", "softwaretempur.com"],
  },

  async rewrites() {
    return [
      {
        source: "/register",
        destination: "/auth/register",
      },
    ];
  },
};
