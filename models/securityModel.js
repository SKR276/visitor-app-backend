const mongoose=require("mongoose")
const securitySchema=new mongoose.Schema(
    {
        securityName:String,
        securityId:String,
        address:String,
        phoneNo:String,
        email:String,
        password:String
    }
)

module.exports=mongoose.model("security",securitySchema)