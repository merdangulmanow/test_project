// загрузка библиотек
require('dotenv').config()
const express = require('express')
// подключение к базе
const sequelize = require('./db')
// загрузка моделей
const models = require('./models/index')
// загрузка роутов
const router = require('./routes/index')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/api', router)

// стрелочная функция, который синхронизируется с postgress
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        // запуск сервера
        app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
// вызов функции "start"
start()