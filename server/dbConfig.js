require('dotenv/config');
const {Sequelize} = require('sequelize');

const dbConfig = new Sequelize(process.env.Name, process.env.User, process.env.Pass,{
    dialect: process.env.dialect,
    host: process.env.host
});

module.exports = dbConfig;