import express from "express"
import userMoldel from "../models/userModel.js"

const testRouter = express.Router()

testRouter.get("/:nombre", async (req,res)=>{

    const nombre = req.params.nombre

    let documentos;

    try {
        documentos = await userMoldel.find({nombre})
    }catch(error){

    }
   
    res.json(documentos)
})

export default testRouter