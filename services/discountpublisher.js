const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function update(discount,publisher){
  var data;
  if(typeof discount !== 'undefined' && typeof publisher !== 'undefined'){
  data = await db.query(
      `update books
      set price = price - (price * '${discount}' / 100.0)
      where publisher_id = '${publisher}'
      `
    );
  }

  return;
}


module.exports = {
  update
}