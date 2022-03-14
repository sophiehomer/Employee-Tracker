/* ------------------------------- DEPARTMENT ------------------------------- */
INSERT INTO department (id, name)
VALUES 
(1, "manager"),
(2, "clothing"),
(3, "footwear"),
(4, "beauty"),
(5, "home");

/* ---------------------------------- ROLE ---------------------------------- */
INSERT INTO role (id, title, salary, department_id)
(1, "buyer", 54,440, 5), //fix salary 
(2, "sales_associate", 34,000, 6), //fix salary 
(3, "visual_merchandiser", 58,000, 7), //fix salary 
(4, "inventory_associate", 50,000, 8), //fix salary 
(5, "customer_service_associate", 31,000, 9), //fix salary 


/* --------------------------------- MANAGER -------------------------------- */
INSERT INTO manager (first_name, last_name, role_id)
("Celine", "Homer", 1)
("Josh", "Birch", 1)

/* -------------------------------- EMPLOYEE -------------------------------- */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
("Stacy", "Chavez", 4, 1) 
("Connor", "Cooper", 3, 1) 
("Isabella", "Guetta", 5, 2) 
("Leslie", "Dwight", 1, 2) 
("Will", "Mcniery", 2, 1) 
