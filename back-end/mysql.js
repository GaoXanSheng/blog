const mysql = require('mysql2')
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'blog'
})
module.exports = connection
