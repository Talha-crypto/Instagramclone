//Basic Validatiion for collecting data from the users

const express = require("express")
const router = express.Router()

router.get('/',(req,res)=>{
    const {name,email,password} = req.body
    if(!email || !password || !name)
    {
        return res.status(422).json({error:"Please fill all the fields"}) // Status code for explaining type of error on console
    }
    res.json({message:"Successfuly posted!"})
})

module.exports=router