const mysql = require('mysql2');
const {exit}=require('process');
const dbCredentials = require('../../dbCreds.json');

function dbAdapter(){
    this.dbName = 'full_stack_db';
    dbCredentials.database = this.dbName;
    this.connection = mysql.createConnection(dbCredentials);
    
    this.table = 'fs_data';
    this.sendQuery = (queryText) => connection.promise().query(queryText);
    
    this.getSelectQueryString = `SELECT * FROM ${this.table}`;
    
    this.getInsertQueryString = (name, phone, email) => {
        return `INSERT INTO ${this.table} (contact_name, phone, email) VALUES ('${name}', '${phone}', '${email}')`;
    };
    
    this.getUpdateQueryString = (name, phone, email, id) => {
        return `UPDATE ${this.table} SET contact_name = '${name}', phone = '${phone}', email = '${email}' WHERE id=${id};`
    };

    this.getAllRecords = () => {
        this.connection.connect();
        let queryResults =  this.connection.query(this.getSelectQueryString, (err, results) => {
            return results;
        });
        this.connection.end();
        return queryResults;
    }
}
console.log("DB Adapter Tests:");
let myDbAdapter = new dbAdapter();
console.log(myDbAdapter.getAllRecords());
// console.log(myDbAdapter.getInsertQueryString("Bob", "1-206-666-5555", "bob@bob.com"));
// console.log(myDbAdapter.getUpdateQueryString("Bob", "1-206-666-6666", "bob@bob.com", 6));

module.exports = dbAdapter;