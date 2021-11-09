DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE employee(
    id INTEGER NOT NULL,
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    title VARCHAR(30),
    department VARCHAR(15),
    salary INTEGER NOT NULL,
    manager VARCHAR(30)
)