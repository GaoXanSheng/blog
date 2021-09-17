const mysql = require('mysql2')
const conf = require('../conf.json')
const connection = mysql.createPool({
  host: conf.Sql_Serve_Url,
  user: conf.Sql_Server_UserName,
  password: conf.Sql_Server_Password,
  port: conf.Sql_Server_Port,
  database: conf.Sql_Server_Database
})
module.exports = connection
