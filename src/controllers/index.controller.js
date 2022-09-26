
import {pool} from '../db.js'

export const ping = async(req,res) =>{
    // de un arreglo sacamos solo el result const[result]
    const [result] = await pool.query('SELECT "pong" AS result')
    //retornamos el resultado en formato json
    res.json(result[0])
}