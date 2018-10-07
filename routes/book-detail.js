const express = require('express');
const { bookDetail } = require('../api/good-read');

const router = express.Router();

router.get('/:bookId', (req, res) => {
  const bookId = req.params.bookId;
  console.log(bookId);
  bookDetail(bookId).then(data => {
    let result = data;
    // if (data && data.GoodreadsResponse) {
    //   result = data.GoodreadsResponse.book;
    // }
    res.status(200).json(result);
  }, err => {
    res.status(err.status);
  })
});

module.exports = router;