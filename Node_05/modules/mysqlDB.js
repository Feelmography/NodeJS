import mysql from "mysql2";

const ConnConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "!Biz8080",
  database: "world",
};

const dbConn = mysql.createConnection(ConnConfig);

export default dbConn;
