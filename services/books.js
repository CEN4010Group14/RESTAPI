const db = require('./db');
const config = require('../config');



async function getBook(isbn = 1){
    const row = await db.query(
        `SELECT id, ISBN, Name, ROUND(Price,2) as Price, ROUND(Rating, 4) as Rating, GenreId, PublisherId, Year, Copies, Description FROM books.books b where b.ISBN=${isbn}`
    );

    return {
        row
    }
}

module.exports = {
    getBook
}