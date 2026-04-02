
# WebX Backend
Backend service for the WebX platform. This API handles authentication, user management, and core application logic. The codebase is structured for scalability, maintainability, and clear separation of concerns.

# Tech stack - 
 - Node.js
 - Express.js
 - MongoDB (Mongoose)
 - JSON Web Tokens (JWT)

# Architecture Overview
The project follows a layered architecture:

 - Routes handle request mapping
 - Controllers manage request/response flow
 - Models define data schemas
 - Middleware handles cross-cutting concerns (authentication, errors)
 - Config centralizes environment and database setup

This structure keeps business logic decoupled from routing and improves testability.

# Project Structure

WebX-backend/

│── controllers/

│── models/

│── routes/

│── middleware/

│── config/

│── utils/

# Core Features
- JWT-based authentication
- Protected API routes
- Centralized error handling
- Modular and scalable code structure

# Error Handling
All errors are handled through a centralized middleware to ensure consistent API responses.

# Security
 - Passwords are hashed before storage
 - JWT is used for stateless authentication
 - Protected routes enforce authentication via middleware





