const {Locations, User} = require('../models/index')
const { Op } = require('sequelize');

class LocationController {
    async create(req, res) {
        /// метод для передачи геоданных определенного пользователья
        try { 
            ///  вывод "userId" из параметров
            const {userId} = req.params
            ///  вывод долготы и широты из тела запроса
            const {longitude, latitude} = req.body
            /// создание записи
            const set_location = await Locations.create({userId, longitude, latitude})
            return res.json(set_location)
        } catch (error) {
            return res.json({message:error.message})
        }
    }

    async getLastLocation(req, res) {
        /// метод для вывода последных геоданных пользователья
        try {
            ///  вывод "userId" из параметров
            const {userId} = req.params
            /// по определенному "userId" находим из базы последнюю созданную запись
            const lastLocation = await Locations.findOne({
                where: { userId},
                order: [ [ 'createdAt', 'DESC' ]],
               });
            return res.json(lastLocation)
        } catch (error) {
            return res.json({message: error.message})
        }
    }

    async getByDate (req, res){
        /// метод для вывода геоданных пользователья между двумя датами
        try {
            ///  вывод данных из тела запроса
            const {startDate, endDate, userId} = req.body
            /// поиск по базе
            const data = await Locations.findAll({where:{
                userId:userId,
                createdAt:{
                    [Op.between]: [startDate, endDate]
                    }
                }, include : [{ /// для вывода имени и фамилии пользователя
                    model:User, attributes:['name', 'lastname']
                }]
            })
            return res.json(data)
        } catch (error) {
            return res.json({message:error.message})
        }
    }
}

module.exports = new LocationController()
