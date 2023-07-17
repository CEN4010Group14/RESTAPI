const express = require ('express')
const router = express.Router()
const wishlists = require('../services/wishlists.js')
var mysql = require("mysql");
const db = require("../config");


router.get('/exists/:id', async function(req, res, next) {
    
    const wishlistID = req.params.id

	const sql = await db.query('SELECT COUNT(*) AS count FROM wishlists WHERE wishlistID = ?',[wishlistID])
    
    const result = sql[0].count;

    const wishlistExits = result ===1

		res.json({wishlistExits})
    if(wishlistExits == false){
   console.log('This id is invalid, does not exist')
    }
    else{
      console.log('Success')
    }
    })

 

  module.exports = router
