const express = require('express');
const { User, Thought, Reaction } = require('../models/models');


const app = express();

// Define your API routes
app.get('/users', (req, res) => {
  // Retrieve and return users from the database
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.post('/users', (req, res) => {
  // Create a new user in the database
  const newUser = req.body;
  User.create(newUser)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Define other API routes for thoughts, reactions, etc.

// Start your server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
