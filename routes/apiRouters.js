const express = require('express');
const mysql = require('mysql2');
const dbconfig = require('../config/database');
const connection = mysql.createConnection(dbconfig);

const router = express.Router();

router.get('/shop', (req, res, next) => {
  connection.query('SELECT * from products', (error, rows) => {
    if (error) throw error;

    res.send(rows);
  });
});

module.exports = router;
