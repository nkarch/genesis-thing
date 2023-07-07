import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

// https://stackoverflow.com/a/53145407 - socketPath

const db_config = {
    socketPath: process.env.DB_SOCKET_PATH,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
};

const connection = mysql.createConnection(db_config);

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to database: " + err.stack);
        return;
    }

    console.log("Connected to database as id: " + connection.threadId);
});

export default connection;
