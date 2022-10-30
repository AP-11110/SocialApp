import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config();

export const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DB
});