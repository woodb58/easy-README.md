const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "Enter project title",
    name: "title",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        ("Please enter project title");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Describe your project",
    name: "description",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        ("Please describe your project");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Detail installation instructions",
    name: "installation",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        ("Please enter installation instructions");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Provide and usage information",
    name: "usage",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        ("Please enter usage information");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Provide contribution guidelines",
    name: "contribution",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        ("Please provide contribution guidelines");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "List test data",
    name: "test",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        ("Please enter test data");
        return false;
      }
    },
  },
  {
    type: "list",
    message: "License for project",
    name: "license",
    choices: ["MIT", "Apache", "gpl", "MPL", "BSD", "none"],
  },
  {
    type: "input",
    message: "Enter GitHub username",
    name: "username",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        ("Please enter your GitHub username");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Enter email",
    name: "email",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        ("Please enter your email");
        return false;
      }
    },
  },
];

inquirer.prompt(questions).then((response) => {
  console.log(response);

  let content = generateMarkdown(response);
  console.log(content);
  fs.writeFile("./dist/README36.md", content, (err) => {
    if (err) throw err;
    console.log("generated");
  });
});

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
