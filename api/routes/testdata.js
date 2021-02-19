var express = require('express');
var router = express.Router();
let mysql = require('mysql2');
let creds = require('../../../dbCreds.json');
let pool = mysql.createPool(creds)
//let dbAdapter = require('../../db/dbAdapter');

/* GET all records */
router.get('/', function(req, res, next) {
  let query = `SELECT * FROM fs_data`;
  pool.getConnection((err, conn) => {
    conn.query(query, (err, results) => {
      if (err) {
        console.log(err);
        pool.end();
        throw err;
      }
      res.json(results);
    });
  });
});

/* GET record by id listing. */
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let query = `SELECT * FROM fs_data WHERE id = '${id}';`;
  pool.getConnection((err, conn) => {
    conn.query(query, (err, results) => {
      if (err) {
        console.log(err);
        pool.end();
        throw err;
      }
      res.sendStatus(200).json(results[0]);
    });
  });
});

/* Create new record in table
  - Expects name, phone, and email in request body. 
  - Name is required
  - Phone and email are optional. 
*/
router.post('/', (req, res, next) => {
  let name = req.body.name;
  if (!name){
    res.sendStatus(400);
  } else {
    let phone = req.body.phone ? req.body.phone : null;
    let email = req.body.email ? req.body.email : null;
    let query = `INSERT INTO fs_data (contact_name, phone, email) VALUES ('${name}', '${phone}', '${email}')`;
    pool.getConnection((err, conn) => {
      conn.query(query, (err, results) => {
        if (err) {
          console.log(err);
          pool.end();
          throw err;
        }
        res.sendStatus(201);
      });
    });
  }
});

router.put('/:id', (req, res, next) => {
  let name = req.body.name;
  if (!name){
    res.sendStatus(400);
  } else {
    let phone = req.body.phone ? req.body.phone : null;
    let email = req.body.email ? req.body.email : null;
    let id = req.params.id;
    let query = `UPDATE fs_data SET contact_name = '${name}', phone = '${phone}', email = '${email}' WHERE id=${id};`;
    pool.getConnection((err, conn) => {
      conn.query(query, (err, results) => {
        if (err) {
          console.log(err);
          pool.end();
          throw err;
        }
        res.sendStatus(204);
      });
    });
  }
});

module.exports = router;
