const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: true, 
    setupNodeEvents(on, config) {
    },
  },
});
