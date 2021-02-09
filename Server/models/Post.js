const mongoose = require ('mongoose')

//-----------Creating Data Model------------------//

// mongoose.model (Name of the Collections, Object formed data, Custom name of the collections)
var Post = mongoose.model('Post',
{
    title: {type: String},
    postbody: {type: String}
}, 'Posts')

module.exports = {Post}