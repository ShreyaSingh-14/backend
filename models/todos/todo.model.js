import mongoose from "mongoose";
const todoSchema=new mongoose.Schema({
    content:
    {
        type:String,
        required:true,
    },
   
    createdBy:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"  
    },
    subTodos:
    [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]//Arrays of sub todos
},{timestamps:true})
export const Todo=mongoose.model("Todo",todoSchema)