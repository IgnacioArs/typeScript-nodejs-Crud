import { Router } from "express";
//importamos controllador de rutas
import { obtenerNotas,crearNota, obtenerUnaNota, eliminarUnaNota, actualizarUnaNota,notasCantidad} from "../controllers/notasControllers";

const router = Router();

router.get("/obtenerNotas",obtenerNotas)

router.post("/crearNota",crearNota)

router.get("/obtenerUnaNota/:id",obtenerUnaNota)

router.delete("/eliminarUnaNota/:id",eliminarUnaNota)

router.put("/actualizarUnaNota/:id",actualizarUnaNota)

router.get("/notasCantidad",notasCantidad)

export default router;