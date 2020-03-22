const path = require('path')
const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

const products = []

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true,
        formsCSS: true
    })
})

router.post('/add-product', (req, res, next) => {
    products.push({
        title: (req.body.title !== '' ? req.body.title : 'New Product')
    })
    res.redirect('/')
})

exports.routes = router
exports.products = products