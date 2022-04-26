const showBadge = (license) => {
  if (license == "none") {
    return "";
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  }
};

// const badgeInfo = (license) => {
//   if (license == "none") {
//     return "";
//   } else {
//     return " ## License" "This application is covered by the `![${license}](https://opensource.org/licenses/${license})` license";
//   }
// };

const showLicense = (license) => {
  if (license == "none") return "";
  else {
    return ` * [License](#license)`;
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
${showLicense()}
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

${badgeInfo(response.license)}

## Questions

Reach out at:

 GitHub: [${response.username}](https://github.com/${response.username})

 Email: ${response.email}    

    `;
}

module.exports = generateMarkdown;
