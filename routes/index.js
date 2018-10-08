const express = require('express');
const { searchBook } = require('../api/good-read');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Good reads' });
});

router.post('/', (req, res) => {
  const text = req.body.data.text;
  searchBook(text).then(data => {
    res.status(200).json(data);
  }, err => {
    res.status(err.status);
  })
});


module.exports = router;