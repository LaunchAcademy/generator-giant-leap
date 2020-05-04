"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const path = require("path");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the beautiful ${chalk.red(
          "generator-giant-leap"
        )} generator!`
      )
    );

    const prompts = [
      // {
      //   type: "confirm",
      //   name: "someAnswer",
      //   message: "Would you like to enable this option?",
      //   default: true
      // }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const paths = [
      "src/main/frontend/app/main.js",
      "src/main/frontend/.babelrc",
      "src/main/frontend/package.json",
      "src/main/frontend/webpack.config.js",
      "src/main/java/com/launchacademy/giantleap/DemoApplication.java",
      "src/main/resources/static/index.html",
      "src/main/resources/application.properties",
      ".mvn/wrapper/MavenWrapperDownloader.java",
      ".mvn/wrapper/maven-wrapper.properties",
      "mvnw",
      "mvnw.cmd",
      "pom.xml",
      ".gitignore"
    ];
    paths.forEach(path => {
      this.fs.copy(this.templatePath(path), this.destinationPath(path));
    });

    const resourceDirectories = [
      "src/main/resources/db/migration",
      "src/main/resources/templates"
    ];

    resourceDirectories.forEach(dir => {
      this.fs.write(path.join(dir, ".gitkeep"), "");
    });
  }

  install() {}
};
