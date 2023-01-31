// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");
const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a project descriptionn',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation details',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any user usage details',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like for you application?',
        choices: [""]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter any contributors to the project',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter any testing instructions',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];

//generateREADME function
function generateREADME {
//write out README and use generateMarkdown
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err){
            console.log(err);
            return;
        }
        else {
            console.log("Your README is ready!")
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((user)=> {
        //call function to generateREADME in here
        console.log(user);
        fs.writeToFile("./README.md", generateREADME (user));
    })
};

// Function call to initialize app
init();
