import reservasModel from "../models/reservasModel.js"

//CRUD
export async function createReservas(req, res){
   
    const reserva = req.body.reserva
    
    let documento
    try {
        documento = await reservasModel.create(reserva)
    } catch (error) {
        res.status(400).json(error.message)
    }
    
    res.status(201).json(documento)
}

//READ-LEER
export async function readReservas(req, res){

    const id = req.params.id

    let documento
    try {
        documento = await reservasModel.findOne({"_id":id})

    }catch(error){
        res.status(400).json(error.message)
        return;

    }

    res.status(200).json(documento)
}
//ACTUALIZAR-UPDATE
export async function updateReservas(req, res){
    
    const id = req.params.id
    const update = req.body.update
    
    let documento = null
    try {
        documento = await reservasModel.findOneAndUpdate({"_id":id},update)

    }catch(error){
        res.status(400).json(error.message)
        return;

    }

    res.status(200).json(documento)
}

//BORRAR-DELETE
export async function deleteReservas(req, res){
    
    const id = req.body.id

    let documento = null
    try {
        documento = await reservasModel.deleteOne({"_id":id})

    }catch(error){
        res.status(400).json(error.message)
        return;

    }

       res.status(200).json(documento)
}