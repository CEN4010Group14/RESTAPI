const express = require ('express')
const router = express.Router()
const wishlists = require('../services/wishlists')




router.get('/get/:id', async function(req, res, next) {
  try {
      const ID = req.params.id
      const result = await wishlists.getWishlistID(ID);
      return res.json(result);
  } catch (err) {
      console.error(`Error while getting Book by ISBN `, err.message);
      next(err);
  }
});

 

  module.exports = router
