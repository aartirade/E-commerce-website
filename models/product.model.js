const mongoose = require('mongoose')

var productSchema = new mongoose.Schema({
    Product_ID : {
        type:String
    },
    Product_Title : {
        type:String
    },
    Product_Price : {
        type:String
    }
})

mongoose.model('Product', productSchema);