import {config  } from "dotenv";

config()
export const PORT = process.env.PORT || 3000
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || '52157*401632'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'
export const DB_PORT = process.env.DB_PORT || 3306

//process es un objeto global de node y env guarda todas las variable 
//de entorno de mi pc y PORT es una de esas variables
/*

console.log(process.env.PORT);
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.PASSWORD);
console.log(process.env.DB_DATABASE);*/