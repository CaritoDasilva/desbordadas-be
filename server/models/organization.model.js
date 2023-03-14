const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const OrganizationSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Requiere de un nombre para la nueva sucursal'],
        minlength: [3, 'Nombre de la sucursal no puede tener menos de 3 caracteres']
    },
    address: {
        type: String,
        // required: [true, 'Cada sucursal debe tener una dirección válida'],
        minlength: [5, 'Dirección de la sucursal debe tener un mínimo de 5 caracteres']
    },
    description: {
        type: String,
        required: [true, 'Cada sucursal debe tener una dirección válida'],
        minlength: [5, 'Dirección de la sucursal debe tener un mínimo de 5 caracteres']
    },
    lat: {
        type: Number,
        required: [true, 'La sucursal debe ingresarse con sus coordenadas correspondientes'],
        max: [90, 'La latitud no puede ser mayo a 90'],
        min: [-90, 'La latitud no puede ser inferior a -90']
    },
    lng: {
        type: Number,
        required: [true, 'La sucursal debe ingresarse con sus coordenadas correspondientes'],
        max: [180, 'La latitud no puede ser mayo a 180'],
        min: [-180, 'La latitud no puede ser inferior a -180']
    },    
    pictures: {
        type: Array
    }, 
    categories: {
        type: Array
    },
    facebook: {
        type: String
    },
    twitter: {
        type: String
    },
    whatsapp: {
        type: Number,
        validate: /^(56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/
    },
    instagram: {
        type: String
    }
})
OrganizationSchema.plugin(uniqueValidator);
const Organization = model('Organization', OrganizationSchema);
module.exports = Organization;