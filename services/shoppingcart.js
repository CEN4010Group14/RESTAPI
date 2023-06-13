const db = require('./db')
const config = require('../config')
const express = require('express')

async function addBook(book, user) {
    const rows = await db.query(`call addBook(${book.id}, ${user.id})`)
}