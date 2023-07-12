const express = require('express');
const router = express.Router();
const services = require('../services/expre');

// Create a User
router.post('/', async (req, res) => {
  try {
    const user = req.body; // Assuming the request body contains the user object
    await services.createUser(user);
    res.sendStatus(201);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).send('Error creating user');
  }
});

// GET /api/users/:username
router.get('/:username', async (req, res, next) => {
  try {
    const username = req.params.username;
    const user = await services.getUserByUsername(username);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error('Error retrieving user:', err);
    res.status(500).json({ message: 'Error retrieving user' });
  }

});
// POST /api/credit-cards
router.post('/', async (req, res) => {
    try {
      const { username, cardNumber, expirationDate} = req.body;
      console.log(cardNumber,expirationDate)
      await services.createCreditCard(username, cardNumber, expirationDate);
      res.sendStatus(201);
    } catch (err) {
      console.error('Error creating credit card:', err);
      res.status(500).send('Error creating credit card');

    }
  });
  // PUT /api/users/:username

router.put('/:username', async (req, res) => {

  try {

    const username = req.params.username;

    const updatedFields = req.body; // Assuming the request body contains the updated fields

 

    await services.updateUser(username, updatedFields);

    res.sendStatus(204);

  } catch (err) {

    console.error('Error updating user:', err);

    res.status(500).send('Error updating user');

  }

});
module.exports = router;