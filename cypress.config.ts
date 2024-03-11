import { defineConfig } from 'cypress';
import { addXrayResultUpload, configureXrayPlugin } from "cypress-xray-plugin";

export default defineConfig({
  e2e: {
    specPattern:'**.cy.js',
		async setupNodeEvents(on, config) {
      await configureXrayPlugin(
          config,
          {
              jira: {
                  projectKey: "TMT",         // placeholder value
                  url: "https://jiratestingwebsite.atlassian.net/" // placeholder value
              },
              xray: {
                status: {
                  failed: "FAILED",
                  passed: "PASSED"
              }
              },
              plugin: {
                enabled: true
              }
          }
      );
      await addXrayResultUpload(on);
  }
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',
    toConsole: true,
  },
});
