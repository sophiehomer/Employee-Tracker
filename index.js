inquirer = require("inquirer");
const db = require("./db/connection");

/* --------------------------------- NAVIGATION PROMPT -------------------------------- */
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
/* ----------------------------- ADD DEPARTMENT PROMPT ----------------------------- */
const promptDepartment = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "new_department",
      message: "What is the name of the department you'd like to add?",
    },
  ]);
};
/* -------------------------------- ADD ROLE PROMPT -------------------------------- */
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
/* ------------------------------ ADD EMPLOYEE PROMPT ------------------------------ */
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
        "Enter the name of the employee's manager. If this employee doesn't have a manager, leave it blank and press enter.",
    },
  ]);
};

/* ----------------------------- UPDATE EMPLOYEE PROMPT ---------------------------- */
const PromptUpdateEmployee = async () => {
  const employees = await allEmployees().then(row => formatEmployees(row));
  const roles = await allRoles().then(row => formatRoles(row));
  return await inquirer.prompt([
    {
      type: "list",
      name: "employees",
      message: "Choose the employee you'd like to update",
      choices: employees,
    },
    {
      type: "list",
      name: "roles",
      message: "Which role would you like to assign this employee to?",
      choices: roles,
    },
  ]);
};


/* ------------------- VIEW ALL DEPARTMENTS -------------------- */
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

  /* ------------------- VIEW ALL ROLES -------------------- */
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

  /* ------------------- VIEW ALL EMPLOYEES -------------------- */
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
  
  /* ------------------- ADD A DEPARTMENT -------------------- */
  if (answers.navigation === "Add a department") {
    function addDepartment(deptName) {
      console.log(deptName);
      const sql = `INSERT INTO department (name)
                  VALUES (?)`;
      db.query(sql, deptName, (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Department added");
      });
    }
    promptDepartment().then((answer) => {
      addDepartment(answer.new_department);
    });
  }

  /* ------------------- ADD A ROLE -------------------- */
  if (answers.navigation === "Add a role") {
    function addRole(role, salary, department) {
      const sql = `INSERT INTO role (title, salary, department_id) SELECT ?,?, department.id FROM department WHERE department.name = ?`;
      db.query(sql, [role, salary, department], (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Role added");
      });
    }
    promptRole().then((answer) => {
      addRole(answer.new_role, answer.role_salary, answer.role_department);
    });
  }

  /* ------------------- ADD AN EMPLOYEE -------------------- */
  if (answers.navigation === "Add an employee") {
    function addEmployee(
      first_name,
      last_name,
      role,
      managerFirstName,
      managerLastName
    ) {
      if (!managerFirstName || managerFirstName === "") {
        const sql = `INSERT INTO employee (first_name, last_name, role_id) 
                    SELECT ?,?, role.id FROM role 
                    WHERE role.title = ?`;
        db.query(sql, [first_name, last_name, role], (err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Employee added");
        });
      } else {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                    SELECT ?,?, role.id, manager.id FROM role, employee manager 
                    WHERE role.title = ? AND manager.first_name = ? AND manager.last_name = ?`;
        db.query(
          sql,
          [first_name, last_name, role, managerFirstName, managerLastName],
          (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log("Employee added");
          }
        );
      }
    }
    promptEmployee().then((answer) => {
      const managerName = answer.employee_manager.split(" ");
      const managerFirstName = managerName[0];
      const managerLastName = managerName[1];

      addEmployee(
        answer.employee_first,
        answer.employee_last,
        answer.employee_role,
        managerFirstName,
        managerLastName
      );
    });
  }
  /* ----------------------------- UPDATE EMPLOYEE ---------------------------- */
  if (answers.navigation === "Update employee role") {
    PromptUpdateEmployee().then((answer) => {
      const employee = answer.employees;
      const role = answer.roles;
      updateEmployee(employee, role);
    });
  }
});

function allEmployees() {
  return new Promise((resolve, reject) => {
    const sql = `SELECT first_name, last_name FROM employee`;
    db.query(sql, (err, row) => {
      if (err) {
        return reject(err);
      }
      resolve(row);
    });
  });
}

const formatEmployees = (row) => {
  const employees = [];
  row.forEach((data) => {
    employees.push(data.first_name + " " + data.last_name);
  });
  return employees;
};

function updateEmployee(name, role) {
  console.log(name)
  const names = name.split(" ");
  const first = names[0];
  const last = names[1];
  const sql = `UPDATE employee SET employee.role_id = ? WHERE employee.first_name = ? AND employee.last_name = ?`;
  db.query(sql, [
    role,
    first,
    last,
  ],
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Employee updated");
    },
  );
}

function allRoles() {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, row) => {
      if (err) {
        return reject(err);
      }
      resolve(row);
    });
  });
}

const formatRoles = (row) => {
  const employees = [];
  row.forEach((data) => {
    const roles = {
      name: data.title,
      value: data.id,
    };
    employees.push(roles);
  });
  return employees;
};
