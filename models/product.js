const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([])
        } else {
            cb(JSON.parse(fileContent))
        }
    })
}

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title ? title : 'New Product'
        this.imageUrl = imageUrl ? imageUrl : 'https://cdn.pixabay.com/photo/2016/03/09/15/21/glasses-1246611_1280.jpg'
        this.description = description ? description : ''
        this.price = price ? price : ''
    }

    save() {
        getProductsFromFile(products => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb)
    }
}