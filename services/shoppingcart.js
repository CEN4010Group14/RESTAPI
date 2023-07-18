const db = require('./db')
const config = require('../config')
const express = require('express')

async function addBook(bookid, userid) {
    const rows = await db.query(`call addBook(${bookid}, ${userid})`)
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

module.exports = {
    addBook,
    deleteBook,
    getBook,
    getCart
}