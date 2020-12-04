//required packages
const inquirer = require("inquirer");
const validator = require("validator");
const fs = require("fs");
const generateProfile = require("./src/generateProfile");



//required classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//array of questions for employees
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'fullname',
        message: 'Please enter employees full name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your full name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please enter your employees id number(Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your id number!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter a valid email address!');
              return false;
            }
        }
      },
      {
      type: 'checkbox',
      name: 'role',
      message: 'Please choose the role of the employee:',
      choices: ['Intern', 'Manager', 'Engineer'],
    }
    ]);
  };
 

promptUser();