const showBadge = (license) => {
  if (license == "none") {
    return "";
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  }
};

function generateMarkdown(response) {
  return `

# ${response.title}
${showBadge(response.license)}

## Table-of-Contents
* [Usage](#usage)
* [Description](#description)
* [Installation](#installation)
* [Contributions](#contributions)
* [Test](#test)
* [Questions](#questions)

## Usage 
${response.usage}

## Description
${response.description}

## Installation
${response.installation}
 
## Contributions
${response.contribution}

## Test 
${response.test}

## License


This application is covered by the [${
    response.license
  }](https://opensource.org/licenses/${response.license}) license
 

## Questions

Reach out at:

 GitHub: [${response.username}](https://github.com/${response.username})

 Email: ${response.email}    

    `;
}

module.exports = generateMarkdown;
