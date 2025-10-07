import mongoose from "mongoose";
const doctorSchema=new mongoose.Schema({
name:{
    type:String,
    required:true,
},
salary:{
    type:Number,
    required:true
},
experienceInYears:{
    type:Number,
    default:0
},
worksInHospitals:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"HospitalRecord"
}],
},{timestamps:true})
export const DoctorRecord=mongoose.model("DoctorRecord",doctorSchema)