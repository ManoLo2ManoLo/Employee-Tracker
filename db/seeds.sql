INSERT INTO employee (id, first_name, last_name, title, department, salary, manager)
VALUES
(1, "John", "Doe", "Sales Lead", "Sales", 100000, "Ashley Rodriquez"),
(2, "Mike", "Chan", "Salesperson", "Sales", 80000, "John Doe"),
(3, "Ashley", "Rodriquez", "Lead Engineer", "Engineering", 150000, null),
(4, "Kevin", "Tupik", "Software Engineer", "Engineering", 120000, "Ashley Rodriquez"),
(5, "Malia", "Brown", "Accountant", "Finance", 125000, null),
(6, "Sarah", "Lourd", "Legal Team Lead", "Legal", 250000, null),
(7, "Tom", "LaTorre", "Lawyer", "Legal", 190000, "Sarah Lourd"),
(8, "Christian", "Eckenrode", "Lead Engineer", "Engineering", 150000, "Mike Chan");