import mysql from "mysql2";


const connection = mysql.createConnection({
    host:"sql12.freesqldatabase.com",
    user:"sql12727942",
    password:"3Rq1ncFxAl",
    database:"sql12727942"
});


export default connection