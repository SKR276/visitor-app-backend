const express=require("express")
const securityModel=require("../models/securityModel")

const router=express.Router()
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    const hashedPassword=await hashPasswordGenerator(password)
    data.password=hashedPassword
    let user=new securityModel(data)
    let result=await user.save()
    res.json({
        status:"success"
    })
})

router.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await securityModel.findOne({"email":email})
    if(!data)
    {
        res.json(
            {
                status:"invalid mail id"
            }
        )
    }
    console.log(data)
    let dbPassword=data.password
    let inputPassword=req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match)
    {
        return res.json(
            {
                status:"invalid password"
            }
        )
    }
    res.json(
        {
            status:"success"
        }
    )
})
router.get("/viewall",async(req,res)=>{
    let result=await securityModel.find()
    res.json(result)
})

module.exports=router