function generateMarkdown(data) {
  return `
  <h1 align='center'>${data.title}</h1>

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  ## Description
  Motivation: ${data.motivation}
  The Why: ${data.build}
  Problem being solved: ${data.solve}
  Takeaways: ${data.learn}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license.

  ## Questions

  Feel free to email me with any questions: ${data.email}
`;
}

module.exports = generateMarkdown;
