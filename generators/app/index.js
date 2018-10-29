"use strict";
const Generator = require("yeoman-generator");
// Const chalk = require("chalk");
// const yosay = require("yosay");
const path = require("path");
const mkdirp = require("mkdirp");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    // this.log(
    //   yosay(
    //     `Welcome to the finest ${chalk.red(
    //       "generator-create-react-component-library"
    //     )} generator!`
    //   )
    // );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Name of your react component library: ",
        validate: input => {
          return input.match(/^[a-z0-9_]+$/)
            ? true
            : "Name must be lower case, digits, and underscores only";
        }
      },
      {
        type: "input",
        name: "description",
        message: "Describe the library: ",
        default: ""
      },
      {
        type: "input",
        name: "authorName",
        message: "Author name: "
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  default() {
    if (path.basename(this.destinationPath()) !== this.props.name) {
      this.log(
        `Your generator must be inside a folder named ${
          this.props.name
        }\nI'll automatically create this folder.`
      );
      mkdirp(this.props.name);
      this.destinationRoot(this.destinationPath(this.props.name));
      this.fs.writeJSON(this.destinationPath(".yo-rc.json"), {});
    }
  }

  writing() {
    // This.fs.copy(
    //   this.templatePath("staticFiles"),
    //   this.destinationRoot(),
    //   {
    //     globOptions: {
    //       dot: true
    //     }
    //   }
    // );
  }

  install() {
    // This.yarnInstall(
    //   [
    //     "@storybook/addon-actions@3.4.11",
    //     "@storybook/addons@3.4.11",
    //     "@storybook/react@3.4.11"
    //   ],
    //   { dev: true, exact: true }
    // );
    // this.yarnInstall(
    //   [
    //     "babel-cli@6.26.0",
    //     "babel-core@6.26.3",
    //     "babel-eslint@10.0.1",
    //     "babel-preset-env@1.7.0",
    //     "babel-preset-react@6.24.1",
    //     "babel-runtime@6.26.0",
    //     "enzyme@3.7.0",
    //     "enzyme-adapter-react-16@1.6.0",
    //     "eslint@5.8.0",
    //     "eslint-config-prettier@3.1.0",
    //     "eslint-plugin-prettier@3.0.0",
    //     "eslint-plugin-react@7.11.1",
    //     "husky@1.1.2",
    //     "lint-staged@7.3.0",
    //     "prettier@1.14.3",
    //     "prop-types@15.6.2",
    //     "react@16.6.0",
    //     "react-dom@16.6.0",
    //     "react-test-renderer@16.6.0"
    //   ],
    //   { dev: true }
    // );
    // this.yarnInstall(["styled-components"]);
  }

  end() {
    this.config.set(this.props);
    this.config.save();
  }
};
