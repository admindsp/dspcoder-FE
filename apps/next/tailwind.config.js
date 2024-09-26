const baseConfig = require("@dspcoder/ui/tailwind.config");

module.exports = {
  presets: [baseConfig],
  theme: {
    extend: {
      colors: {
        whitish: "#c5c5c5",
        purplish: "#3f3cbb",
        darkish: "#1A1A1A",
        grayish: "#3b3939",
      },
    },
    keyframes: {
      shimmer: {
        "0%": { backgroundPosition: "-400px 0" },
        "100%": { backgroundPosition: "400px 0" },
      },
    },
    animation: {
      shimmer: "shimmer 1.5s infinite ease-in-out",
    },
  },
};
