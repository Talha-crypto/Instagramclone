//Basic Validatiion for collecting data from the users

const express = require("express")
const { default: mongoose } = require("mongoose")
const router = express.Router()

const User=mongoose.model("User")
const bcrypt=require("bcryptjs")


router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!email || !password || !name)
    {
        return res.status(422).json({error:"Please fill all the fields"}) // Status code for explaining type of error on console
    }
    //Function to check email and return the results after comparing it with(frontend input) the database data
    User.findOne({email:email})
    .then((savedUser)=>{ // Exception handling for checking email if already exists (Then and catch methods used)
        if(savedUser)
        {
            return res.status(422).json({error:"User already exist with this Email"})
        }
        //Encryption of password using BCRYPTJS package
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user =new User({
                email,
                password:hashedpassword,
                name
            })
            user.save()
            .then(user=>{
                res.json({message:"Saved Successfuly"})
            })
            .catch(err=>{console.log(err)})
        })
        })
        
    .catch(err=>{console.log(err)})
})

module.exports=router