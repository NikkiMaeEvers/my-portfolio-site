const daisyui = require('daisyui'); // Require DaisyUI using CommonJS

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust based on your project
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Use the DaisyUI plugin
  daisyui: {
    themes: [
      {
        newTheme: {
          primary: "#F0B3F7",    // Lilac for primary buttons, links, etc.
          secondary: "#FFC1E3",  // Soft pink for secondary elements
          accent: "#3D2B56",     // Dark purple for highlights
          neutral: "#333333",    // Dark gray for text
          "base-100": "#FFFFFF", // White for background
          info: "#93C5FD",       // Light blue for informational elements
          success: "#36D399",    // Green for success messages
          warning: "#FBBD23",    // Yellow for warning messages
          error: "#F87272",      // Red for error messages
        },
      },
      "dark",
    ],
  },
};

// {
//   originalTheme: {
//     primary: "#D6A4D9",    // Lilac for primary buttons, links, etc.
//     secondary: "#FFC1E3",  // Soft pink for secondary elements
//     accent: "#8A2BE2",     // Dark purple for highlights
//     neutral: "#333333",    // Dark gray for text
//     "base-100": "#FFFFFF", // White for background
//     info: "#93C5FD",       // Light blue for informational elements
//     success: "#36D399",    // Green for success messages
//     warning: "#FBBD23",    // Yellow for warning messages
//     error: "#F87272",      // Red for error messages
//   },
// },
