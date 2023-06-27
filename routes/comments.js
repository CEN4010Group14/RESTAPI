const express = require('express');
const router = express.Router();
const commentService = require('../services/comments');

// GET route for retrieving comments by book ID
router.get('/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);

  commentService.getComments(bookId)
    .then((comments) => {
      // Return the comments as JSON response
      res.json(comments);
    })
    .catch((err) => {
      console.error('Error:', err);
      res.status(500).json({ error: 'An error occurred' });
    });
});

module.exports = router