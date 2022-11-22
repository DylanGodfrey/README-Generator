const fs = require("fs");
const inquirer = require("inquirer");
const markdownJS = require("./utils/generateMarkdown.js");

const questions = [
  "What is the project title?",
  "What is the description?",
  "What are the installation instructions?",
  "What is the usage information?",
  "What are the contribution guidelines?",
  "What are the test instructions?",
  "What is the license?",
  "What is the Github Username?",
  "What is the email address?",
];

const licenseChoices = [
  "GNU AGPLv3",
  "GNU GPLv3",
  "GNU LGPLv3",
  "Mozilla Public License 2.0",
  "Apache License 2.0",
  "MIT License",
  "Boost Software License 1.0",
  "The Unlicense",
  "No License",
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Written to file!")
  );
}

function init() {
  inquirer
    .prompt([
      { 
        type: "input",
        message: questions[0], 
        name: "title" 
      },
      { 
      type: "input", 
      message: questions[1], 
      name: "description" 
      },
      { 
        type: "input", 
        message: questions[2], 
        name: "installation" 
      },
      { 
        type: "input", 
        message: questions[3], 
        name: "usage" 
      },
      { 
        type: "input", 
        message: questions[4], 
        name: "contribution" 
      },
      { 
        type: "input", 
        message: questions[5], 
        name: "test" 
      },
      {
        type: "list",
        message: questions[6],
        choices: licenseChoices,
        name: "license",
      },
      { 
        type: "input", 
        message: questions[7], 
        name: "username" 
      },
      { 
        type: "input", 
        message: questions[8], 
        name: "email" 
      },
    ])
    .then((response) => {
      // write file to a different folder
      writeToFile("./sample_readme/README.md", markdownJS.generate(response));
    });
}

// Function call to initialize app
init();