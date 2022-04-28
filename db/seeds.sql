INSERT INTO department (id, name)
VALUES  (1, 'Sales'),
        (2, 'Engineering'),
        (3, 'Finance'),
        (4, 'Legal');

INSERT INTO role (id, title, salary, department_id)
VALUES  (1, 'Sales Lead', 100000.00, 1),
        (2, 'Salesperson', 80000.00, 1),
        (3, 'Lead Engineer', 150000.00, 2),
        (4, 'Software Engineer', 120000.00, 2),
        (5, 'Accountant', 125000.00, 3),
        (6, 'Legal Team Lead', 250000.00, 4),
        (7, 'Lawyer', 190000.00, 4),
        (8, 'Account Manager', 160000.00, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1, 'John', 'Doe', 1, 3), -- Manager is Ashley Rodriquez
        (2, 'Mike', 'Chan', 2, 1), -- Manager is John Doe
        (3, 'Ashley', 'Rodriquez', 3, null),
        (4, 'Kevin', 'Tupik', 4, 3), -- Manager is Ashley Rodriquez
        (5, 'Malia', 'Brown', 5, 9), -- Manager is Kunal Singh
        (6, 'Sarah', 'Lourd', 6, null),
        (7, 'Tom', 'LaTorre', 7, 6), -- Manager is Sarah Lourd
        (8, 'Christian', 'Eckenrode', 3, 2), -- Manager is Mike Chan
        (9, 'Kunal', 'Singh', 8, null);
