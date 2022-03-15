/* ------------------------------- DEPARTMENT ------------------------------- */
INSERT INTO department (id, name)
VALUES 
(1, "management"),
(2, "service"),
(3, "sales")

/* ---------------------------------- ROLE ---------------------------------- */
INSERT INTO role (id, title, salary, department_id)
(1, "manager", 62960, 5),
(2, "customer_service_associate", 48840, 6), 
(3, "sales_associate", 39963, 7)

/* --------------------------------- MANAGER -------------------------------- */
INSERT INTO employee (first_name, last_name, role_id)
("Celine", "Homer", 5),
("Josh", "Birch", 5)

/* -------------------------------- EMPLOYEE -------------------------------- */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
("Stacy", "Chavez", 4, 1) 
("Isabella", "Guetta", 5, 2) 
("Leslie", "Dwight", 1, 2) 
("Will", "Mcniery", 2, 1) 
