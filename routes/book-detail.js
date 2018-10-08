const express = require('express');
const { bookDetail } = require('../api/good-read');

const router = express.Router();

router.get('/:bookId', (req, res) => {
  const bookId = req.params.bookId;
  bookDetail(bookId).then(data => {
    res.status(200).json(data);
  }, err => {
    res.status(err.status);
  })
});

module.exports = router;