const express = require ('express')
const router = express.Router()
const wishlists = require('../services/wishlists.js')


router.get('/', async function(req, res, next) {
  try {
      const result = await wishlists.getAllWishlists();
      return res.json(result);
  } catch (err) {
      console.error(`Error while getting Book by ISBN `, err.message);
      next(err);
  }
});
 

  module.exports = router
