const express = require("express");
const app = express();
const port = 3000;
const DiscoutPublisherRouter = require("./routes/discountPublisher");
const GenreRouter = require("./routes/genre");
const commentsRouter = require('./routes/comments');
const getBookByISBNRouter = require("./routes/bookIBSN");
const getBooksByAuthorRouter = require("./routes/bookAuthor");
const postNewBookRouter = require("./routes/newBook")
const postAddAuthorRouter = require("./routes/addAuthor");
const EXPRERouter = require("./routes/expre");
const TopSellerRouter = require("./routes/topsellers");
const newCommentRouter = require("./routes/newComment");
const cartRouter = require("./routes/cart");
const RatingRouter = require("./routes/rating");
const newRatingRouter = require("./routes/newRating")
const getWishlistbyID = require('./routes/getwishlistById')
const postIDRouter = require('./routes/postbooks.js')
const getwishlists = require('./routes/getwishlist.js')
const deleteBook = require('./routes/deletebook')



app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/discountpublisher", DiscoutPublisherRouter);
app.use("/users", cartRouter);
app.use("/genre", GenreRouter);
app.use("/getBookByISBN", getBookByISBNRouter);
app.use("/getBooksByAuthor", getBooksByAuthorRouter);
app.use("/newBook", postNewBookRouter);
app.use("/addAuthor", postAddAuthorRouter)
app.use("/expre", EXPRERouter);
app.use("/topsellers", TopSellerRouter);
app.use('/comments', commentsRouter);
app.use('/newComment', newCommentRouter);
app.use('/rating', RatingRouter);
app.use('/newRating', newRatingRouter);
app.use("/new",postIDRouter);
app.use("/remove", deleteBook)
app.use('/wishlist',getwishlists);
app.use("/getwishlist",getWishlistbyID);
app.use('/rating', RatingRouter);


/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
