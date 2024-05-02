const {User,Order} = require('../models/index');

const UserController = {
    async create(req, res) {
        try {
            req.body.role = "user";
        const user = await User.create(req.body)
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
    }
}


module.exports = UserController;
