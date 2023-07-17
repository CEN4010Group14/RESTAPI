const express = require('express')
const router= express.Router()
const users = require('../services/users')
const cart = require('../services/shoppingcart')
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

router.get('/:id/cart/subtotal', async function(req, res) {
    const name = await users.getName(req.params.id)
    const books = await cart.getCart(req.params.id)

    let buffer = (name + "'s Shopping Cart")
    let str = ""
    let subtotal = 0.00

    for (let i = 0; i < books.length; i++) {
        let item = await cart.getBook(books[i].bookid)
        let itemName = item[0].Name
        let itemPrice = parseFloat(item[0].Price).toFixed(2)
        subtotal += parseFloat(itemPrice)
        str = (`\n${itemPrice}\t\t\t${itemName}`)
        buffer = buffer.concat(str)
    }

    buffer = buffer.concat(`\n\nSubtotal: ${subtotal.toFixed(2)}`)
    console.log(buffer)
    res.send(buffer)
})

router.get('/:id/cart', async function(req, res) {
    const name = await users.getName(req.params.id)
    const books = await cart.getCart(req.params.id)

    let buffer = (name + "'s Shopping Cart")
    let str = ""
    let subtotal = 0.00

    for (let i = 0; i < books.length; i++) {
        let item = await cart.getBook(books[i].bookid)
        let itemName = item[0].Name
        let itemPrice = parseFloat(item[0].Price).toFixed(2)
        str = (`\n${itemPrice}\t\t\t${itemName}`)
        buffer = buffer.concat(str)
    }

    console.log(buffer)
    res.send(buffer)
})

router.post('/:id/cart/addbook',  async function(req, res) {
    console.log(req.query.bookid)
    const addBook = await cart.addBook(req.query.bookid, req.params.id)
    const book = await cart.getBook(req.query.bookid)
    const name = book.Name

    res.status(201).send({
        message: `${name}`
    })

    

})
// router.post('/:id/cart/addbook', async function(req, res) {
//     const name = await users.getName(req.params.id)
//     res.send(name + "'s Shopping Cart")
// })


module.exports = router
