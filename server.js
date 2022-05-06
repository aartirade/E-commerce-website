require('./models/product.model')
require('./models/purchase.model')
require('./models/db')
// require('./models/db1')s

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const bodyparser = require('body-parser');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const app = express()


// Taking the data submitted by the form into req object of employeeController.js
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json())

// app.get('/', (req, res) => {
//     res.send("Hello Bro! Who got you smiling like that!!")
// } )


//Defining the path for our HTML files to render
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname:'hbs', defaultLayout : 'mainlayout', layoutsDir : __dirname + '/views/layouts/', handlebars: allowInsecurePrototypeAccess(Handlebars)}))
app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'views'));


var productcontroller = require('./controller/productController');
const { extname } = require('path');
app.use('/product', productcontroller);
var purchasecontroller = require('./controller/purchaseController');
app.use('/purchase', purchasecontroller);


app.listen(4000, () => {
console.log("Server started on port 4000")
})

app.get('/back', (req, res) => {
    res.redirect("http://localhost:4000/admin.html")
})





app.use(express.static(__dirname + '/Ownshop28'));