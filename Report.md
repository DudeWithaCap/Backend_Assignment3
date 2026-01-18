# Web-Technologies, Back-End. Assignment 3
Adilet Kabiyev, SE-2433

## Description
Assignment topic: Bookstore management

This assignment focuses on using MongoDB for backend development and utilizing API endpoints for server to communicate with database. Also it features using frontend in order for users to interact with the backend part and database.

Features
- Complete CRUD operations for Books and Publishers
- RESTful API with proper HTTP status codes
- MongoDB integration with Mongoose
- Clean web interface with tab navigation
- Automatic timestamps (createdAt, updatedAt)

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js, MongoDB, Mongoose, CORS and .env
**Frontend:** HTML, CSS, JavaScript

##  Project Structure

```
Backend_Assignment3/
├── frontend/
│   ├── index.html
│   └── style.css
│   └── script.js
├── routes/
│   ├── bookRoutes.js
│   └── publisherRoutes.js
├── models/
│   ├── book.js
│   └── publisher.js
├── .env
├── package.json
└── server.js
```

## Setup

1. **Install dependencies**
```bash
npm install express mongoose dotenv cors nodemon
```

2. **Create .env file**
```
MONGODB_URI=[YOUR LOCALHOST HERE]
```

3. **Start MongoDB and run server**
```bash
npm start
```

### Screenshots from Postman Testing
<img width="886" height="611" alt="image" src="https://github.com/user-attachments/assets/700e5af1-49d9-492c-932f-37e4851c767b" />
<img width="878" height="485" alt="image" src="https://github.com/user-attachments/assets/b6b214e8-d4d8-45bc-9f57-bdd6b3a7317c" />

### Screenshots from MongoDB
<img width="1482" height="242" alt="image" src="https://github.com/user-attachments/assets/abfe73d3-75bd-48c9-b032-627e96af6cbc" />
<img width="1470" height="181" alt="image" src="https://github.com/user-attachments/assets/c9332c4f-8d16-4a24-b242-20e90258405c" />

### Screenshots from User perspective (Frontend)
<img width="1919" height="755" alt="image" src="https://github.com/user-attachments/assets/6edd5610-d153-4230-bb0d-c8d4253b9a0d" />
<img width="1919" height="542" alt="image" src="https://github.com/user-attachments/assets/1ebe3378-56d1-42c4-8fed-0ba57dd57d22" />
<img width="1919" height="461" alt="image" src="https://github.com/user-attachments/assets/f07bd03e-f9d7-461c-8050-b964c9128537" />
<img width="1919" height="793" alt="image" src="https://github.com/user-attachments/assets/6e1b9674-935f-4b62-9fce-3166506cd5fe" />

# Summary
This assignment focused on gaining practical experience in creating backend part of the web application with API endpoints and connecting MongoDB as NoSQL database for the server. It also focused on the frontend part, efficiently creating a fullstack project. Assignment improved knowledge on building REST API endpoints, introducing MongoDB as database solution, and demonstrating skills gained from Web-Technologies, Front-End class.




