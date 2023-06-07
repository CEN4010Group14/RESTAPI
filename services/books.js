const db = require('./db');
const config = require('../config');
const express = require('express');



async function getBookByISBN(isbn){
    const row = await db.query(
        `SELECT id, ISBN, Name,CONCAT("$", CONVERT(ROUND(Price,2), CHAR)) as Price, ROUND(Rating, 4) as Rating, GenreId, PublisherId, Year, Copies, Description FROM books.books b where b.ISBN=${isbn}`
    );

    return {
        row
    }
}

async function getBooksByAuthor(authorId) {
  const rows = await  db.query( `SELECT id, ISBN, Name,CONCAT("$", CONVERT(ROUND(Price,2), CHAR)) as Price, ROUND(Rating, 4) as Rating, GenreId, PublisherId, Year, Copies, Description FROM books.books b where b.id in 
        (select BookId from book_authors ba where ba.AuthorId = ${authorId})`
  );
  return {
      rows
  }

}

async function newBook(book) {
    await db.query(`call add_book(${book.ISBN}, ${book.Name}, ${book.Price}, ${book.Rating},${book.GenreId},
    ${book.Year}, ${book.Copies}, ${book.Description}, ${book.FirstName}, ${book.LastName})`)
    const r = JSON.stringify({success: true})
    return {
        r
    }
}

module.exports = {
    getBookByISBN, getBooksByAuthor, newBook
}