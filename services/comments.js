const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getComments(bookId) {
  try {
    // Execute the SQL query to retrieve comments for the specified book ID
    const query = 'SELECT * FROM comments WHERE bookId = ?';
    const params = [bookId];
    const comments = await db.query(query, params);

    // Return the retrieved comments
    return comments;
  } catch (err) {
    console.error('Error retrieving comments:', err);
    throw err;
  }
}

module.exports = {
  getComments,
};
