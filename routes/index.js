// @ts-check
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { name: 'lily' });
});

router.get('/fetch', (req, res) => {
  res.send(JSON.stringify('프론트로부터의 요청이다!'));
});

module.exports = router;
