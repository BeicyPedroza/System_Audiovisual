import mongoose from "mongoose";

const clientModel = mongoose.Schema({
    "nombre": {type:String, required:true},
    "cedula":{type:Number, required:true},
    "cell":{type:Number, required:true},
    "ciudad":{type:String, required:true},
    "email":{type:String, required:true}
})

export default mongoose.model("clients", clientModel)