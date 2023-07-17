const express = require('express')
const app = express()
const userRouter = require("./routes/user")
const cartRouter = require("./routes/cart")

app.use(express.static("public"))
app.use(logger)

app.use("/users", userRouter)
app.use("/users", cartRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
