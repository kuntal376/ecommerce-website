const express = require('express');
const router = express.Router();
const Product = require('../model/addProduct-model');
const multer = require('multer');
const path = require('path');

// --- A. Multer Configuration (File Upload Settings) ---
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Ensure this folder exists in your root directory!
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/products/add', upload.array('images', 5), async (req, res) => {
    try {
        const { name, brand, description, category, subCategory, ...extraData } = req.body;

        const imagePaths = req.files.map(file => file.filename);

        const newProduct = new Product({
            name,
            brand,
            description,
            category,
            subCategory,
            images: imagePaths, 
            specs: extraData 
        });

        // 4. Save to DB
        await newProduct.save();

        res.status(201).json({ message: "Product Added Successfully", data: newProduct });

    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

module.exports = router;