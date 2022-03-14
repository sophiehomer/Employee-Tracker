const mysql = require('mysql2');
//need to check what my route is
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employee'
});

module.exports = db;
