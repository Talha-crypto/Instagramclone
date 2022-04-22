const express= require('express')
const router= express.router()
const mongoose= require('mongoose')

require.post('/createpost',(req,res)=>{
    const {title,body}= req.body
    if(!title || !body){
        return res.status(422).json({error:"Post must have Title and Body"})
        const post = Post({
            title,
            body,
        })
    }
})

module.exports=router