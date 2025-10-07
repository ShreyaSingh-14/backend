import mongoose from "mongoose";
const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})
const OrderSchema=new mongoose.Schema({
orderPrice:{
    type:Number,
    required:true,
},
customer:
{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},
orderItems:{
    type:[orderItemSchema]
},
address:{
    type:String,
    required:true,
},
statue:{
    type:String,
    enum:["PENDING","CANCELLED","DELIVERED"],
    default:"PENDING" 
    //this is very much like required field but includes only fixed choices
}
},{timestamps:true})
export const Order=mongoose.model("Order",OrderSchema)