# Budget Tracking System

Welcome to the **Budget Tracking System**! This project is a web application built with Java Spring Boot that allows users to track their expenses and manage their budgets effectively.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Overview
The **Budget Tracking System** is designed to help users manage their finances by allowing them to record, view, and analyze their expenses. The application provides a user-friendly interface and robust backend services to ensure a seamless experience.

## Features
- **User Authentication**: Secure login and registration for users.
- **Expense Management**: Add, edit, delete, and view expenses.
- **Budget Overview**: Visual representation of expenses against budgets.
- **Category Management**: Categorize expenses for better tracking.
- **RESTful API**: Interact with the application programmatically.

## Technologies Used
- **Java 17**
- **Spring Boot 3.x**
- **Spring Data JPA**
- **MySQL Database**
- **Thymeleaf** (for server-side rendering)
- **Bootstrap** (for responsive design)

## Installation
To set up the Budget Tracking System locally, follow these steps:

1. **Clone the repository**:

2. **Navigate to the project directory**:

3. **Configure the database**:
- Create a new MySQL database (e.g., `budget_tracker`).
- Update the `application.properties` file with your database credentials:
  ```
  spring.datasource.url=jdbc:mysql://localhost:3306/budget_tracker
  spring.datasource.username=yourusername
  spring.datasource.password=yourpassword
  ```

4. **Build the project**:

5. **Run the application**:
