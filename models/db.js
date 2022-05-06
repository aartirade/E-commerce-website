const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ProductDB', (err) => {
    if(err) {
        console.log("Error has occured while connection!! : " + err);

    }else
    {
        console.log('Connection established sucessfully!!')
    }
})

require('./product.model');
require('./purchase.model');