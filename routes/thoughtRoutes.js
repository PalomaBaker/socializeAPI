const express = require('express');
const { User, Thought, Reaction } = require('../models/models');


const router = express.Router();

// Route handler for getting all thoughts
router.get('/thoughts', (req, res) => {
  Thought.find()
    .then((thoughts) => {
      res.json(thoughts);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Route handler for creating a new thought
router.post('/thoughts', (req, res) => {
  const { thoughtText, username } = req.body;
  Thought.create({ thoughtText, username })
    .then((newThought) => {
      // Update the user's thoughts array
      User.findOneAndUpdate(
        { username },
        { $push: { thoughts: newThought._id } },
        { new: true }
      )
        .then(() => {
          res.json(newThought);
        })
        .catch((error) => {
          res.status(500).json({ error: 'An error occurred' });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Other route handlers for thought-related operations

module.exports = router;
