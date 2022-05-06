const mongoose = require('mongoose')

var purchaseSchema = new mongoose.Schema({
    Title : {
        type:String
    },
    Price : {
        type:String
    },
    User : {
        type:String
    }
})

mongoose.model('Purchase', purchaseSchema);