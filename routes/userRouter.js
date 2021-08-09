const Router = require('express')
const router = new Router()
// вызор контроллера
const userController = require('../controllers/userController')
// путь для обращение к методам
router.post('/', userController.create) // localhost:5000/api/user
router.get('/', userController.getAll)  // // localhost:5000/api/user
router.get('/:userId', userController.getOne)   //// localhost:5000/api/user/1

module.exports = router
