//Basic Validatiion for collecting data from the users

const express = require("express")
const { default: mongoose } = require("mongoose")
const router = express.Router()

const User=mongoose.model("User")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const {JWT_SECRET}=require('../keys')
const requireLogin= require('../middleware/requireLogin')

//Function for accesing the credentials of user
router.get('/protected',requireLogin,(req,res)=>{
    res.send("Hello USer")
})

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
//Sign in module
router.post('/signin',(req,res)=>{
    const {email,password} =req.body
    if(!email || !password)
    {
        return res.status(422).json({error:"Please enter Email or Password"})
    }
    //Accessing Email Password from database and allowing access to user
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Entered Invalid Email or Password"})
        }
        //Decrypting the password and comparing it with stored password on database
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch)
            {
                // res.status(422).json({message:"Successfuly Logged in"})
                    const token=jwt.sign({_id:savedUser.id},JWT_SECRET)
                    res.json({token})
            }
            else{
                return res.status(422).json({error:"Entered Invalid Email or Password"})
            }
        })
        //Error log for us to see in terminal for our ease
        .catch(err=>{
            console.log(err)
        })
    })
})
 
module.exports=router