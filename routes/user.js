const express = require('express')
const router = express.Router()
const users = require('../services/users')


// router.get('/', async function (req, res) {
//     res.send("Welcome Guest")
// })

router.post('/signup', async function(req, res) {
    var id = await addUser(req.body)
    var re = /\d+/
    id = id.r.match(re)[0]
    res.status(201).send({
        message: `User ID: ${m} has been added with success!`
    })
})

router.get('/:id', async function(req, res) {
    const name = await users.getName(req.params.id)
    console.log(name)
    res.send(`Welcome ${name}`)
})


module.exports = router