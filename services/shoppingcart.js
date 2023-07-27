const db = require('./db')
const config = require('../config')
const express = require('express')

async function addBook(book, user) {
    const rows = await db.query(`call addBook(${book.id}, ${user.id})`)
    return rows
}

async function deleteBook(bookid, userid) {
    const rows = await db.query(`call deleteBook(${bookid}, ${userid})`)
    return rows
}

async function getBook(bookid) {
    const book = await db.query('SELECT `Name`, `Price` FROM `books` WHERE `id` = ?', [bookid])
    return book
}

async function getCart(id) {
    const book = await db.query('SELECT `bookid` FROM `cart` WHERE `userid` = ?', [id])
    return book
}

async function getName(id) {
    const [rows] = await db.query('SELECT `fname` FROM `users` WHERE `id` = ?', [id])
    return rows.fname
}

module.exports = {
    addBook,
    deleteBook,
    getBook,
    getCart,
    getName
}
