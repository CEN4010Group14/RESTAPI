const express = require('express');
const router = express.Router();
const commentsService = require('../services/comments');

router.post('/', async function(req, res, next) {
  try {
    const { Comment, UserId, BookId } = req.body;
    const result = await commentsService.createComment(Comment, UserId, BookId);
    res.json(result);
  } catch (err) {
    console.error('Error while creating comment', err.message);
    next(err);
  }
});

module.exports = router;
