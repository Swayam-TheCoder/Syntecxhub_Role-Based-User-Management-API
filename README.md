<h1>Role-Based User Management API</h1>

A RESTful Role-Based User Management API built using Node.js, Express.js, MongoDB, JWT, and Mongoose. This project demonstrates Authentication, Authorization, Role-Based Access Control (RBAC), and Admin Management functionalities.

## Features

- User Registration (Signup)
- User Login with JWT Authentication
- Password Hashing using bcrypt
- Role-Based Authorization (Admin/User)
- Protected Routes using JWT
- Admin Dashboard
- Get All Users
- Promote User to Admin
- Block User
- Unblock User
- Prevent Blocked Users from Logging In
- Proper Error Handling
- Secure Password Storage

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- dotenv
- Postman

## Project Structure

```
Role-Based-User-Management/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── adminController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   ├── authRoutes.js
│   └── adminRoutes.js
│
├── .env
├── server.js
└── package.json
```

## User Roles

- User
- Admin

## Authentication

JWT Authentication is used to secure protected routes.

After successful login, a JWT token is generated containing:

- User ID
- Email
- Role

The token must be included in the Authorization header.

```
Authorization: Bearer YOUR_JWT_TOKEN
```

## API Endpoints

### Authentication

#### Register User

```
POST /api/auth/signup
```

#### Login

```
POST /api/auth/login
```

#### Get Logged-in User Profile

```
GET /api/auth/profile
```

Requires JWT Token.

---

### Admin Routes

All admin routes require:

- Valid JWT
- Admin Role

#### Admin Dashboard

```
GET /api/admin/dashboard
```

---

#### Get All Users

```
GET /api/admin/users
```

Returns all registered users except their passwords.

---

#### Promote User to Admin

```
PATCH /api/admin/promote/:id
```

Promotes an existing user to the Admin role.

---

#### Block User

```
PATCH /api/admin/block/:id
```

Blocks a user from accessing the application.

---

#### Unblock User

```
PATCH /api/admin/unblock/:id
```

Allows a blocked user to log in again.

## Authorization Flow

```
Client Request
      │
      ▼
JWT Authentication Middleware
      │
      ▼
Role Middleware
      │
      ▼
Protected Admin Route
```

Only users with the **Admin** role can access admin endpoints.

## Security Features

- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes
- Role-Based Access Control (RBAC)
- Blocked User Login Restriction
- Password Excluded from User Responses

## HTTP Status Codes

- 200 - Success
- 201 - Resource Created
- 400 - Bad Request
- 401 - Unauthorized
- 403 - Forbidden
- 404 - Resource Not Found
- 500 - Internal Server Error

## Testing

All endpoints were tested using Postman.

## Author

Created as part of the **Syntecxhub Backend Development Internship**.

<br>
<br>

## Postman Testing Screenshots

### User Registration
<img width="1092" height="507" alt="Signup" src="https://github.com/user-attachments/assets/c9555681-2bd0-4b7d-a625-c6b8e3faae94" />


### User Login
<img width="1078" height="431" alt="Login" src="https://github.com/user-attachments/assets/0ddb25b1-5fa0-458f-85a8-71429bae16cd" />


### Protected Profile Route
<img width="1092" height="521" alt="Profile" src="https://github.com/user-attachments/assets/43933999-7d21-449e-b249-517d10719b6a" />


### Admin Dashboard
<img width="806" height="226" alt="MongoDb" src="https://github.com/user-attachments/assets/98558ac3-53b5-431c-9e26-abc832783ffc" />
<img width="1091" height="261" alt="Dashboard" src="https://github.com/user-attachments/assets/fec4954f-3c65-4a43-bf2b-d2ca23c206e2" />


### Get All Users
<img width="1082" height="622" alt="Get Users" src="https://github.com/user-attachments/assets/a0d5f308-31df-4319-8f5c-d33b5fcf30d9" />


### Promote User
<img width="1103" height="467" alt="Promote User" src="https://github.com/user-attachments/assets/1188be22-a649-4c76-8026-b404ae895a10" />


### Block User
<img width="1102" height="441" alt="Block User" src="https://github.com/user-attachments/assets/fb593414-055c-4264-bfe5-aba283f36456" />


### Unblock User
<img width="1103" height="435" alt="Unblock User" src="https://github.com/user-attachments/assets/c52d8e25-fcec-4663-86d8-8aa66c6a9220" />
