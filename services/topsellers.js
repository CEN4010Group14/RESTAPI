const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getTopSellers(genre){
  //const offset = helper.getOffset(page, config.listPerPage);


  const data = await db.query(
      `SELECT *  
      FROM books      
      ORDER BY copies_sold DESC
      LIMIT 10`
    );

  return {
    data
  }
}

module.exports = {
  getTopSellers
}