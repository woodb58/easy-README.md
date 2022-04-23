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
        console.log("please enter title for project");
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
        console.log("please enter project description");
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
        console.log("please enter installation for project");
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
        console.log("please enter usage for project");
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
  },
  {
    type: "confirm",
    message: "Would you like to include test results?",
    name: "confirmTest",
    default: true,
  },
  {
    type: "input",
    message: "enter test information",
    name: "test",
    when: ({ confirmTest }) => confirmTest,
  },
  {
    type: "list",
    message: "License for project",
    name: "license",
    choices: ["mit", "Apache", "GPLv2", "GPLv3", "none"],
  },
  {
    type: "input",
    message: "Enter GitHub username",
    name: "username",
    validate: (username) => {
      if (!username) {
        console.log("please enter username for project");
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
        console.log("please enter email for project");
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
  fs.writeFile("./dist/README.md", content, (err) => {
    if (err) throw err;
    console.log("generated");
  });
});

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
