const Router = require('express')
const router = new Router()
// вызор контроллера
const locationController = require('../controllers/locationController')
// путь для обращение к методам
router.post ('/:userId', locationController.create)
router.get('/test', locationController.testMethod)
router.get('/byDate', locationController.getByDate)
router.get('/:userId', locationController.getLastLocation)
module.exports = router
