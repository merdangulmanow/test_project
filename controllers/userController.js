const {User} = require('../models/index')
const bcrypt = require('bcrypt')

class UserController {
    /// метод для регистрации пользователей
    async create(req, res) { 
        try {
            /// вовод из "body" переменных
            const {name, lastname, email, password} = req.body
            /// проверка на существование
            if (!name || !lastname|| !email || !password) {
                return res.json({message:"Заполните все поля!"})
            }
            /// проверка на существование такого email в базе
            const candidate = await User.findOne({where:{email:email}})
            if (candidate) {
                return res.json({message:"Пользователь с таким email уже существует!"})
            }
            /// хэширование пароля
            const hashPassword = await bcrypt.hash(password, 5)
            /// создание пользователья
            const user = await User.create({name, lastname, email, password: hashPassword})
            return res.json(user)
        } catch (error) {
            return res.json({message:error.message})
        }
    }

    async getAll(req, res) {
        /// метод для вывода всех пользователей
        try {
            const users = await User.findAll()
            return res.json(users)
        } catch (error) {
            return res.json({message:error.message})
        }
    }

    async getOne (req, res){
        /// метод для вывода одного пользователей по ID
        try {
            const {userId} = req.params;
            const user = await User.findOne({where:{id:userId}})
            return res.json(user)
        } catch (error) {
            return res.json({message:error.message})
        }
    }

}

module.exports = new UserController()
