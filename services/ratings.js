const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function createRating(rating, userId, bookId) {
  const datestamp = new Date().toISOString().split('T')[0];
  const query = 'INSERT INTO Ratings (Rating, Datestamp, UserId, BookId) VALUES (?, ?, ?, ?)';
  const params = [rating, datestamp, userId, bookId];

  const result = await db.query(query, params);
  return result;
}



module.exports = {
  createRating
};