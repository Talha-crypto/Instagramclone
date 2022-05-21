const express= require('express')
const router= express.Router()
const mongoose= require('mongoose')
const requireLogin=require('../middleware/requireLogin')
const Post=mongoose.model("Post")

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body}= req.body
    if(!title || !body){
        return res.status(422).json({error:"Post must have Title and Body"})
    }
    //Post saving func
    // console.log(req.user)
    // res.send("okay")
    req.user.password=undefined   // This done just for not storing the password in User's details of posted view in database
    const posted =new Post({
        title,
        body,
        postedBy:req.user
    })
    posted.save().then(result=>{
        res.json({post:result})
        })
        .catch(err=>{
            console.log(err)
    })
})

module.exports=router