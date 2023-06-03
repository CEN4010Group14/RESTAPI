const express = require("express");
const app = express();
const getBookByISBNRouter = require("./routes/books");
app.use(express.json());
app.use(
    express.urlencoded({
     extended: true,
    })
);
getBookByISBNRouter.use(express.json());

// app.get("/getBookByISBN", (req, res) =>{
//  //res.json(["FUCK","MFUCK","Michael","Ginger","Food"])
//  getBookByISBNRouter.get("/")
// });

app.use("/getBookByISBN", getBookByISBNRouter);
app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});