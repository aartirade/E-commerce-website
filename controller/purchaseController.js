
const express = require('express');
const mongoose = require('mongoose')

const Purchase = mongoose.model('Purchase')

const router = express.Router();

router.get('/', (req, res) => {
    res.render("purchase/addOrEdit", {
        viewTitle : "Insert Purchase"
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
    var purchase = new Purchase();
    purchase.Title = req.body.Title;
    purchase.Price = req.body.Price;
    purchase.User = req.body.User;
    purchase.save((err, doc) => {
        if(err){
            console.log("Error has occured!" + err)
        }else{
            // console.log("Sucessfully Record Inserted!")
            res.redirect('purchase/list')
        }
    });

}


// Updating the record
function updateRecord(req,res){
    Purchase.findOneAndUpdate( {_id : req.body._id}, req.body, { new:true} , (err, doc) => {
        if(err){
            console.log("Error has occured!" + err)
        }else{
        
            res.redirect('purchase/list')
        }
    } )

     


}

// Deleting the Record 
router.get('/delete/:id', (req, res) => {
    Purchase.findByIdAndRemove(req.params.id, (err, doc) => {
        if(err){
            console.log("Error while Deleting the record" + err)
        }
        else{
            res.redirect('/purchase/list')
        }
    })
})


router.get('/list', (req, res) => {
    // res.json("From List")
    Purchase.find((err, doc) =>{
        if(err) {
            console.log("Error while retriving !")
        
        }else{
            res.render('purchase/list', {
                list : doc
            })
        
        }
    })
})

router.get('/:id', (req, res) => {
 Purchase.findById(req.params.id, (err, doc) => {
    if(err) {

    }else{
        res.render('purchase/addOrEdit', {
            viewTitle : 'Update Purchase', 
            purchase : doc
        })
    }
 })


})

module.exports = router;