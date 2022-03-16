/* ------------------------------- DEPARTMENT ------------------------------- */
CREATE TABLE department (
 id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
 name VARCHAR(30)
);

/* ---------------------------------- ROLE ---------------------------------- */
CREATE TABLE role (
 id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
 title VARCHAR(30), 
 salary decimal(10,2),
 department_id INTEGER,
    FOREIGN KEY (department_id)
    REFERENCES department (id)
);

/* -------------------------------- EMPLOYEE -------------------------------- */
CREATE TABLE employee (
 id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 role_id INTEGER,
 FOREIGN KEY (role_id)
 REFERENCES role (id),
 manager_id INTEGER,
    FOREIGN KEY (manager_id)
    REFERENCES employee (id)
);
