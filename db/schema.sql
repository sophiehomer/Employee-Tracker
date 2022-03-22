/* ------------------------------- DEPARTMENT ------------------------------- */
CREATE TABLE department (
 id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
 name VARCHAR(30)
);

/* ---------------------------------- ROLE ---------------------------------- */
CREATE TABLE role (
 id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
 title VARCHAR(30), 
 salary decimal(10,2),
 department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department (id)
);

/* -------------------------------- EMPLOYEE -------------------------------- */
CREATE TABLE employee (
 id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 role_id INT,
 FOREIGN KEY (role_id)
 REFERENCES role (id),
 manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employee (id)

);
