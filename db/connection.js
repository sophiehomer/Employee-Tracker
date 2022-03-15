const mysql = require("mysql2");

//need to check what my route is
//&&
//intalled dependencies npm i inquirer, npm i mysql2, npm i console.table, npm i

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee"
});

module.exports = db;
