inquirer = require("inquirer");


/* --------------------------------- PROMPTS -------------------------------- */
const prompts = () => {
    return inquirer.prompt([
    {
        type: "list",
        name: "navigation",
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
/* ----------------------------- ADD DEPARTMENT ----------------------------- */
const addDepartment = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "new department",
            message: "What is the name of the department you'd like to add?",

        }
    ])
}
/* -------------------------------- ADD ROLE -------------------------------- */
const addRole = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "new role",
            message: "What is the role you'd like to add?"
        },
        {
            type:"input",
            name:"new role salary", 
            message: "What is the salary for this role?"
        },
        {
            type:"input",
            name:"new role department", 
            message: "Which department does this role belong in?"
        }
    ])
}
/* ------------------------------ ADD EMPLOYEE ------------------------------ */
const addEmployee = () => {
    return inquirer.prompt([
        {
            type:"input",
            name:"employee's first name", 
            message: "What is the first name of the employee?"
        },
        {
            type:"input",
            name:"employee's last name", 
            message: "What is the last name of the employee?"
        },
        {
            type:"input",
            name:"employee's role", 
            message: "What is the role of this employee?"
        },
        {
            type:"input",
            name:"employee's manager", 
            message: "Who is this employee's manager? If this employee doesn't have a manager, leave this blank." 
        }
    ])
}
/* ----------------------------- UPDATE EMPLOYEE ---------------------------- */
// const updateEmployee = () => {
//     return inquirer.prompt([
//         {
            
//         }
//     ])
// }




//view all employees
//if or switch statement, user is prompted view all roles, update manager, remove employee etc.
//when selected its corresponding fucntion will run. inside that function there will be sql code.
//ex SELECT * FROM employees
