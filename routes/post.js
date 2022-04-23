const express= require('express')
const router= express.Router()
const mongoose= require('mongoose')
const requireLogin=require('../middleware/requireLogin')

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body}= req.body
    if(!title || !body){
        return res.status(422).json({error:"Post must have Title and Body"})
    }
    consolle.log(req.user)
        res.send("Ok")
        // const post = Post({
        //     title,
        //     body,
        // })
})

module.exports=router