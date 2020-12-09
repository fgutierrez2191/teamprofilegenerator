//required packages
const inquirer = require("inquirer");
const validator = require("validator");
const fs = require("fs");
const path = require("path");
const generateProfile = require("./src/generateProfile");
const teamMembers = [];




//required classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//function to add the manager
const createManager = () => {
inquirer.prompt([
      {
        type: 'input',
        name: 'fullname',
        message: 'Please enter managers full name? (Required)',

        },

      {
        type: 'input',
        name: 'id',
        message: 'Please enter your manager id number(Required)',
        validate: value => {
            if (validator.isInt(value)) {
                return true;
            }
            return "Please enter your id number.";
        }
    },

      {
        type: 'input',
        name: 'email',
        message: 'Please enter the managers email address.',
        validate: value => {
            if (validator.isEmail(value)) {
                return true;
            }
            return "Please enter a valid e-mail address.";
        }
        },
    //   {
    //   type: 'list',
    //   message: 'Please choose the role of the employee:',
    //   choices: ['Intern', 'Manager', 'Engineer'],
    //   name: "role"
    // 
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please add your office number:',
    
    },

]).then(data => {
    const manager = new Manager(data.fullname, data.id, data.email, data.officeNumber)
    teamMembers.push(manager)
    addMoreEmployees();
});

  };




  //addMoreEmployees function
  const addMoreEmployees = () => {
      return inquirer.prompt([
          {
            type: 'list',
            name: 'roleOfEmployee',
            message: 'Please choose the role of the employee that you would like to add.',
            choices: ['Intern', 'Engineer', 'No More Employees to add'] 
          }
      ]).then(data => {
          if (data.roleOfEmployee === 'Intern') {
            intern();
          }
          if (data.roleOfEmployee === 'Engineer') {
            engineer()
          }
          if (data.roleOfEmployee === 'No More Employees to add') {
              console.log(teamMembers)
            createHtml()
          }
      })
  };



  //intern function 
  const intern = () => {
    inquirer.prompt([
        {
          type: 'input',
          name: 'fullname',
          message: 'Please enter employees full name? (Required)',
          validate: value => {
              var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
              if (!regName.test(value)) {
                  return "'Please enter your full name.";
              }
              return true;
              }
          },
  
        {
          type: 'input',
          name: 'id',
          message: 'Please enter your employees id number(Required)',
          validate: value => {
              if (validator.isInt(value)) {
                  return true;
              }
              return "Please enter your id number.";
          }
      },
  
        {
          type: 'input',
          name: 'email',
          message: 'Please enter the employees email address.',
          validate: value => {
              if (validator.isEmail(value)) {
                  return true;
              }
              return "Please enter a valid e-mail address.";
          }
          },
          {
            type: "input",
            message: "What school did this intern attend?",
            name: "school"
          },


        ]).then(data => {
            const intern = new Intern(data.fullname, data.id, data.email, data.school)
            teamMembers.push(intern)
            addMoreEmployees();
        });
  


}

  //engineer function
  const engineer = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'fullname',
          message: 'Please enter employees full name? (Required)',
          validate: value => {
              var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
              if (!regName.test(value)) {
                  return "'Please enter your full name.";
              }
              return true;
              }
          },
  
        {
          type: 'input',
          name: 'id',
          message: 'Please enter your employees id number(Required)',
          validate: value => {
              if (validator.isInt(value)) {
                  return true;
              }
              return "Please enter your id number.";
          }
      },
  
        {
          type: 'input',
          name: 'email',
          message: 'Please enter the employees email address.',
          validate: value => {
              if (validator.isEmail(value)) {
                  return true;
              }
              return "Please enter a valid e-mail address.";
          }
          },
          {
            type: "input",
            message: "What is the engineers github username?",
            name: "github",
            validate: value => {
              var regExp =  /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
              if (!regExp.test(value)) {
                  return "'Please enter a valid github username";
              }
              return true;
              }
          },

        ]).then(data => {
            const engineer = new Engineer(data.fullname, data.id, data.email, data.github)
            teamMembers.push(engineer)
            addMoreEmployees();
        });
    
}
 

function createHtml() {
    fs.writeFileSync("./dist/team.html", generateProfile(teamMembers), "utf-8")
    
    }

createManager();