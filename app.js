const express = require('express')
const app = express()
const mongoose=require("mongoose")
const PORT = 5000
const {MONGOURI}=require('./keys')

require('./models/user')
mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("Connected to the Database")
})
mongoose.connection.on('error',(err)=>{
    console.log("Error! disconnected",err)
})


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