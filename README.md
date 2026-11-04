# Calculator

A simple desktop calculator for macOS, built with HTML, CSS, JavaScript, and Electron. Its window sizes itself to fit the calculator when it opens.

## Features

- Basic arithmetic: addition, subtraction, multiplication, and division
- Clear button to reset the display
- New input starts a fresh calculation after a result

## Run locally

Install [Node.js](https://nodejs.org/), then run:

bash
npm install
npm start


## Build the Mac app

bash
npm run package


The `Calculator.app` bundle will be in the `out` folder. To create a ZIP containing the app, run:

bash
npm run make


## Project files

- `index.html` — calculator buttons and display
- `styles.css` — layout and appearance
- `index.js` — calculator behavior
- `main.js` — Electron window setup
