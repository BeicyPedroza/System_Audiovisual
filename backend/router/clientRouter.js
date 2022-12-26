import express from "express"
import { createClient, deleteClient, readClient, updateClient } from "../controllers/clientController.js"

const clientRouter = express.Router()

//CRUD
//CREAR: POST
clientRouter.post("/",(req,res)=>{
    createClient(req, res)
})

//LEER: GET
clientRouter.get("/:id",(req,res)=>{
    readClient(req, res)
})


//ACTUALIZAR: PUT(para cambiar todos los datos)/PATCH(actualizar un sola variable)
clientRouter.patch("/:id",(req,res)=>{
    updateClient(req, res)
})

//ELIMINAR: DELETE
clientRouter.delete("/",(req,res)=>{
    deleteClient(req, res)
})


export default clientRouter