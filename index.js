const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "Enter project title",
    name: "title",
    validate: (title) => {
      if (!title) {
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Describe your project",
    name: "description",
    validate: (description) => {
      if (!description) {
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Detail installation instructions",
    name: "installation",
    validate: (installation) => {
      if (!installation) {
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Provide and usage information",
    name: "usage",
    validate: (usage) => {
      if (!usage) {
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Provide contribution guidelines",
    name: "contribution",
    validate: (contribution) => {
      if (!contribution) {
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "List test instructions",
    name: "test",
    validate: (test) => {
      if (!test) {
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "list",
    message: "License for project",
    name: "license",
    choices: [
      "MIT",
      "Apache-2.0",
      "gpl-license",
      "MPL-2.0",
      "BSD-2-Clause",
      "BSD-3-Clause",
      "none",
    ],
  },
  {
    type: "input",
    message: "Enter GitHub username",
    name: "username",
    validate: (username) => {
      if (!username) {
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Enter email",
    name: "email",
    validate: (email) => {
      if (!email) {
        return false;
      } else {
        return true;
      }
    },
  },
];

inquirer.prompt(questions).then((response) => {
  console.log(response);

  let content = generateMarkdown(response);
  console.log(content);
  fs.writeFile("./dist/README21.md", content, (err) => {
    if (err) throw err;
    console.log("generated");
  });
});

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
