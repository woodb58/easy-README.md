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
        console.log("Enter your title!");
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
        console.log("Enter your description!");
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
        console.log("Enter your installation!");
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
        console.log("Enter your usage!");
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
        console.log("Enter your contribution!");
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
        console.log("Enter your test!");
        return true;
      }
    },
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
        return false;
      } else {
        console.log("Enter your username!");
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
        console.log("Enter your email!");
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
