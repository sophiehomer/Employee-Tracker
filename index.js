inquirer = require("inquirer");


// Create a series of prompts inside of inquirer 

const prompts = () => {
    return inquirer.prompt([
    {
        type: "list",
        name: "",
        message: "Which of the following would you like to do?",
        choices:
        [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update employee role"
        ]
    }
    ])
}

const addDepartment = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "type",
            message: "What is the name of the department you'd like to add?",

        }
    ])
}

const addRole = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "type",
            message: "What is the role you'd like to add?"
        },
        {
            type:"input",
            name:"type", 
            message: "What is the salary for this role?"
        },
        {
            type:"input",
            name:"type", 
            message: "Which department does this role belong in?"
        }
    ])
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type:"input",
            name:"type", 
            message: "What is the first name of the employee?"
        },
        {
            type:"input",
            name:"type", 
            message: "What is the last name of the employee?"
        },
        {
            type:"input",
            name:"type", 
            message: "What is the role of this employee?"
        },
        {
            type:"input",
            name:"type", 
            message: "Who is this employee's manager? If this employee doesn't have a manager, leave this blank." 
        }
    ])
}
  


//view all employees
//if or switch statement, user is prompted view all roles, update manager, remove employee etc.
//when selected its corresponding fucntion will run. inside that function there will be sql code.
//ex SELECT * FROM employees
