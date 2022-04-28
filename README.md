# Employee-Tracker

## Link(s)
Link to Video Walkthrough: https://watch.screencastify.com/v/Yf1Sy01mlcw4bOMpfg8N

## Table of Contents (Optional)
* [Description](#description)
* [Clone Repository](#clone-repository)
* [Install Dependencies](#install-dependencies)
* [Start Application](#start-application)
* [Credits](#credits)
* [License](#license)

## Description
This application is used to keep track of the employees in a company. There are 3 different tables in this application database, employee, role, and department. Inside the employee table, it contains the employee's id, first name, last name, role id (auto fills info from role table), and manager id (fills in based on employee's id). Inside the role table, contains the role's id, title, salary, and department id (fills in based on department id). Inside the department table, it contains the department's id and name.

When the user is in the correct file directory in the terminal, they can type 'npm start' or 'node index.js' to reach the database. Here they can choose what they would like to do in the database. They can choose from viewing the departments, roles, and employees, or adding a department, role, or employee. The user can also update an employee's role.
![Screenshot (416)](https://user-images.githubusercontent.com/88364269/141701871-6f12ff79-d84d-4e1e-912b-76e675f5f594.png)

If the user wants to view the departments, it would display the departments' id, and name. If the user decides to add a department, they are asked to name the department, and the id is automatically given. If you go back and view the department, you would be able to see it was added to the department list.
![Screenshot (417)](https://user-images.githubusercontent.com/88364269/141701873-f1687a19-0b2b-4588-b959-17d29e3310d7.png)

If the user wants to view the roles, it would display the roles' id, title, salary, and department. If the user decides to add a role, they are asked to name the role, input the role's salary, and choose what department they belong to from the list of departments. The id is automatically given to the role. If the user go back and view the department, you would be able to see it was added to the role list.
![Screenshot (418)](https://user-images.githubusercontent.com/88364269/141701876-adcd609d-f6b4-493f-9e31-da5f6a1ace8c.png)

If the user wants to view the employee, it would display the employees' id, first name, last name, role title, department, salary, and manager. If  the user decided to add an employee, they are asked for the first and last name, and choose what role they have from the list of role, and choose what manager they have from the employee list. The id is automatically given to the employee. If you back and view the employee list you can see that the employee is added with the department, salary being automatically filled from the other tables.
![Screenshot (419)](https://user-images.githubusercontent.com/88364269/141701878-f167edcb-5bb4-456e-b4ec-f5e7e63ca21c.png)

Lastly if the user decides to update an employee's role. They choose which employee they want to update from the employee list, and then choose what role to give them from the roles list. You would be able to see the changes if you view the employee list.

## Clone Repository
* git clone https://github.com/ManoLo2ManoLo/Employee-Tracker.git

## Install Dependencies
* All NPM packages required for this application are already listed as dependencies in the package.json file. Run the
command 'npm i' command in your terminal at the root directory level to install the packages.
* Ensure you have Node.js installed on your machine. The budget tracker application will be invoked by entering node server.js in the command line.

## Start Application
* You will see the App running on the Terminal.

## Credit
This application was typed and revised by Manuel Canas-Menendez (ManoLo2ManoLo). <br />

* [Github](https://github.com/ManoLo2ManoLo)
* [Portfolio](https://manolo2manolo.github.io/React-Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/manuel-canas-menendez-33354b21b/)

## License
<p align="center">
    <img align="center" src="https://img.shields.io/github/license/ManoLo2ManoLo/Coding-Quiz?style=for-the-badge" alt="license" />
</p>