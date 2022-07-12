const express = require('express')
const cors= require('cors')
const app = express()
const mongoose=require("mongoose")
const PORT = 5000
const {MONGOURI}=require('./keys')


mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("Connected to the Database")
})
mongoose.connection.on('error',(err)=>{
    console.log("Error! disconnected",err)
})

require('./models/user')
require('./models/post')


// Used CORS to allow data to be fetched by the Front-end.
app.use(cors())
app.use(express.json())   // To parse data that is sent by user in JSON format. without it there will be error.
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

/*const custommiddleware = (req,res,next)=>{
 console.log("CustomMiddleware")  
 next() 
}

//app.use(custommiddleware)  syntax for using middleware for allroutes

app.get('/',(req,res)=> {
    res.send("Hello World")
})

app.get('/about',custommiddleware,(req,res)=>{// custommiddleware syntax for using middleware for specific route
    console.log("about")
    res.send("About Page")
})*/

app.listen(PORT,()=>{
    console.log("The port number of server is",PORT)
})