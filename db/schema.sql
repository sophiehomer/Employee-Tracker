/* ------------------------------- DEPARTMENT ------------------------------- */
CREATE TABLE department (
 id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
 name VARCHAR(30)
)

/* ---------------------------------- ROLE ---------------------------------- */
CREATE TABLE role (
 id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
 title VARCHAR(30), 
 salary decimal(10,2),
 department_id INT
)

/* -------------------------------- EMPLOYEE -------------------------------- */
CREATE TABLE employee (
 id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 role_id INT,
 manager_id INT
)