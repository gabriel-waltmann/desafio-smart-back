const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DB = process.env.DB_NAME;
const ssl = process.env.DB_SSL === "true";

module.exports = {
    username: USER,
    password: PASSWORD,
    database: DB,
    host: HOST,
    dialect: "postgres",
    dialectOptions: { ssl },
  
};
