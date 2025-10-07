import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({
name:
{
    type:String,
    required:true,
},
},{timestamps:true})
export const Category=mongoose.model("Category",categorySchema)
//in mongodb it is stored as categories here we use it this way to 
//make sure the way it is passed to references is consistent as per the standard