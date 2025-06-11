const sequelize = require('./config/database'); // Import sequelize instance
const User = require('./models/user');
 
(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ PostgreSQL connected via Sequelize');
        await sequelize.sync({ force: false });
        console.log('✅ All models are synced');
    } 
    catch (error) {
        console.error('& Sequelize DB connection error:', error);
    }
})();
