const express= require('express')
const router= express.Router()
const mongoose= require('mongoose')
const requireLogin=require('../middleware/requireLogin')
  
router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body}= req.body
    if(!title || !body){
        return res.status(422).json({error:"Post must have Title and Body"})
    }
    //Post saving func
    const post =new post({
            title,
            body,
            postedBy:req.user // How is posting the data will be retreived by this
        })
        post.save().then(result=>{
            res.json({post:result})
        })
        .catch(err=>{
            console.log(err)
        })
})

module.exports=router