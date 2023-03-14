const Organization = require('../models/organization.model');

// Método para traer todas las sucursales

module.exports.getAllOrganizations = async (req, res) => {
    try {
        const organizations = await Organization.find();
        return res.json({ organizations });

    } catch(err) {
        return res.json({ message: 'No hemos podido traer la data', error: err });
    }
}

// Método para crear una nueva sucursal

module.exports.createorganizations = (req, res) => {
    Organization.create(req.body.organization)
        .then(newlyCreatedOrganization => res.json({ newlyCreatedOrganization }))
        .catch(err => res.status(500).json(err));
}

//Método para borrar una sucursal

module.exports.deleteOrganization = (req, res) => {
    Organization.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result }))
        .catch(err => res.status(500).json({ err }));
}

//Método para traer una sucursal en específico

module.exports.getSingleOrganization = (req, res) => {
    Organization.findById(req.params.id)
        .then(organizations => res.json({ organizations }))
        .catch(err => res.status(500).json({ err }));
}

// Método para actualizar una sucursal

module.exports.updateOrganization = (req, res) => {
    Organization.findByIdAndUpdate(req.params.id, req.body.organization, { new: true })
        .then(result => res.json({ result }))
        .catch(err => res.status(500).json({ err }))
};

//Método para buscar por organización o por categoría
module.exports.searchOrganizationBySearchValue = (req, res) => {
    const {searchValue, searchType} = req.params;
    console.log("🚀 ~ file: organizations.controllers.js ~ line 50 ~ req.params", req.params)
    Organization.find({ [searchType]: { $regex: new RegExp(searchValue, "i") } })

    // Organization.find({ results: { $elemMatch: { name: {$eq: 'MONTUELA' } } }})
        .then(results => res.json({ results }))
        .catch(err => {
        console.log("🚀 ~ file: organizations.controllers.js ~ line 54 ~ err", err)
            
            return res.status(500).json({ err })
        });
};

module.exports.filterOrganizationsByCategories = async (req, res) => {
    console.log("🚀 ~ file: organizations.controllers.js ~ line 63 ~ module.exports.filterOrganizationsByCategories= ~ req", req.body)
    try {
        const organizations = await Organization.aggregate([
            {
                $match: {
                    categories: {
                        $in: req.body.data
                    }
                }
            }
        ])
        return res.json({ organizations });

    } catch(err) {

    }
}
