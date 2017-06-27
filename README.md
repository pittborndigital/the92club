# the92club

[![Build Status](https://travis-ci.org/pittborndigital/the92club.svg?branch=master)](https://travis-ci.org/pittborndigital/the92club)

The 92 club web app. This project was bootstrapped using [Create React App](./README_CRA.md)

## Dependencies

### e2e tests
The e2e tests run using [NightwatchJS](http://nightwatchjs.org/), and Selenium Server. Selenium Server runs as a Java process, and therefore has some dependencies outside of this project.

1. Install Java SDK (at least v7)
  >http://www.oracle.com/technetwork/java/javase/downloads/index.html

### Scaffolding


The scaffolding is done via [Yeoman](http://yeoman.io/), which relies on a global installation of Yeoman and the generator modules being in your global NPM modules.

```bash
$ npm install -g yeoman
```

In order to add this generator to your global node modules, run the following commands:

```bash
$ cd scaffolding/generator-the-92-club
$ npm link
```

Then to use the generator, you can run the following command from the root of the project:

```bash
$ yo the-92-club:component
```

This will prompt you for the relevant variables, and generate a new component in the src/component directory.

## Tech Stack


| Module | Version         | Comment           | Useful Links  |
| ------ | --------------- | ----------------- | --------------- |
| styled-components | ^2.1.0 | All app and component CSS is delivered through styled components. As a convention we give the styled components a displayName ***'ParentComponent.StyledComponent'*** to make debugging the CSS through React dev tools much simpler. <br><br>NOTE: use the atom plugin 'language-babel' to get auto complete working for the CSS in a styled-component file | [Github ](https://github.com/styled-components/styled-components) <br/>[Docs ](https://www.styled-components.com/docs) <br/>[Atom plugin - language-babel](https://atom.io/packages/language-babel) |
| enzyme | ^2.9.1 | Unit tests with enzyme | [Docs](http://airbnb.io/enzyme/docs/api/index.html) |
| @storybook/react | ^3.1.6 | Storybook sample components | [Docs](https://storybook.js.org/) |


### Using Storybook

In order to create a new story, add a story.js file to a component directory, and then require this file in .storybook/stories.js.

The latest storybook is deployed to [Github Pages](https://pittborndigital.github.io/the92club/) when builds on the master branch are successful.

Alternatively, the storybook can be deployed manually by running:

```bash
npm run deploy-storybook
```

## License

[MIT](./LICENSE)
