require('./db')
//install the express server
const express = require('express')
const bodyParser = require('body-parser')

var postRoutes = require('./controllers/postController')

const app = express()
const port = 3000;

app.use(bodyParser.json())

// app.use--> is a middleware
// app.use(endpoint, function)--> Can accept any http request
app.use('/Post', postRoutes)

//app.get('/', postRoutes)--> this will also work only if the post controller works on the same end point




app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})


