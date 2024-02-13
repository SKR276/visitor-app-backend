const express=require("express")
const visitorModel=require("../models/visitorModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let visitor=new visitorModel(data)
    let result=await visitor.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data=await visitorModel.find()
    .populate(
        "securityId","securityName"
    )
    .exec()
    res.json(data)
})

module.exports=router