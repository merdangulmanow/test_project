const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    // вызов необходимых переменных
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
