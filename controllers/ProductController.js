const { Product } = require('../models/index');

const ProductController = {
    async create(req, res) {
        try {
            const product = await Product.create(req.body)
            res.status(201).send({ msg: 'Producto creado con éxito', product })
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async update(req, res) {
        try {
            const product = await Product.update( req.body,{
                where: {
                    id: req.params.id
                }
            })
            res.send('Producto actualizado correctamente');
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }
}

module.exports = ProductController;