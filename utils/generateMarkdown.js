function generateMarkdown(response) {
  return `

# ${response.title}
![badge](https://img.shields.io/badge/license-${response.license}-blue)

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
![badge](https://img.shields.io/badge/license-${response.license}-blue)

This application is covered by the ${response.license} license.
 

## Questions

Reach out at:

 GitHub: [${response.username}](https://github.com/${response.username})

 Email: ${response.email}    

    `;
}

module.exports = generateMarkdown;
