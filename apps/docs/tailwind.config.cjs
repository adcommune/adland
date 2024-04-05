const tailwindConfig = require("@repo/tailwind-config");

module.exports = {
  content: ["./docs/**/*.{html,md,mdx,tsx,js,jsx}"],
  ...tailwindConfig,
};
