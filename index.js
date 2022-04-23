const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "Enter project title",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project",
    name: "description",
  },
  {
    type: "input",
    message: "Detail installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide and usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "Provide contribution guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: "List test instructions",
    name: "test",
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
  },
  {
    type: "input",
    message: "Enter email",
    name: "email",
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

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, response) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
