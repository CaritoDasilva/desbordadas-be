const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
    title: {
        type: String,
        required: [true, 'Debe tener un título']
    },
    image: {
        type: String
    },
    cod: {
        type: String,
        required: ['Debe tener un código']
    }
});

const Category = model('Category', CategorySchema);

module.exports = Category;