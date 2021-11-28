const Sequelize = require('sequelize');

const connection = new Sequelize('database_name', 'username', 'password', {
    host: 'your_host',
    dialect: 'mysql',
    timezone: '-03:00',
});

module.exports = connection;