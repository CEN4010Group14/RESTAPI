const db = require('./db');
const config = require('../config');

async function getBook(isbn = 1){
    console.log(`book.js isbn ${isbn}`)
    const row = await db.query(
        `SELECT * FROM books.books b where b.ISBN=${isbn}`
    );

    return {
        row
    }
}

module.exports = {
    getBook
}