const express = require('express')
const router= express.Router()
const users = require('../services/users')


router.get('/:id/cart', async function(req, res) {
    const name = await users.getName(req.params.id)
    res.send(name + "'s Shopping Cart")
})

 

module.exports = router