import userMoldel from "../models/userModel.js"

//CRUD
export async function createUser(req, res){
   
    //const {nombre, edad, ciudad} = req.body.usuario
    const usuario = req.body.usuario
    
    let documento
    try {
        documento = await userMoldel.create(usuario)
    } catch (error) {
        res.status(400).json(error.message)
    }
    
    res.status(201).json(documento)
}

//READ-LEER
export async function readUser(req, res){

    const id = req.params.id

    let documento
    try {
        documento = await userMoldel.findOne({"_id":id})

    }catch(error){
        res.status(400).json(error.message)
        return;

    }

    res.status(200).json(documento)
}
//ACTUALIZAR-UPDATE
export async function updateUser(req, res){
    
    const id = req.params.id
    const update = req.body.update
    //const{field, value}= update

    let documento = null
    try {
        documento = await userMoldel.findOneAndUpdate({"_id":id},update)

    }catch(error){
        res.status(400).json(error.message)
        return;

    }

    //documento[field]=value
    //documento.save()

    res.status(200).json(documento)
}

//BORRAR-DELETE
export async function deleteUser(req, res){
    
    const id = req.body.id

    let documento = null
    try {
        documento = await userMoldel.deleteOne({"_id":id})

    }catch(error){
        res.status(400).json(error.message)
        return;

    }

       res.status(200).json(documento)
}