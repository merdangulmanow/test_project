// роутер который объединяет всех роутов
const Router = require('express')
const router = new Router()
// вызор роутеров
const userRouter = require('./userRouter')
const locationRouter = require('./locationRouter')
// обращение к роутам
router.use('/user', userRouter)
router.use('/location', locationRouter)

// экспорт роута
module.exports = router