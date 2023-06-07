const express = require("express");
const app = express();
const getBookByISBNRouter = require("./routes/bookIBSN");
const getBooksByAuthorRouter = require("./routes/bookAuthor");
const postNewBookRouter = require("./routes/newBook")
app.use(express.json());
app.use(
    express.urlencoded({
     extended: true,
    })
);
getBookByISBNRouter.use(express.json());



app.use("/getBookByISBN", getBookByISBNRouter);
app.use("/getBooksByAuthor", getBooksByAuthorRouter);
app.use("/newBook", postNewBookRouter);
app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});