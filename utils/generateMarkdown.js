const showBadge = (license) => {
  if (license === "none") {
    return "";
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "MPL") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "BSD 3-Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
};

const licenseSection = (license) => {
  if (license === "none") {
    return " ";
  } else {
    return `## [License](#table-of-contents)
  this project is covered under the ${license} license. For more information click here ${showBadge(
      license
    )}.`;
  }
};

const showLicense = (license) => {
  if (license === "none") return "";
  else {
    return `* [License](#license)`;
  }
};

function generateMarkdown(response) {
  return `

# ${response.title}

${showBadge(response.license)}

## Table-of-Contents
* [Description](#description)
* [Usage](#usage)
* [Installation](#installation)
* [Contributions](#contributions)
* [Test](#test)
${showLicense(response.license)}
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

${licenseSection(response.license)}

## Questions

Reach out at:

 GitHub: [${response.username}](https://github.com/${response.username})

 Email: ${response.email}    

    `;
}

module.exports = generateMarkdown;
