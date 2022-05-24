const express= require('express')
const router= express.Router()
const mongoose= require('mongoose')
const requireLogin=require('../middleware/requireLogin')
const Post=mongoose.model("Post")

router.get('/allpost',(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")//populate is used for selecting arguments from post to show to user
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

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

router.get('/mypost',requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id})// this method is used to see post of user that is logged in
    .populate("postedBy","_id")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports=router