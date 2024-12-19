# User Registration Endpoint

## POST /user/register

### Description
This endpoint is used to register a new user.

### Request Body
The request body must be a JSON object containing the following fields:
- `fullName`: An object containing:
  - `firstName`: A string with at least 3 characters (required)
  - `lastName`: A string with at least 3 characters (required)
- `email`: A valid email address (required)
- `password`: A string with at least 6 characters (required)

### Example Request
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 201
- **Body**:
  ```json
  {
    "Result": {
      "User_Info": {
        "_id": "user_id",
        "fullName": {
          "firstName": "John",
          "lastName": "Doe"
        },
        "email": "john.doe@example.com",
        // ...other user fields...
      },
      "token": "jwt_token"
    },
    "msg": "Successfully Registered User",
    "meta": null
  }
  ```

#### Validation Error
- **Status Code**: 400
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

#### Server Error
- **Status Code**: 500
- **Body**:
  ```json
  {
    "msg": "Internal Server Error"
  }
  ```
