//required packages
const inquirer = require("inquirer");
const validator = require("validator");
const fs = require("fs");
const generateProfile = require("./src/generateProfile");




//required classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//array of questions for all employees
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'fullname',
        message: 'Please enter employees full name? (Required)',

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
      type: 'list',
      message: 'Please choose the role of the employee:',
      choices: ['Intern', 'Manager', 'Engineer'],
      name: "role"
    },
    {
        type: 'confirm',
        name: 'confirmAdd',
        message: 'Would you like to add another employee?',
        default: true
    },
    {
        type: 'input',
        name: 'add',
        message: 'Are you sure?',
        when: ({confirmAdd}) => {
            if (confirmAdd) {
                return true;
            } else {
                return false;
            }
        } 
    }
]).then(data => {
    if (data.confirmAdd) {
        return addMoreEmployees()
    } else {
        return data;
    }
});

  };




  //addMoreEmployees function
  const addMoreEmployees = () => {
      return inquirer.prompt([
          {
            type: 'list',
            name: 'roleOfEmployee',
            message: 'Please choose the role of the employee that you would like to add.',
            choices: ['Intern', 'Manager', 'Engineer'] 
          }
      ]).then(data => {
          if (data.roleOfEmployee === 'Manager') {
              return manager();
          }
          if (data.roleOfEmployee === 'Intern') {
              return intern();
          }
          if (data.roleOfEmployee === 'Engineer') {
              return engineer()
          }
      })
  };

  //manager function 
  const manager = () => {
      return inquirer.prompt([
        {
            type: 'input',
            name: 'fullname',
            message: 'Please enter full name of the manager. (Required)',
            validate: value => {
                var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
                if (!regName.test(value)) {
                    return "'Please enter the managers full name.";
                }
                return true;
                }
            },
    
          {
            type: 'input',
            name: 'id',
            message: 'Please enter the managers id number(Required)',
            validate: value => {
                if (validator.isInt(value)) {
                    return true;
                }
                return "Please enter a valid id number for your manager.";
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
            {
                type: 'number',
                name: 'officeNumber',
                message: 'What is the managers office number?'
            },
            {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Would you like to add another employee?',
                default: true
            },
            {
                type: 'input',
                name: 'add',
                message: 'Are you sure?',
                when: ({confirmAdd}) => {
                    if (confirmAdd) {
                        return true;
                    } else {
                        return false;
                    }
                } 
            },
        ]).then(data => {
            if (data.confirmAdd) {
                return addMoreEmployees()
            } else {
                return data;
            }     
    
  });
};



  //intern function 
  const intern = () => {
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
            message: "What school did this intern attend?",
            name: "school"
          },

      {
          type: 'confirm',
          name: 'confirmAdd',
          message: 'Would you like to add another employee?',
          default: true
      },
      {
          type: 'input',
          name: 'add',
          message: 'Are you sure?',
          when: ({confirmAdd}) => {
              if (confirmAdd) {
                  return true;
              } else {
                  return false;
              }
          } 
      }
  ]).then(data => {
      if (data.confirmAdd) {
          return addMoreEmployees()
      } else {
          return data;
      }
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
            name: "github"
          },

      {
          type: 'confirm',
          name: 'confirmAdd',
          message: 'Would you like to add another employee?',
          default: true
      },
      {
          type: 'input',
          name: 'add',
          message: 'Are you sure?',
          when: ({confirmAdd}) => {
              if (confirmAdd) {
                  return true;
              } else {
                  return false;
              }
          } 
        }
    ]).then(data => {
        if (data.confirmAdd) {
            return addMoreEmployees()
        } else {
            return data;
        }
    });
    
    
}
 

function init() {
    promptUser()
        .then(questionData => {
            return generateProfile(questionData);
        })
    }

init();