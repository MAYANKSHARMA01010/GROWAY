const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 👇 Your user signup/login APIs
app.use('/api/users', userRoutes);

// 👇 This will handle browser visits to http://localhost:5000
app.get('/', (req, res) => {
  res.send('🚀 Backend server is running fine!');
});

// 👇 Connect to DB and start server
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connected via Sequelize');
    await sequelize.sync({ force: false })
    console.log('✅ All models are synced');
  } catch (error) {
    console.error('& Sequelize DB connection error:', error);
  }
})();

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
