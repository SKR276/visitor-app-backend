const mongoose=require("mongoose")
const visitorSchema=new mongoose.Schema(
    {
        visitorName:String,
        purpose:String,
        address:String,
        phoneNo:String
    }
)

module.exports=mongoose.model("visitor",visitorSchema)