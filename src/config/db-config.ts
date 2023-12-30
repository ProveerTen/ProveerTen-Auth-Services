

 import mysql from 'mysql2';
 import 'dotenv/config';


 const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1095550738',
  database: 'ProveerTen',
  port: 3306
  });

 connection.connect((error) => {
      if (error) {
          console.error(`Error connecting to the database "${process.env.DATABASE}"`, error);
      } else {
          console.log(`Connection established with the database "${process.env.DATABASE}"`);
     }
 });

  export default connection;