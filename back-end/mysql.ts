const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: '3306',
  database: 'blog'
})
setInterval(() => {
  connection.query('', (err) => {
    if (err) {
      console.log(err)
    }
  })
}, 30000)
module.exports = connection
