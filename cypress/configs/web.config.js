import { defineConfig } from "cypress";

export default defineConfig({
    video: false,
    e2e: {
        baseUrl: "web.dev.treinta.co",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});