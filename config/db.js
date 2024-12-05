const mysql = require('mysql2');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"learning",
    password: "Jeancy01@"
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

module.exports = db;



