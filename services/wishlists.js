
const db = require("../config");
const express = require ('express');



async function getAllWishlists() {
 
 const data = await db.query('SELECT * from wishlistassign');
 console.log(data)

 return {
  data
 }
}
async function getWishlistID(id) {
  var bookList = [];
  var wishID = 0;
  var wishlistName = "";
  
    const sql = await db.query(`SELECT * from wishlistdata WHERE wishlistId = ${id}`)
    for (let i = 0; i < sql.length; i++) {
      bookList[i] = sql[i].title;
    }
 

  const sql1 = await db.query(`SELECT * from wishlists WHERE wishlistID = ${id}`) 
    for (let i = 0; i < sql1.length; i++) {
      //fill wishlistName with name in databse
      wishlistName = sql1[i].wishlistname;
    }
    
    return { "Name of wishlist ": wishlistName, "List of Books": bookList };
};
async function postBook(bookNum,wishlistID){

  var final;
  
  const add = await db.query(`INSERT INTO wishlistassign (bookKey,wishlistId) values(?,?)`,[bookNum,wishlistID],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      console.log('Added')
    }
  })

  const title = await db.query(`select * from book where bookkey = ${bookNum}`)
  for (let i = 0; i < title.length; i++) {
    //fill wishlistName with name in databse
    final = title[i].title;
  }

  console.log(final)

  const add2 = await db.query('INSERT INTO wishlistdata (title,wishlistID) values (?,?)',[final,wishlistID],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      console.log('Added to second table')
    }
    })
  
}
async function deleteBook(bookNum,wishlistID){

  var final;


  const title = await db.query(`select * from book where bookkey = ${bookNum}`)
  for (let i = 0; i < title.length; i++) {
    //fill wishlistName with name in databse
    final = title[i].title;
  }

  console.log(final)

  
  const add = await db.query('DELETE FROM wishlistdata where title = ?',[final],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      console.log('Added')
    }
  })


  const add2 = await db.query('DELETE FROM wishlistassign where bookKey = ?',[bookNum],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      console.log('Added to second table')
    }
    })
  
}

async function checkIfExists(wishlistId){

	const check = await db.query('select wishlistID from wishlists where wishlistID = ?',[wishlistId])
    
  const result = check[0].count;

  const wishlistExits = result ===1
    
  if(wishlistExits == false){
   return true;
    }
    else{
      return false;
    }
}
  

module.exports = {
  getWishlistID,
  getAllWishlists,
  postBook,
  checkIfExists,
  deleteBook
};


