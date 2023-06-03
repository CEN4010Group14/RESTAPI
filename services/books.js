const db = require('./db');
const config = require('../config');



async function getBookByISBN(isbn = 1){
    const row = await db.query(
        `SELECT id, ISBN, Name,CONCAT("$", CONVERT(ROUND(Price,2), CHAR)) as Price, ROUND(Rating, 4) as Rating, GenreId, PublisherId, Year, Copies, Description FROM books.books b where b.ISBN=${isbn}`
    );

    return {
        row
    }
}

async function getBooksByAuthor(authorID) {
  const rows = await  db.query( `SELECT id, ISBN, Name,CONCAT("$", CONVERT(ROUND(Price,2), CHAR)) as Price, ROUND(Rating, 4) as Rating, GenreId, PublisherId, Year, Copies, Description FROM books.books b where b.id in 
        (select BookId from book_authors ba where ba.AuthorId = ${authorID})`
  );
  return {
      rows
  }

}

module.exports = {
    getBookByISBN, getBooksByAuthor
}