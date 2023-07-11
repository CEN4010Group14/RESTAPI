const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getTopSellers(rating){
  //const offset = helper.getOffset(page, config.listPerPage);

  var data;
  if(typeof rating !== 'undefined'){
  data = await db.query(
      `SELECT *  
      FROM books      
      WHERE rating >= '${rating}'
      `
    );
  }

  return {
    data 
  }
}

module.exports = {
  getTopSellers
}