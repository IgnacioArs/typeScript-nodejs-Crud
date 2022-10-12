import express, { urlencoded } from "express"
import cors from 'cors'
import morgan from 'morgan'
//import the routes
import notasRutas from './routes/notasRoutes';
//importamos con swagger-ui-express
import swaggerui from 'swagger-ui-express'
//importamos con swagger-jsdoc
import swaggerdoc from 'swagger-jsdoc'
//importamos la opciones para swagger
import {options} from './swaggerOptions'


//configuration
const app = express();
app.set('port',process.env.PORT || 3000);


//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//usamos swaggerdocs y le agregamos la opcion del archivo swaggerOptions
const visualizar = swaggerdoc(options);

//Routes
app.use(notasRutas)
//Routes para swagger
app.use("/documentacion",swaggerui.serve,swaggerui.setup(visualizar));


export default app