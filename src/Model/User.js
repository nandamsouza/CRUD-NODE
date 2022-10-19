const dbConfig = require('../../server/dbConfig');
const sequelize = require('sequelize');

const User = dbConfig.define('users',{
    id:{
        type: sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true 
    },
    name:{
        type: sequelize.STRING,
        allowNull: false
    },
    email:{
        type: sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;