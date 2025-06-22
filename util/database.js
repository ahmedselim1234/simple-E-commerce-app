// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "our-data",//name of schema
//   password: "ahmedmysql-1",//the password od database
// });

// module.exports=pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("our-data", "root", "ahmedmysql-1", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
