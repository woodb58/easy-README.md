function generateMarkdown(response) {
  return `

# ${response.title}
${response.license}

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


## Questions

###Reach out at

 GitHub: [${response.username}](https://github.com/${response.username})

 Email: ${response.email}    

    `;
}

module.exports = generateMarkdown;
