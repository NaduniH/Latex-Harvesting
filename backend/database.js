const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'your_username', // Replace with your database username
  password: 'your_password', // Replace with your database password
  database: 'your_database_name' // Replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database with thread ID:', connection.threadId);
});

module.exports = connection;
