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


  # User Login Endpoint

  ## POST /user/login

  ### Description
  This endpoint is used to log in an existing user.

  ### Request Body
  The request body must be a JSON object containing the following fields:
  - `email`: A valid email address (required)
  - `password`: A string with at least 6 characters (required)

  ### /user/login

  This endpoint allows a user to log in to the system.

  #### Example Request
  ### Example Request
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

  ### Responses

  #### Success
  - **Status Code**: 200
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
      "msg": "Successfully Logged In",
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

# User Profile Endpoint

## GET /user/profile

### Description
This endpoint is used to get the profile of the logged-in user.

### Responses

#### Success
- **Status Code**: 200
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
      }
    },
    "msg": "Your Profile",
    "meta": null
  }
  ```

#### Unauthorized
- **Status Code**: 401
- **Body**:
  ```json
  {
    "message": "Unauthorized Access"
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

# User Logout Endpoint

## GET /user/logout

### Description
This endpoint is used to log out the logged-in user.

### Responses

#### Success
- **Status Code**: 200
- **Body**:
  ```json
  {
    "Result": null,
    "msg": "Successfully Logged Out",
    "meta": null
  }
  ```

#### Unauthorized
- **Status Code**: 401
- **Body**:
  ```json
  {
    "message": "Unauthorized Access"
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

  # Captain Registration Endpoint

  ## POST /captain/register

  ### Description
  This endpoint is used to register a new captain.

  ### Request Body
  The request body must be a JSON object containing the following fields:
  - `email`: A valid email address (required)
  - `fullName`: An object containing:
    - `firstName`: A string with at least 3 characters (required)
    - `lastName`: A string with at least 3 characters (optional)
  - `password`: A string with at least 6 characters (required)
  - `vehicle`: An object containing:
    - `color`: A string representing the vehicle color (required)
    - `plate`: A string representing the vehicle plate number (required)
    - `capacity`: A number representing the vehicle capacity (required)
    - `vehicleType`: A string representing the vehicle type (bike, car, auto) (required)

  ### Example Request
  ```json
  {
    "email": "captain@example.com",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "password": "secret123",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```

  ### Responses

  #### Success
  - **Status Code**: 201
  - **Body**:
    ```json
    {
      "Result": {
        "Captain_Info": {
          "_id": "captain_id",
          "email": "captain@example.com",
          "fullName": {
            "firstName": "John",
            "lastName": "Doe"
          },
          "vehicle": {
            "color": "Red",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
          }
          // ...other captain fields...
        },
        "token": "jwt_token"
      },
      "msg": "Successfully Registered Captain",
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


# Captain Login Endpoint

## POST /captain/login

### Description
This endpoint is used to log in an existing captain.

### Request Body
The request body must be a JSON object containing the following fields:
- `email`: A valid email address (required)
- `password`: A string with at least 6 characters (required)

### Example Request
```json
{
  "email": "captain@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 200
- **Body**:
  ```json
  {
    "Result": {
      "Captain_Info": {
        "_id": "captain_id",
        "fullName": {
          "firstName": "John",
          "lastName": "Doe"
        },
        "email": "captain@example.com",
        // ...other captain fields...
      },
      "token": "jwt_token"
    },
    "msg": "Successfully Logged In",
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

#### Unauthorized
- **Status Code**: 401
- **Body**:
  ```json
  {
    "message": "Invalid email or password"
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

# Captain Profile Endpoint

## GET /captain/profile

### Description
This endpoint is used to get the profile of the logged-in captain.

### Responses

#### Success
- **Status Code**: 200
- **Body**:
  ```json
  {
    "Result": {
      "Captain_Info": {
        "_id": "captain_id",
        "fullName": {
          "firstName": "John",
          "lastName": "Doe"
        },
        "email": "captain@example.com",
        // ...other captain fields...
      }
    },
    "msg": "Captain Profile fetched successfully",
    "meta": null
  }
  ```

#### Unauthorized
- **Status Code**: 401
- **Body**:
  ```json
  {
    "message": "Unauthorized Access"
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

# Captain Logout Endpoint

## GET /captain/logout

### Description
This endpoint is used to log out the logged-in captain.

### Responses

#### Success
- **Status Code**: 200
- **Body**:
  ```json
  {
    "Result": null,
    "msg": "Successfully Logged Out",
    "meta": null
  }
  ```

#### Unauthorized
- **Status Code**: 401
- **Body**:
  ```json
  {
    "message": "Unauthorized Access"
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