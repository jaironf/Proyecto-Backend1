const {Order,Product} = require('../models/index');

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
                include:[{model: Product, attributes:['name','price','genre'], through: { attributes: ['name'] }}],
            });
            res.send(orders)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }

}


module.exports = OrderController;