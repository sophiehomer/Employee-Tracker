/* ------------------------------- DEPARTMENT ------------------------------- */
INSERT INTO department (name)
VALUES 
("management"),
("service"),
("sales");

/* ---------------------------------- ROLE ---------------------------------- */
INSERT INTO role (title, salary, department_id)
VALUES
("manager", 62960, 1),
("customer_service_associate", 48840, 2), 
("sales_associate", 39963, 3);

/* --------------------------------- MANAGER -------------------------------- */
INSERT INTO employee (first_name, last_name, role_id)
VALUES
("Celine", "Homer", 1),
("Josh", "Birch", 1);

/* -------------------------------- EMPLOYEE -------------------------------- */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Stacy", "Chavez", 3, 1) ,
("Isabella", "Guetta", 2, 2) ,
("Leslie", "Dwight", 3, 2), 
("Will", "Mcniery", 3, 1); 
