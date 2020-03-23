const path = require('path')
const express = require('express')
// const bodyParser = require('body-parser')
// const expressHbs = require('express-handlebars')

const errorController = require('./controllers/error')
const adminRoutes = require('./routes/admin')
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

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)

app.listen(port)