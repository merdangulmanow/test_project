// для подключение к базе
const sequelize = require('../db')
// вызов "DataTypes"
const {DataTypes} = require('sequelize')

// таблица "User"
const User = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name : {type: DataTypes.STRING, allowNull: false},
    lastname : {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING, allowNull:false},
})

// таблица "Locations"
const Locations = sequelize.define('locations', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    longitude : {type: DataTypes.STRING, allowNull:false},
    latitude : {type: DataTypes.STRING, allowNull: false}
})

// relationship таблицы "Locations" с таблицой "User"
User.hasMany(Locations)
Locations.belongsTo(User)


module.exports = {
    User, Locations
}