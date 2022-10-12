import { Handler, json } from "express"
//llamamos a la base de datos
import {obtenerConexion} from '../db'
//importamos tambien nanoid la cual nos ayudara a generar id
import { nanoid } from "nanoid"

export const obtenerNotas:Handler = (req,res)=> {
    const data = obtenerConexion().get("notas").value()
    return res.json(data);
}

export const crearNota:Handler = (req,res)=> {
            const {nombre,descripcion} = req.body
           
            const tareaNuava = {
                id:nanoid(),
                nombre,
                descripcion,
            }
            console.log("POR CONSOLA EL DATO",tareaNuava);
            //aqui ya lo insertamos a la base de datos
            try {
                obtenerConexion().get("notas").push(tareaNuava).write();
                res.json(tareaNuava)
            } catch (error) {
                res.status(500).send(error);
            }
            
}

export const obtenerUnaNota:Handler =(req,res)=> {
    
    const unaNota =   obtenerConexion().get("notas").find({id:req.params.id}).value();
    if(!unaNota) return res.status(400).json({msg:"nota no encontrada!!"})
    res.json(unaNota)

}

export const eliminarUnaNota:Handler =  (req,res)=> {
    const unaNota =   obtenerConexion().get("notas").find({id:req.params.id}).value();
    if(!unaNota) return res.status(400).json({msg:"nota no encontrada para eliminar!!"})
   
    const notaEliminada = obtenerConexion().get("notas").remove({id:req.params.id}).write();
    res.json(notaEliminada);
}

export const actualizarUnaNota:Handler= (req,res)=> {
    const unaNota =   obtenerConexion().get("notas").find({id:req.params.id}).value();
    if(!unaNota) return res.status(400).json({msg:"nota no encontrada para eliminar!!"})
    const notaActualizada = obtenerConexion().get("notas").find({id:req.params.id}).assign(req.body).write();
    res.json(notaActualizada)

}

export const notasCantidad:Handler =(req,res)=> {
    const cantidadNotas =  obtenerConexion().get("notas").value().length;
    res.json(cantidadNotas);
}