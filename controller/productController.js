
const express = require('express');
const mongoose = require('mongoose')

const Product = mongoose.model('Product')

const router = express.Router();

router.get('/', (req, res) => {
    res.render("product/addOrEdit", {
        viewTitle : "Insert Product"
    })
})


router.post('/', (req, res) => {
    if(req.body._id == '' ){
        insertRecord(req, res);
    }
    else{
        updateRecord(req,res);
    }
})


function insertRecord(req,res){
    var product = new Product();
    product.Product_ID = req.body.Product_ID;
    product.Product_Title = req.body.Product_Title;
    product.Product_Price = req.body.Product_Price;
    product.save((err, doc) => {
        if(err){
            console.log("Error has occured!" + err)
        }else{
            // console.log("Sucessfully Record Inserted!")
            res.redirect('product/list')
        }
    });

}


// Updating the record
function updateRecord(req,res){
    Product.findOneAndUpdate( {_id : req.body._id}, req.body, { new:true} , (err, doc) => {
        if(err){
            console.log("Error has occured!" + err)
        }else{
        
            res.redirect('product/list')
        }
    } )

     


}

// Deleting the Record 
router.get('/delete/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if(err){
            console.log("Error while Deleting the record" + err)
        }
        else{
            res.redirect('/product/list')
        }
    })
})


router.get('/list', (req, res) => {
    // res.json("From List")
    Product.find((err, doc) =>{
        if(err) {
            console.log("Error while retriving !")
        
        }else{
            res.render('product/list', {
                list : doc
            })
        
        }
    })
})

router.get('/:id', (req, res) => {
 Product.findById(req.params.id, (err, doc) => {
    if(err) {

    }else{
        res.render('product/addOrEdit', {
            viewTitle : 'Update Product', 
            product : doc
        })
    }
 })


})

module.exports = router;