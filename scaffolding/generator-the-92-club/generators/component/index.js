const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the ace ${chalk.red("generator-the-92-club")} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "componentName",
        message: "Component Name",
        default: ""
      },
      {
        type: "confirm",
        name: "containerComponent",
        message: "Is this a container component?",
        default: false
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const rootPath = "src/component/";
    const vars = {
      componentName: this.props.componentName
    };

    this.fs.copyTpl(
      this.templatePath("component.js"),
      this.destinationPath(
        `${rootPath + this.props.componentName}/component.js`
      ),
      vars
    );

    this.fs.copyTpl(
      this.templatePath("styled.js"),
      this.destinationPath(`${rootPath + this.props.componentName}/styled.js`),
      vars
    );

    this.fs.copyTpl(
      this.templatePath("test.js"),
      this.destinationPath(`${rootPath + this.props.componentName}/test.js`),
      vars
    );

    if (this.props.containerComponent) {
      this.fs.copyTpl(
        this.templatePath("index.container.js"),
        this.destinationPath(`${rootPath + this.props.componentName}/index.js`),
        vars
      );
      this.fs.copyTpl(
        this.templatePath("container.js"),
        this.destinationPath(
          `${rootPath + this.props.componentName}/container.js`
        ),
        vars
      );
    } else {
      this.fs.copyTpl(
        this.templatePath("index.component.js"),
        this.destinationPath(`${rootPath + this.props.componentName}/index.js`),
        vars
      );
    }
  }
};
