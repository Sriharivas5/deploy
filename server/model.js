const mongoose=require("mongoose")

const dummySChema=mongoose.Schema({
  name:String,
  salary:Number
})

module.exports=mongoose.model("dummy",dummySChema)