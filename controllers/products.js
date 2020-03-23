const products = []

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        activeAddProduct: true,
        productCSS: true,
        formsCSS: true
    })
}

exports.postAddProduct = (req, res, next) => {
    products.push({
        title: (req.body.title !== '' ? req.body.title : 'New Product')
    })
    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
}