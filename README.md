# CS5200_project

##Name of the project:
Restaurant Database Management System

##Name of the team(s):
Final Project 12 (Haoting Qiu, Yanjin Deng)

### To run on localhost follow these steps:
0. Please type command: “cd P2/client” to go to P2/client directory, and type command: “npm install” for any required modules.
1. Please type command: “cd P2/client” to go to P2/client directory and type command: “npm run start” in the terminal.
2. Run ProjServerApplication.
3. Type in localhost:3000 in any web browser.

# Description
## Problem Statement
There are various types of date for a restaurants to manage, including customers, employees, orders, menu items, and so on. Filtering through all this oceans and clutter of data is quite a cumbersome task. There needs to be a platform or a management system, which makes this task easy and clear to handle.
## Solution Statement
We design 2 types of users for this application: customer and employee. Each employee has their own role, i.e. Administrator(Manager), Waiter and Chef. Generally speaking, we cover all types of users. For each user, they can create/update/delete/retrieve a corresponding record.
For domain objects, we develop order, table, menu item and recipe. For each domain object, they can create/update/delete/retrieve a corresponding record as well. For instance, as for order editor, we can not only retrieve a list of menu items for this order, but also add new menu items into this order, which makes it much easier for a customer to update or retrieve his or her order.

## User Description
## 0. User Interface
An user has many attributes, including first name, last name, username, password, email, date of birth and phone. Customer and Employee class inherit from User interface.
### 1. Customer
A customer has many attributes, including first name, last name, username, password, email, date of birth and phone, he or she can create or retrieve or delete or update his or her own profile. A customer is able to create or retrieve or delete or update his order, i.e. adding menu items into his orders, changing his table, retrieving the menu items of his orders.
### 2. Employee
An employee is a user who is also accessible to this database as well. An employee may be self-referenced to many employees, for instance, a "manager"(administrator) can be related to many "employees" in the same "user" data model, i.e. an administrator is a supervisor of many other employees(waiters). An employee has many attributes, including first name, last name, username, password, email, date of birth, phone, role, salary, serving table, supervisor. He or she can create or retrieve or delete or update his or her own profile.
We also create an enumeration called role so that each employee has their own role, i.e. Administrator(Manager), Waiter and Chef.

## Domain Objects
### 1. Order
An order is an object which contains the order id, its corresponding customer id, its corresponding table id, its corresponding created time id etc.
One customer may have many orders. Each order can be retrieved/added/updated/deleted any item from menu. An order has many-to-many relationship to menu item, since 1 order may have many menu items, and 1 menu item can be added to many orders.
### 2. MenuItem
A menu item is an object which contains the menu item id, its name, its serving time, its price and its recipe id. We also create an enumeration called ServeTime so that each menu item has their own serving time, i.e. breakfast, lunch and dinner. Each menu item can be created or retrieved or deleted or updated.
### 3.Table
A table is an object which contains the table id, and its capacity(the maximum number of persons it can maintain).  A employee may serve for a table. One table can be served by many employees.
### 4.Recipe
A recipe is an object which contains the recipe id, and its instructions.  Each menu item can only has one recipe, and each recipe belongs to only one menu item.






