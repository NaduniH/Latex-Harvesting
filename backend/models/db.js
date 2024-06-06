const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'latex_management'
});

console.log("db");


module.exports = pool.promise();
