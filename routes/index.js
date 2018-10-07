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
    let result = {};
    if (data && data.GoodreadsResponse) {
      result = data.GoodreadsResponse.search;
    }

    res.status(200).json(result);
  }, err => {
    res.status(err.status);
  })
});

module.exports = router;