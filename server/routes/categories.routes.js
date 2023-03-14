const { getAllCategories, createCategory } = require('../controllers/categories.controllers');

module.exports = app => {
    app.get('/api/category/', getAllCategories);
    app.post('/api/category/', createCategory);
}