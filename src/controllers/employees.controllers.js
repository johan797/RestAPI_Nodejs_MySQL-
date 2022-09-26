
import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    //throw new Error('My error')
    try {
        
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
};

export const getEmployee = async (req, res) => {

    try {
        //const [rows] =await pool.query ('SELECT * FROM employee')
        //res.json(rows)
        //con req.params extraemos todos los parametros y con
        //req.params.id podemos obtener solo el id
        //console.log(req.params.id);
        const [rows] = await pool.query('SELECT * FROM employee WHERE id =?', [req.params.id])
        //console.log(rows);
        //res.send('obteniendo un empleado')
        if (rows.length <= 0) return res.status(404).json({
            message: 'employee not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        })

    }
};

export const createEmployees = async (req, res) => {
    // no es necesario que validemos el req.body en el try por lo que lo
    //sacamos de ahy
    const { name, salary } = req.body;
    try {

        //pool.query('INSERT INTO employees(name,salary) VALUES(?,?) ', [])
        //guardamos en una constante lo que nos pasa el metodo body

        //antes de recibir los datos podriamos hacer condicionales para validarlos
        //ver si el tipo de dato
        //consultamos de manera asincrona con pool y le pasamo el nombre y el salario en orden
        const [rows] = await pool.query('INSERT INTO employee(name,salary) VALUES(?,?) ',
            [name, salary])

        //imprimimos en consola el objeto json que se envio 
        //con la solicitud get mediante console.log(req.body)
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message: "something goes wrong"
        })
    }

}

export const deleteEmployees = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id =?;', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({ message: 'Employee not found' })
        console.log(result);
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "something goes wrong"
        })
    }

}


export const updateEmployees = async (req, res) => {
    const { id } = req.params
    //const {id}= req.params equivalente a const id= req.params.id
    const { name, salary } = req.body

    try {
        //el infunull dice que si no pasamo nada entonces no lo actualiza a null sino 
        //que lo deja con el valor que ya tenia. 
        const [result] = await pool.query('UPDATE employee SET name =IFNULL(?, name),salary =IFNULL(?,salary) WHERE id =?', [name, salary, id])
        if (result.affectedRows == 0) return res.status(404).json({
            message: 'employee not found'
        })

        const [rows] = await pool.query('SELECT * FROM employee WHERE id= ?', [id])

        //console.log(id,name, salary);
        console.log(result);
        res.json(rows[0])

    } catch (error) {
            return res.status(500).json({
                message: "something goes wrong"
            })


    }

}




