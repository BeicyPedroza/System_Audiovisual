import mongoose from "mongoose";

const reservasModel = mongoose.Schema({
    "cedula":{type:Number, required:true},
    "fecha reservacion":{type:Date, required:true},
    "Lugar y hora":{type:String, required:true},
    "equipos a alquilar":{type:String, required:true}
})

export default mongoose.model("reservas", reservasModel)