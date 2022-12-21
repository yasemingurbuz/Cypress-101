const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "nkj2q3",
  dashBoardRun: 
  
  "npx cypress run --record --key 0336c68b-4dbf-4f8f-b57f-4f98a5fe35b5",
  
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    experimentalWebKitSupport: true
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
