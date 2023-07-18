const db = require('./db');
const helper = require('../helper');
const config = require('../config');




async function createUser(user) {
  try {
    const { username, password, name, email, home_address } = user;

    // Replace undefined values with null
    const usernameParam = username !== undefined ? username : null;
    const passwordParam = password !== undefined ? password : null;
    const nameParam = name !== undefined ? name : null;
    const emailParam = email !== undefined ? email : null;
    const homeAddressParam = home_address !== undefined ? home_address : null;

    const result = await db.query(
      'INSERT INTO users (username, password, name, email, home_address) VALUES (?, ?, ?, ?, ?)',
      [usernameParam, passwordParam, nameParam, emailParam, homeAddressParam]
    );

    // Check the result to ensure the user was successfully created
    if (result.affectedRows === 1) {
      console.log('User created successfully');
    } else {
      throw new Error('Failed to create user');
    }
  } catch (err) {
    throw err;
  }
}


async function getUserByUsername(username) {
  const row = await db.query(`SELECT * FROM users WHERE username = '${username}'`);
  return row;
}
async function createCreditCard(username,cardNumber,expirationDate) {
    try {
      // Retrieve user ID based on username
      const users = await db.query('SELECT id FROM users WHERE username = ?', [username]);
      if (users.length === 0) {
        throw new Error('User not found');
      }
      
      const userId = users[0].id;
      
  
      // Insert credit card into database
      await db.query('INSERT INTO credit_cards (user_id, card_number, expiration_date) VALUES (?, ?, ?)', [
        userId,
        cardNumber,
        expirationDate
      ]);
    } catch (err) {
      throw err;
    }
  }
  
  
  async function updateUser(username, updatedFields) {
    try {
      // Generate the SET clause for the SQL query
      const setClause = Object.keys(updatedFields)
        .map(field => `${field} = ?`)
        .join(', ');
  
      // Generate the parameter values for the SQL query
      const values = Object.values(updatedFields);
      values.push(username); // Add the username value at the end of the values array
  
      // Update the user in the database
      await db.query(`UPDATE users SET ${setClause} WHERE username = ?`, values);
    } catch (err) {
      throw err;
    }
  }
  
  




    module.exports = {
      getUserByUsername,createCreditCard,updateUser,createUser
    }