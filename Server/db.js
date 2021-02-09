// const {MongoClient} = require('mongodb');

//Calling mongoose to use nodejs at the server-end/mongo
const mongoose = require ('mongoose')

//mongoose.connect(mongoose link from documentation, error function, {useNewUrlParser: true})
mongoose.connect('mongodb://localhost:27017/PostogramDB', 
err => {
    if(!err)
    {console.log("Server is connected!!")}
    else
    {console.log("ERROR!!");}
} , {useNewUrlParser: true} )