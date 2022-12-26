import clientModel from "../models/clientModel.js"

//CRUD
export async function createClient(req, res){
   
    const cliente = req.body.cliente
    
    let documento
    try {
        documento = await clientModel.create(cliente)
    } catch (error) {
        res.status(400).json(error.message)
    }
    
    res.status(201).json(documento)
}

//READ-LEER
export async function readClient(req, res){

    const id = req.params.id

    let documento
    try {
        documento = await clientModel.findOne({"_id":id})

    }catch(error){
        res.status(400).json(error.message)
        return;

    }

    res.status(200).json(documento)
}
//ACTUALIZAR-UPDATE
export async function updateClient(req, res){
    
    const id = req.params.id
    const update = req.body.update
    
    let documento = null
    try {
        documento = await clientModel.findOneAndUpdate({"_id":id},update)

    }catch(error){
        res.status(400).json(error.message)
        return;

    }

    res.status(200).json(documento)
}

//BORRAR-DELETE
export async function deleteClient(req, res){
    
    const id = req.body.id

    let documento = null
    try {
        documento = await clientModel.deleteOne({"_id":id})

    }catch(error){
        res.status(400).json(error.message)
        return;

    }

       res.status(200).json(documento)
}