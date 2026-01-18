const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const Book = require('./models/book');
const bookRoutes = require('./routes/bookRouter');
const publisherRoutes = require('./routes/publisherRouter');
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use(cors());

app.use('/books', bookRoutes);
app.use('/publishers', publisherRoutes);

app.use(express.static('frontend'));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("Access the application at http://127.0.0.1:3000/frontend/index.html");
});