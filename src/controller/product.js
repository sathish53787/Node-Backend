const Product = require("../models/product");
const shortid = require("shortid");
const slugify = require('slugify');

exports.createProduct = (req, res) => {

    // res.status(200).json({ file: req.files, body: req.body })

    const {
        name, price, description, quantity, category, createdBy
    } = req.body;

    let productPictures = [];

    if(req.files.length > 0) {
        productPictures = req.files.map(file => {
            return { img: file.filename }
        })
    }

    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        description,
        quantity,
        productPictures,
        category,
        createdBy: req.user._id
    });

    product.save((error, products) => {
        if(error){
            res.status(400).json({ error})
        }
        if(products){
            res.status(201).json({ products })
        }
    })

    
}
