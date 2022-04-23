const Jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const mongoose=require('mongoose')
const User= mongoose.model('User')

//Function Checking token for allowing the private credentials of user
module.exports=(req,res,next)=>{
    const {authorization} =req.headers
    // Authorization Bearer = Token given to user while logging in
    if(!authorization){
       return res.status(401).json({error:"You must be logged!"})
    }
    const token=authorization.replace("Bearer","")
    Jwt.verify(token,JWT_SECRET,(err,payload)=>{
    if(err){
        return res.status(401).json({error:"you must be logged in"})
    }
    const {_id} =payload
    User.findone(_id).then(userdata=>{
        req.user=userdata
        next()
    })
    
    })
}