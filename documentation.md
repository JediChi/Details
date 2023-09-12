
### DOCUMENTATION.md

# Person REST API Documentation

This document provides comprehensive documentation for the Person REST API, including how to use the API, request/response formats, and sample usage. Please refer to this documentation for guidance on setting up, running, and interacting with the API.

## Table of Contents

- [API Overview](#api-overview)
- [Request/Response Formats](#requestresponse-formats)
  - [Create a Person](#create-a-person)
  - [Get Person by Name](#get-person-by-name)
  - [Update Person by Name](#update-person-by-name)
  - [Delete Person by Name](#delete-person-by-name)
- [Sample API Usage](#sample-api-usage)
- [Known Limitations](#known-limitations)


## API Overview

The Person REST API provides endpoints for performing CRUD operations on a "person" resource. Each endpoint allows you to interact with person records in the database.

## Request/Response Formats

### Create a Person

**Request:**

- Method: POST
- Endpoint: `https://details-d61a.onrender.com/api`
- Body: JSON object with person details (name, email, etc.)

**Response:**

- Status: 201 Created
- Body: JSON object with the created person's details.

### Get Person by Id

**Request:**

- Method: GET
- Endpoint: `https://details-d61a.onrender.com/api/persons/:user_id`

**Response:**

- Status: 200 OK
- Body: JSON object with the person's details.

### Update Person by Id

**Request:**

- Method: PUT
- Endpoint: `https://details-d61a.onrender.com/api/persons/:user_id`
- Body: JSON object with updated person details.

**Response:**

- Status: 200 OK
- Body: JSON object with the updated person's details.

### Delete Person by Id

**Request:**

- Method: DELETE
- Endpoint: `https://details-d61a.onrender.com/api/persons/:user_id`

**Response:**

- Status: 200 OK
- Body: JSON object with a success message.

## Sample API Usage

Here are some sample API usage scenarios:

### Create a Person

**Request:**

    *```http
POST https://details-d61a.onrender.com/api
Content-Type: application/json
{
  "name": "Mark Essien",
  "email": "adanman@gmail.com",
  "phone_number": 23467543288
}

**Response:**

json

{
  "name": "Mark Essien",
  "email": "adanman@gmail.com",
  "phone_number": 23467543288
}

### Get Person by Id

**Request**:

    *```http
GET https://details-d61a.onrender.com/api/1

**Response**:

json

{
  "name": "Mark Essien",
  "email": "adanman@gmail.com",
  "phone_number": 23467543288
}

### Update Person by Id
**Request**:

    *```http
PUT https://details-d61a.onrender.com/api/1
Content-Type: application/json

{
  "name": "Chris",
}

**Response**:

json

{
  "name": "Chris",
  "email": "adanman@gmail.com",
  "phone_number": 23467543288
}

### Delete Person by Id

**Request:**

http

DELETE https://details-d61a.onrender.com/api/1

**Response:**

json

{
  "message": "User has been removed successfully"
}

### Known Limitations

The API enforces validation to ensure that fields are of the correct data type. Fields like name should only accept strings.