import { app } from "./app.js";
import connection from "./dbConnection/dbConnection.js";

const port = 1444;




// Connect to the database 
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      return;
    }
    console.log('\nConnected to the Mysql database with ID:', connection.threadId);
    app.listen(process.env.port || port , () => console.log(`server is running on port ${port}`));
  });
  



