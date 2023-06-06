const express = require('express');
const { User, Thought, Reaction } = require('../models/models');



const router = express.Router();

// Route handler for getting all users
router.get('/users', (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Route handler for creating a new user
router.post('/users', (req, res) => {
  const { username, email, password } = req.body;
  User.create({ username, email, password })
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Other route handlers for user-related operations

module.exports = router;
