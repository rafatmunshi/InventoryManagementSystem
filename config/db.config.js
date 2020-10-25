'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'inventory_management'
});

dbConn.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;