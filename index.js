inquirer = require("inquirer");
const db = require("./db/connection");

/* --------------------------------- PROMPTS -------------------------------- */
const prompt = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "navigation",
      message: "Which of the following would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee role",
      ],
    },
  ]);
};
/* ----------------------------- ADD DEPARTMENT ----------------------------- */
const promptDepartment = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "new_department",
      message: "What is the name of the department you'd like to add?",
    },
  ]);
}
/* -------------------------------- ADD ROLE -------------------------------- */
const promptRole = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "new_role",
      message: "What is the role you'd like to add?",
    },
    {
      type: "input",
      name: "role_salary",
      message: "What is the salary for this role?",
    },
    {
      type: "input",
      name: "role_department",
      message: "Which department does this role belong in?",
    },
  ]);
};
/* ------------------------------ ADD EMPLOYEE ------------------------------ */
const promptEmployee = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "employee_first",
      message: "What is the first name of the employee?",
    },
    {
      type: "input",
      name: "employee_last",
      message: "What is the last name of the employee?",
    },
    {
      type: "input",
      name: "employee_role",
      message: "What is the role of this employee?",
    },
    {
      type: "input",
      name: "employee_manager",
      message:
        "Who is this employee's manager? If this employee doesn't have a manager, leave this blank.",
    },
  ]);
};

/* ----------------------------- UPDATE EMPLOYEE ---------------------------- */
// const updateEmployee = () => {
//     return inquirer.prompt([
//         {
//
//         }
//     ])
// }

prompt().then((answers) => {
  if (answers.navigation === "View all departments") {
    function viewAllDepartments() {
      let sql = "SELECT * FROM department";
      db.query(sql, (err, row) => {
        if (err) {
          console.log(err);
          return;
        }
        console.table(row);
      });
    }
    viewAllDepartments();
  }

  if (answers.navigation === "View all roles") {
    function viewAllRoles() {
      let sql = "SELECT * FROM role";
      db.query(sql, (err, row) => {
        if (err) {
          console.log(err);
          return;
        }
        console.table(row);
      });
    }
    viewAllRoles();
  }

  if (answers.navigation === "View all employees") {
    function viewAllEmployees() {
      let sql = "SELECT * FROM employee";
      db.query(sql, (err, row) => {
        if (err) {
          console.log(err);
          return;
        }
        console.table(row);
      });
    }
    viewAllEmployees();
  }

  if (answers.navigation === "Add a department") {
    function addDepartment(deptname) {
      console.log(deptname);
      const sql = `INSERT INTO department (name)
                  VALUES (?)`;
      db.query(sql, deptname, (err, results) => {
          if(err) {
              console.log(err);
              return;
          }
          console.log("Department added");
      });
  }
  promptDepartment().then(answer => {
    addDepartment(answer.new_department)
  }) 
  }

  if (answers.navigation === "Add a role") {
    addRole()
  }

  if (answers.navigation === "Add an employee") {
    addEmployee();
  }

  //   else {
  //       updateEmployee()
  // }
});
