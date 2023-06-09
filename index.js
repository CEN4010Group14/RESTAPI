const express = require('express')
const app = express()
const userRouter = require("./sprint 2/routes/users")
const cartRouter = require("./sprint 2/routes/cart")

app.use(express.static("public"))
app.use(logger)

app.use("/users", userRouter)
app.use("/users/:id/shopping-cart", cartRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
