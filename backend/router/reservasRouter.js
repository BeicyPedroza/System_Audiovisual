import express from "express"
import { createReservas, deleteReservas, readReservas, updateReservas } from "../controllers/reservasController.js"

const reservasRouter = express.Router()

//CRUD
//CREAR: POST
reservasRouter.post("/",(req,res)=>{
    createReservas(req, res)
})

//LEER: GET
reservasRouter.get("/:id",(req,res)=>{
    readReservas(req, res)
})


//ACTUALIZAR: PUT(para cambiar todos los datos)/PATCH(actualizar un sola variable)
reservasRouter.patch("/:id",(req,res)=>{
    updateReservas(req, res)
})

//ELIMINAR: DELETE
reservasRouter.delete("/",(req,res)=>{
    deleteReservas(req, res)
})


export default reservasRouter