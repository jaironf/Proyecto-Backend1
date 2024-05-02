const {Order,User} = require('../models/index');

const OrderController = {
    async create(req,res){
        try {
            const order = await Order.create(req.body)
            res.status(201).send({msg: 'Pedido creado con exito', order})
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async getAll(req,res){
        try {
            const orders = await Order.findAll({
                include:[{model: User, attributes:['name','email']}],
            });
            res.send(orders)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }

}
//cambiar el include de user a product

module.exports = OrderController;