SELECT
    employee.id,
    employee.first_name,
    employee.last_name,
    role.title AS title,
    department.name AS department,
    role.salary AS salary,
    manager.first_name AS manager
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id
LEFT JOIN employee manager ON employee.manager_id = manager.id;