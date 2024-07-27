# Company Connect (Supply Trace project)

**Company Connect** is a comprehensive web application designed to streamline the management and visualization of company and location data. With a user-friendly interface, the application allows users to explore companies, view detailed information, and analyze geographical data through interactive visualizations.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Frontend Setup](#frontend-setup)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running Unit Testcases](#running-unit-testcases)
3. [Backend Setup](#backend-setup)
   - [Prerequisites](#prerequisites-1)
   - [Installation](#installation-1)
   - [Running Unit Testcases](#running-unit-testcases-1)
4. [Swagger UI Documentation](#swagger-ui-documentation)

## Project Overview

Company Connect is a full-stack application with the following features:
- **Company List Page:** Displays a list of companies with search functionality.
- **Company Details Page:** Provides detailed information about a company, including locations and geographical data visualization.
- **Swagger UI Documentation:** Interactive API documentation for backend services.

## Frontend Setup

The frontend of the application is built using React and Tailwind CSS. Here’s how to get started with the frontend:

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/supply-trace.git
   cd supply-trace/client

2. Start the front end local server:

    ```sh
    npm install
    npm run start

3. Open your browser and navigate to http://localhost:3000 to view the        application.

4. Running Unit Testcases

    ```sh
    npm test

## Backend Setup

The backend is developed using Flask. It provides RESTful APIs for managing and retrieving company and location data. Here is how you can get started:

### Prerequisites

- Python (v3.8 or later)
- pip

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/supply-trace.git
   cd supply-trace/server

2. Create a virtual environment and activate the virtual environment

    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`


3. Install Dependencies
    ```sh
    pip install -r requirements.txt

4. Setup environment variables

    ```sh
    FLASK_ENV=development
    LOG_FILE=app.log
5. Run the development server
    ```sh
    flask run
6. To run backend tests:
    Ensure you are in the server directory.

    ```sh
    pytest

7. Open your browser and navigate to http://localhost:5000 to access the API.

## Swagger UI Documentation

Swagger UI documentation has been implemented for this project. Here are the steps to access the api docs:

1. Make sure that your backend server is up. 

2. Access the api docs on http://localhost:5000/apidocs/

## Docker Containerization

1. For starting docker:
   
   ```sh
   docker compose up
2. Hit the http://localhost:3000/ for accessing the application.





   













