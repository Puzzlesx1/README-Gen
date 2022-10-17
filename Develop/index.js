//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'motivation'
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'build'
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'solve'
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learn'
    },
    {
        type: 'input',
        message: 'What are the steps to instal your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide instructions on how to use project.',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: [
            "MIT",
            "APACHE",
            "GPL",
            "BSD",
            "None"
        ]
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
];

//function to write README file
function genReadMe(fileName, data) {
    let body = generateMarkdown(data);
    fs.genReadMe(fileName, body, function(error) {
        if (error) {
            return console.log(error)
        }
        console.log('complete')
    });
};

//initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        genReadMe(fileName, data)
    });
};

// Function call to initialize app
init();
