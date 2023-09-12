# Person REST API

Welcome to the Person REST API repository! This project is a simple REST API that allows you to perform CRUD operations on a "person" resource. The API interacts with a database of your choice and handles dynamic parameters, such as adding or retrieving a person by name. Below, you'll find detailed information on how to set up, run, and use the API.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Database Modeling](#database-modeling)
- [Testing](#testing)
- [Dynamic Parameter Handling](#dynamic-parameter-handling)
- [GitHub Repository](#github-repository)
- [Documentation](#documentation)
- [Hosting](#hosting)
- [Acceptance Criteria](#acceptance-criteria)

## Project Overview

The Person REST API project is designed to provide a simple interface for performing CRUD operations on a "person" resource. It includes endpoints for creating, reading, updating, and deleting person records. The API is built using the NestJS framework and interfaces with a database of your choice to securely store and retrieve data.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

1. Node js

2. Postgres installed

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/JediChi/Details.git

   ```

2. Navigate to the project directory:

  ```bash
  cd into the project directory

3. Install the project dependencies:

   ```bash
   yarn install

### API Endpoints
The API provides the following endpoints for CRUD operations:

1. Create a Person

Endpoint: POST /api/
Request Body: JSON object with person details (name, age, etc.)
Response: JSON object with the created person's details.

2. Get Person by Id

Endpoint: GET /api/persons/:user_id
Response: JSON object with the person's details.

3. Update Person by Id

Endpoint: PUT /api/persons/:user_id
Request Body: JSON object with updated person details.
Response: JSON object with the updated person's details.

4. Delete Person by Id

Endpoint: DELETE /api/persons/:name
Response: JSON object with a success message.

### Database Modeling
For a detailed UML diagram representing the database structure and relationships, please refer to https://lucid.app/documents/view/0b7e7052-5f80-46b0-a0ee-e248289ee8bb

Testing
Automated testing scripts are available to verify the functionality of each CRUD operation. These scripts ensure that the API functions correctly without manual intervention.

### API live link
https://details-d61a.onrender.com

### Documentation
link to postman documentation: https://documenter.getpostman.com/view/25794905/2s9YC4TXmd