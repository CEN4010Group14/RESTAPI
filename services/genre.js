const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getGenre(genre){
  //const offset = helper.getOffset(page, config.listPerPage);
  var data;
  if(typeof genre !== 'undefined'){
    data = await db.query(
      `SELECT *  
      FROM genre a
      INNER JOIN books b
      ON a.id=b.genre_id
      WHERE a.name = '${genre}'
      `
    );
  } else {
    data = await db.query(
      `SELECT * 
      FROM genre`
    );
  }
  
  

  return {
    data
  }
}

module.exports = {
  getGenre
}