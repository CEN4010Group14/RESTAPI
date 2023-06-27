const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// app.post('/post', (req, res) => {
//     const id = req.body.id;
//     const username = req.body.username;
//     const password = req.body.password;
//     const name = req.body.name;
//     const email = req.body.email;
//     const address = req.body.address;
//
//     db.query('INSERT INTO users values(?,?,?,?,?,?)',[id,username, password, name, email, address],(err, result)=>{
//         if (err) {
//             console.log(err);
//         }else{
//
//         console.log('connected');
//         }
//
//
// })




async function getByid(id){
    const row = await db.query(`SELECT * FROM users WHERE id=${id}`);
    return {
        row
    }
}
async function createCreditCard(username, creditCard) {
    try {
      // Retrieve user ID based on username
      const user = await db.query('SELECT id FROM users WHERE username = ?', [username]);
      if (user.length === 0) {
        throw new Error('User not found');
      }
      const userId = user[0].id;
  
      // Insert credit card into database
      await db.query('INSERT INTO credit_cards (user_id, card_number, expiration_date) VALUES (?, ?, ?)', [
        userId,
        creditCard.cardNumber,
        creditCard.expirationDate
      ]);
    } catch (err) {
      throw err;
    }
  }
  
  module.exports = {
    createCreditCard
  };


// app.listen(3000,(err)=>{
//     if (err) {
//         console.error('Failed to connect to MySQL:', err);
//         return;
//       }
//       console.log('on port 3000');
//     })
//
//     app.put('/users/:username', (req, res) => {
//         const username = req.params.username;
//         const { name, address } = req.body;
//
//         db.query('UPDATE users SET name = ?, address = ? WHERE username = ?', [name, address, username], (err, result) => {
//           if (err) {
//             console.log(err);
//             res.status(500).send('Error updating user');
//           } else {
//             if (result.affectedRows === 0) {
//               res.status(404).send('User not found');
//             } else {
//               res.sendStatus(200);
//             }
//           }
//         });
//       });
//
//       app.post('/users/:username/credit-cards', (req, res) => {
//         const username = req.params.username;
//         const { card_number, expiration_date } = req.body;
//
//         db.query('SELECT id FROM users WHERE username = ?', [username], (err, result) => {
//           if (err) {
//             console.log(err);
//             res.status(500).send('Error creating credit card');
//           } else {
//             if (result.length === 0) {
//               res.status(404).send('User not found');
//             } else {
//               const user_id = result[0].id;
//
//               db.query('INSERT INTO credit_cards (user_id, card_number, expiration_date) VALUES (?, ?, ?)', [user_id, card_number, expiration_date], (err, result) => {
//                 if (err) {
//                   console.log(err);
//                   res.status(500).send('Error creating credit card');
//                 } else {
//                   console.log('Credit card created successfully');
//                   res.sendStatus(201);
//                 }
//               });
//             }
//           }
//         });
//       });

    module.exports = {
        getByid
    }