const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');
const reactionRoutes = require('./routes/reactionRoutes');

const app = express();
const PORT = 3000;

// Middleware to parse request bodies as JSON
app.use(express.json());

// Use the route handlers
app.use('/users', userRoutes);
app.use('/thoughts', thoughtRoutes);
app.use('/reactions', reactionRoutes);

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database');

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
