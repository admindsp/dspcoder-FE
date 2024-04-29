const baseConfig = require("@dspcoder/ui/tailwind.config");

module.exports = {
  presets: [baseConfig],
  theme: {
    extend: {
      colors: {
        whitish: "#ffffff",
        purplish: "#3f3cbb",
      },
    },
  },
};
