function generateMarkdown(response) {
  return `
# ${response.title}
    
## Repository Description
${response.description}

## Installation Instructions
${response.installation}

## Usage Details 
${response.usage}

## Contributions 
${response.contribution}

## Test 
${response.test}

## Will be moved later 
${response.license}

## Will be moved later 
${response.username}

## will be moved later 
    ${response.email}    

    `;
}

module.exports = generateMarkdown;
