import app from './app'
//importamos la db
import {crearConexion} from './db'

crearConexion();
app.listen(app.get('port'),()=> {
    console.log("Run server port =>",app.get('port'));
});
