/* eslint-disable import/no-extraneous-dependencies */
const defaultSettings = require("@open-wc/testing-karma/default-settings.js");
const merge = require("webpack-merge");
const path = require("path");

module.exports = config => {
  config.set(
    merge(defaultSettings(config), {
      files: [
        "test/**/*.spec.js"
      ],

      // ... rest of karma config

    reporters: ['coverage-istanbul'],

    // any of these options are valid: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-api/lib/config.js#L33-L39
    coverageIstanbulReporter: {
      // reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib
      reports: ['html', 'lcovonly', 'text-summary'],

      // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
      dir: path.join(__dirname, 'coverage'),

      // Combines coverage information from multiple browsers into one report rather than outputting a report
      // for each browser.
      combineBrowserReports: true,

      // if using webpack and pre-loaders, work around webpack breaking the source path
      fixWebpackSourcePaths: true,

      // Omit files with no statements, no functions and no branches from the report
      skipFilesWithNoCoverage: true,

      // Most reporters accept additional config options. You can pass these through the `report-config` option
      'report-config': {
        // all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html'
        }
      },

      // enforce percentage thresholds
      // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
      thresholds: {
        emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
        // thresholds for all files
        global: {
          statements: 75,
          lines: 75,
          branches: 75,
          functions: 75
        },
        // thresholds per file
        each: {
          statements: 75,
          lines: 75,
          branches: 75,
          functions: 75
        }
      },

      verbose: false // output config used by istanbul for debugging
    }

      // your custom config
    })
  );
  return config;
};
