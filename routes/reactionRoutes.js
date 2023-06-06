const express = require('express');
const { User, Thought, Reaction } = require('../models/models');


const router = express.Router();

// Route handler for creating a new reaction to a thought
router.post('/reactions/:thoughtId', (req, res) => {
  const { thoughtId } = req.params;
  const { reactionBody, username } = req.body;
  Reaction.create({ reactionBody, username })
    .then((newReaction) => {
      // Update the thought's reactions array
      Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $push: { reactions: newReaction._id } },
        { new: true }
      )
        .then(() => {
          res.json(newReaction);
        })
        .catch((error) => {
          res.status(500).json({ error: 'An error occurred' });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Route handler for deleting a reaction from a thought
router.delete('/reactions/:thoughtId/:reactionId', (req, res) => {
  const { thoughtId, reactionId } = req.params;
  // Remove the reaction document from the Reaction collection
  Reaction.findOneAndDelete({ _id: reactionId })
    .then(() => {
      // Remove the reaction from the thought's reactions array
      Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { reactions: reactionId } },
        { new: true }
      )
        .then(() => {
          res.json({ message: 'Reaction deleted successfully' });
        })
        .catch((error) => {
          res.status(500).json({ error: 'An error occurred' });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Other route handlers for reaction-related operations

module.exports = router;
