const {User,Order,Token, Sequelize} = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwt_secret} = require('../config/config.json')['development'];
const {Op} = Sequelize;


const UserController = {
     async create(req, res) {
        try {
        const password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create({...req.body, password, role:"user"})
            res.status(201).send({ msg: 'Usuario creado con éxito', user })
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
        
    },
    async getAll(req, res){
        try {
            const users = await User.findAll({
                include:[{model:Order, attributes:['title', 'order_number']}]
            })
            res.send({msg:'Todos los usuarios', users})
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async login(req, res){
       try {
            const user = await User.findOne({
                where:{
                    email: req.body.email
                },
            });
            if(!user){
                return res.status(400).send({msg: 'Usuario o contraseña incorrectos'});
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if(!isMatch){
                return res.status(400).send({msg: 'Usuario o contraseña incorrectos'});
            }
            let token = jwt.sign({id: user.id}, jwt_secret);
             Token.create({token, UserId: user.id});
            res.send({msg: 'Bienvenid@' + user.name, user, token});
       } catch (error) {
            console.error(error);
            res.status(500).send(error)
       }
    },
    async logout(req, res){
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({msg: 'Desconectado con éxito'})
        } catch (error) {
            console.error(error);
            res.status(500).send({msg: 'Hubo un problema al tratar de desconectarse'})
        }
    }
}


module.exports = UserController;
