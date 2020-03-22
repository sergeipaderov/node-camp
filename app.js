const path = require('path')
const express = require('express')
// const bodyParser = require('body-parser')
// const expressHbs = require('express-handlebars')

// const rootDir = require('./util/path')
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()
const port = 3000

// Hbs:

// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}))
// app.set('view engine', 'hbs')

//Pug:

// app.set('view engine', 'pug')
app.set('view engine', 'ejs')
app.set('views', 'views')

// app.use(bodyParser.urlencoded({extended: false}))
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'})
})

app.listen(port)