'user strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'HOST_IP',
    port     : 3306,
    user     : 'DB_USER',
    password : 'DB_PASSWORD',
    database : 'DB_SCHEMA'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;