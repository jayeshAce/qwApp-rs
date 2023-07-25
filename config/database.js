var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'db156.pair.com',
  user     : '1024899_52',
  password : 'n5yVHaS4t9Nzwus4',
  database : 'qetailcom_mindzai'
});
connection.connect(function(err) {
if (err)
{
    console.error('Error connecting Db : ' + err.stack);
    return;
}
console.log("sucess")
});
module.exports = connection;