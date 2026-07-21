const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },

    images: [{ type: String }], 

    specs: { type: Object }, 

    createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;