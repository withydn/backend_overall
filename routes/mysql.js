// @ts-check

const express = require('express');

const db = require('../controllers/mysqlController');

const router = express.Router();

router.get('/', (req, res) => {
  db.getUser((data) => {
    res.send(data);
  });
});

module.exports = router;
