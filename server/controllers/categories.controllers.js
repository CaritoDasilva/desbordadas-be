const Category = require('../models/category.model');

module.exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json({ categories });

    } catch(err) {
        return res.json({ message: 'No hemos podido traer la data', error: err });
    }
}

module.exports.createCategory = async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json({ newCategory });
    } catch(err) {
        return res.json({ message: 'No hemos podido traer la data', error: err });
    }
}