"use strict";
require("dotenv/config");
const config = {
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE_NAME || 'library',
    dialect: 'mysql',
};
module.exports = config;
