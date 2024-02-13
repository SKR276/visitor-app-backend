const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const securityRoute=require("./controllers/securityRouter")
const visitorRoute=require("./controllers/visitorRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sreelakshmi:Skr1234@cluster0.p9kjpl1.mongodb.net/visitorUsersDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/securities",securityRoute)
app.use("/api/visitors",visitorRoute)

app.listen(3001,()=>{
    console.log("server running")
})