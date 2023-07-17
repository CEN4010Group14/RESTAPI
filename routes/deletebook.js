const express = require ('express')
const router = express.Router()
const wishlists = require('../services/wishlists')


var bookNum;
var wishlistID;

router.delete('/deletebook',async function (req, res, next) {
    bookNum = req.body.bookKey;
    wishlistID = req.body.wishlistId;



    const doesItExist = await wishlists.checkIfExists(wishlistID);
    
    console.log(wishlistID)
    console.log(doesItExist)

   if(doesItExist == true){  
    try {
      const result = await wishlists.deleteBook(bookNum, wishlistID);
      res.status(201).send({
          message: `Book removed successfuly!`
  });
} catch (err) {
      console.error(`Buenos dias `, err.message);
      next(err);
  }
  console.log(bookNum)
}
else{
  res.send("This wishlist does not exist try again")
}

})


   

module.exports = router