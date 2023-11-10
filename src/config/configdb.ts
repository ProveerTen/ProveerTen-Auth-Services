import mysql from 'mysql2';
import 'dotenv/config';

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((error) => {
    if (error) {
        console.error("Error al conectar con la db", error);
    } else {
        console.log("Conexión establecida con la base de datos");
    }
});

export default connection;