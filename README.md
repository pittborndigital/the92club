# the92club

[![Build Status](https://travis-ci.org/pittborndigital/the92club.svg?branch=master)](https://travis-ci.org/pittborndigital/the92club)

The 92 club web app. This project was bootstrapped using [Create React App](./README_CRA.md)

## Dependencies

### e2e tests
The e2e tests run using [NightwatchJS](http://nightwatchjs.org/), and Selenium Server. Selenium Server runs as a Java process, and therefore has some dependencies outside of this project.

1. Install Java SDK (at least v7)
  >http://www.oracle.com/technetwork/java/javase/downloads/index.html

## Tech Stack


| Module | Version         | Comment           | Useful Links  |
| ------ | --------------- | ----------------- | --------------- |
| styled-components | ^2.1.0 | All app and component CSS is delivered through styled components. As a convention we give the styled components a displayName ***'ParentComponent.StyledComponent'*** to make debugging the CSS through React dev tools much simpler. <br><br>NOTE: use the atom plugin 'language-babel' to get auto complete working for the CSS in a styled-component file | [Github ](https://github.com/styled-components/styled-components) <br/>[Docs ](https://www.styled-components.com/docs) <br/>[Atom plugin - language-babel](https://atom.io/packages/language-babel) |

## License

[MIT](./LICENSE)
