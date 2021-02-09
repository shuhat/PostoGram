const express = require ('express')

//Calling the router function
var router = express.Router()


var { Post } = require('../models/Post')

//GET req for READ operation
router.get('/', (req,res)=>{
    Post.find((err,data)=>{
        if(!err){
            res.send(data)
        }
        else{
            console.log("errors at get route");
        }
    })
})

//POST req send to the DB for a new post (CREATE operation)
router.post('/',(req,res)=>{
    var newPost = new Post ({
        title: req.body.title,
        postbody: req.body.postbody
    })

    newPost.save((err,data)=>{
// error function (error, data from database)
        if(!err){
            res.send(data)
        }
        else{
            console.log("ERROR at posting data");
        }
    })

})


//Verify the ID for UPDATING a post
// require('mongoose').Types.SchemaType
var postID = require('mongoose').Types.ObjectId
//PUT for UPDATE operation
router.put('/:id',(req,res)=>{ //id comes from database
    // VALIDATING object ID 
    if(!postID.isValid(req.params.id)){
        return res.status(400).send("No record with given ID: " + req.params.id)
    }
    else{
        var UpdatedPost = {
            title: req.body.title,
            postbody: req.body.postbody
        }
    }

    Post.findByIdAndUpdate(req.params.id,{$set: UpdatedPost}, {new:true}, (err,data)=>{
        if(!err){
        res.send(data)
        }
        else{
        console.log("ERROR at updating data")
        }
    })

})

router.delete('/:id', (req,res)=>{
    if(!postID.isValid(req.params.id))
        return res.status(400).send("No record with given ID: " + req.params.id)
   
    //ELSE    
    Post.findByIdAndRemove(req.params.id,{rawResult: true},(err,data)=>{ //see the docs of mongoose
        if(!err){
            res.send(data)
        }
        else{
            console.log("ERROR at deleting data")
        }
    })
})



module.exports = router