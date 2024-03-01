import { defineConfig } from 'cypress';
import { addXrayResultUpload, configureXrayPlugin } from "cypress-xray-plugin";

export default defineConfig({
  e2e: {
		async setupNodeEvents(on, config) {
      await configureXrayPlugin(
          config,
          {
              jira: {
                  projectKey: "KAN",         // placeholder value
                  url: "https://alexandrairinamarina1.atlassian.net" // placeholder value
              },
              xray: {
                status: {
                  failed: "FAIL",
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
