//required packages
const inquirer = require("inquirer");
const validator = require("validator");
const generateProfile = require("./src/generateProfile");
const fs = require("fs");


//required classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//array of questions for employees
 
    const questions = [
    {
        type: "input",
        message: "Please enter employee's full name:",
        name: "fullname",
        validate: value => {
            let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
            if (!regName.test(value)) {
                return "'Please enter your first & last name";
            }
            return true;
            }
        
    },
    {
        type: "input",
        message: "Please enter employee's id number:",
        name: "id",
        validate: value => {
            if (validator.isInt(value)) {
                return true;
            }
            return "Please enter a valid ID Number.";
        }
    },
    {
        type: "input",
        message: "Please enter employee's email address",
        name: "email",
        validate: value => {
            if (validator.isEmail(value)) {
                return true;
            }
            return "Please enter a valid e-mail address.";
        }
    },
    {
        type: "list",
        message: "Please choose the role of the employee:",
        choices: ['Manager', 'Engineer', 'Intern'],
        name: "role"   
    },

];

//function to write html file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, generateProfile(data));
}

//function to initialize program 
function init() {
    inquirer.prompt(questions).then(answers => {
        

       
        writeToFile("renderedteam.html", answers);
      
    })
}

//function call to initialize program 
init();