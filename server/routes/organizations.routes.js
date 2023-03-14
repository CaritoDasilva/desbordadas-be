const { getAllOrganizations, getSingleOrganization, 
    createorganizations, updateOrganization, deleteOrganization, 
    searchOrganizationBySearchValue, filterOrganizationsByCategories } = require('../controllers/organizations.controllers');

module.exports = app => {
    app.get('/api/organization/', getAllOrganizations);
    app.get('/api/organization/:id', getSingleOrganization);
    app.get('/api/organization/search/:searchType/:searchValue', searchOrganizationBySearchValue);
    app.post('/api/organization/search', filterOrganizationsByCategories);
    app.post('/api/organization', createorganizations);
    app.put('/api/organization/update/:id', updateOrganization);
    app.delete('/api/organization/delete/:id', deleteOrganization);

}