import mysql from "mysql2";


const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"kunal",
    database:"school_management"
});


export default connection