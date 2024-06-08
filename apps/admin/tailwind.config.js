const baseConfig = require("@dspcoder/ui/tailwind.config");

module.exports = {
  presets: [baseConfig],
  theme: {
    extend: {
      colors: {
        whitish: "#c5c5c5",
        purplish: "#3f3cbb",
        darkish: "#1e1e1e",
      },
    },
  },
};
