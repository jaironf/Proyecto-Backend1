const { where } = require('sequelize');
const { Product, Category } = require('../models/index');
const category = require('../models/category');

const ProductController = {
    async create(req, res) {
        try {
            const product = await Product.create(req.body);
            product.addCategory(req.body.CategoryId)
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
    },
    async destroy(req, res) {
        try {
            await Product.destroy({
                where:{
                    id: req.params.id
                }
            })
            res.send('Producto Eliminado correctamente')
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async getAll(req, res){
        try {
            const product = await Product.findAll({
                include:[{model: Category, attributes:['name']}]
            })
            res.send(product)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async getById(req, res){
        try {
            const products = await Product.findAll({
                where:{
                    id: req.params.id
                }
            })
            res.send(products)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async getByName(req, res){
        try {
            const productByName = await Product.findAll({
                where:{
                    name: req.params.name
                }
            })
            res.send(productByName)
        } catch (error) {
            console.error(error);
            res.status(500).send(error) 
        }
    },
    async getByPrice(req, res){
        try {
            const productByPrice = await Product.findAll({
                where:{
                    price: req.params.price
                }
            })
            res.send(productByPrice)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)  
        }
    },
    async getByPriceDesc(req, res){
        try {
            const productDescPrice = await Product.findAll({
                order:[
                    ['price', 'DESC']
                ]
            })
            res.send(productDescPrice)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }
}

module.exports = ProductController;