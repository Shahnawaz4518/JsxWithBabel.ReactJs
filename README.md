# Transform JSX with Babel

This project demonstrates how to transform JSX syntax into JavaScript using Babel. Babel is a popular JavaScript compiler that allows you to use next-generation JavaScript, including JSX syntax, today.

## Getting Started

To get started with this project, follow the steps below.

### Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Shahnawaz4518/JsxWithBabel.ReactJs.git
   cd JsxWithBabel.ReactJs

2.Install the dependencies:
   npm install

Usage
To transform JSX files using Babel, run the following command:
npm run build

Example
Here is an example of a simple React component written in JSX:
// src/App.jsx
import React from 'react';

const App = () => {
  return <h1>Hello, JSX with Babel!</h1>;
};

export default App;

// dist/App.js
import React from 'react';

const App = () => {
  return React.createElement('h1', null, 'Hello, JSX with Babel!');
};

export default App;

Scripts
The following scripts are available in this project:

-build: Transforms JSX files into JavaScript using Babel

Babel Configuration
The Babel configuration for this project is defined in the .babelrc file:
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

