import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from "./routes/index.routes.js";
import {PORT} from './config.js';
const app= express()

//el async indica que tenemos una peticion asincrona y el await
// que estamos haciendo una promesa

//se lee: desde app desde  express el metodo json
app.use(express.json())

//declaramos que vamos a utilizar la rutas importadas de employeesRoutes
//le pusimos una ruta /api antes de employees
app.use('/api',employeesRoutes)
app.use(indexRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message:'endpoint not found'
    })
})

export default app 