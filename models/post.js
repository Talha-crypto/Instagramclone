const mongoose=require('mongoose')
const {ObjectId} =mongoose.Schema.Types

const postSchema= new mongoose.Schema({
    title:{
        type:String,
        required:"true"
    },
    body:{
        type:String,
        required:"true"
    },
    photos:{
        type:String,// we store image url thats why iage type string
        default:"no photo"
    },
    postedby:{
        type:ObjectId,//ID of the user posting images
        ref:"User"//it takes User model as reference
    }
})

mongoose.model("post",postSchema)