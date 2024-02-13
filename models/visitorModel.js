const mongoose=require("mongoose")
const visitorSchema=new mongoose.Schema(
    {
        securityId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"security"
        },
        visitorName:{
            type:String,
            required:true},
        purpose:{
            type:String,
            required:true},
        address:{
            type:String,
            required:true},
        phoneNo:{
            type:String,
            required:true},
        visitDate:{
            type:Date,
            default:Date.now
        }
    }
)

module.exports=mongoose.model("visitor",visitorSchema)