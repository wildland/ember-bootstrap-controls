/* eslint-env node */
const chalk = require('chalk');
const stringUtils = require('ember-cli-string-utils');

module.exports = {
  description: 'adds extra boilerplate files',

  locals(options) {
    options.entity.freestyleName = options.entity.name.replace(/\//g, "-");
    return options;
  },

  afterInstall(options) {
    let ui = options.ui;
    ui.writeLine(
      chalk.green('remember') +
      ' to add your '+
      chalk.yellow('freestyle/' + stringUtils.dasherize(options.entity.name)) +
      ' component to ' +
      chalk.yellow('ember-bootstrap-controls-freestyle.hbs')
    );
  }
};
