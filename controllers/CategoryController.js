const {Category, Product} = require('../models/index');

const CategoryController = {
    async create(req, res){
        try {
            const category = await Category.create(req.body)
            res.status(201).send({msg: 'Categoria creada con éxito', category}) 
        
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async update(req, res){
       try {
        const category = await Category.update(req.body,{
            where: {
                id: req.params.id
            }
        })
        res.send('Categoría actualizada correctamente');
       } catch (error) {
        console.error(error);
        res.status(500).send(error)
       }
    },
    async destroy(req, res){
        try {
            await Category.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.send('Categoría eliminada correctamente')
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async getAll(req, res){
        try {
            const category = await Category.findAll({
                include:[{model: Product, attibutes:['name']}]
            })
            res.send(category)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async getAll(req, res){
        try {
            const categories = await Category.findAll({
                where: {
                    id: req.params.id
                }
            })
            res.send(categories)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },
    async getAll(req, res){
        try {
            const categoryByName = await Category.findAll({
                where:{
                    name: req.params.name
                }
            })
            res.send(categoryByName)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    }
}

module.exports = CategoryController;

