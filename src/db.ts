import Lowdb from "lowdb";
import fileSync from "lowdb/adapters/FileSync"

type Notas = {
    id:string,
    nombre:string,
    descripcion:string
}

type schema ={
    notas:Notas[]
}

let db: Lowdb.LowdbSync<schema>;

export const crearConexion = () => {
    const adapter = new fileSync<schema>("db.json");
    db = Lowdb(adapter);
    db.defaults({notas: []}).write();
}

export const obtenerConexion = () => db;


/* obtenerConexion().get('notas').push({}) */