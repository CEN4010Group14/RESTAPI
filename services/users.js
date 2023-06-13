const db = require('./db')
const config = require('../config')
const express = require('express')

async function addUser(user) {
    const userID = await db.query(`call addUser(${user.id}, ${user.username}, ${user.password}, ${user.fname}, ${user.lname}, ${user.email}, ${user.address})`)
    const r = JSON.stringify({success: true, userID: userID})
    return r
}

async function getName(id) {
    const [rows] = await db.query('SELECT `fname` FROM `users` WHERE `id` = ?', [id])
    return rows.fname
}

module.exports = {
    addUser,
    getName
}