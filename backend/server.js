const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, User } = require('./models');

const app = express();
app.use(bodyParser.json());

// POST route to create a user (you already have this)
app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

// ADD THIS: GET route to fetch all usersnp
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Connect to the database and start the server
sequelize.sync().then(() => {
  console.log('Database connected and synced');
  app.listen(8000, () => {
    console.log('Server running on port 8000');
  });
});
