
/*se puede crear una sola conexion o un conjunto
de conexiones para esto sirve la funcion create pool
importamos la funcion de la libreria mysql2 y utilizamos las promesas 
de esta libreria*/
import { createPool } from 'mysql2/promise'

import { DB_HOST, 
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_DATABASE
} from "./config.js";



// objeto de conexion donde ponemos todos
//los parametros de nuestra base de datos.
export const pool = createPool({

    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD, 
    port: DB_PORT, 
    database: DB_DATABASE

})

// con el metodo query de pool podemos hacer consultas SQL
/*
pool.query('SELECT * FROM employees'), (err,result) => {
}
*/