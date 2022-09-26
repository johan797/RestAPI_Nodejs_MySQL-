//router sirve para agrupar todas las rutas y colocarles un nombre
import { Router } from "express";
import { getEmployees } from "../controllers/employees.controllers.js";
import { createEmployees } from "../controllers/employees.controllers.js";
import { updateEmployees } from "../controllers/employees.controllers.js";
import { deleteEmployees,getEmployee } from "../controllers/employees.controllers.js";

//creamos un enrutador
const router = Router()



//ENDPOINTS
router.get('/employees', getEmployees)
//creamos una ruta para solicitur un solo empleado ya que
//la anterior ruta nos devuelve todos los empleados lo hacemos con
//parametros de express/:id
router.get('/employees/:id', getEmployee)

router.post('/employees',createEmployees )

//put nos sirve para actualizar todos los datos del objeto
//router.put('/employees/:id',updateEmployees )
//patch nos permite solo actualizar un dato del objeto por ejemplo name

router.patch('/employees/:id',updateEmployees )

router.delete('/employees/:id',deleteEmployees )

//exportamos el enrutador
export default router