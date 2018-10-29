"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the finest ${chalk.red(
          "generator-create-react-component-library"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Name of your react component library: ",
        default: this.appname,
        validate: input =>
          input.match(/[a-z0-9_]+/)
            ? true
            : "Name must be lower case, digits, and underscores only"
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath("staticFiles/**/*"), this.destinationRoot());
  }

  install() {
    this.installDependencies();
  }
};
