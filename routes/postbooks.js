const express = require ('express')
const router = express.Router()
const wishlists = require('../services/wishlists')


var bookNum;
var wishlistID;

router.post('/postbook',async function (req, res, next) {
    bookNum = req.body.bookKey;
    wishlistID = req.body.wishlistId;



    const doesItExist = await wishlists.checkIfExists(wishlistID);
    
    console.log(wishlistID)
    console.log(doesItExist)

   if(doesItExist == true){  
    try {
      const result = await wishlists.postBook(bookNum, wishlistID);
      res.status(201).send({
          message: `Book Posted with success!`
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