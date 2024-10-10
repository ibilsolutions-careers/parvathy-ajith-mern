var express = require('express');
var router = express.Router();
var Book = require('../models/Book')

/* GET /api/books: Retrieve a list of all books.  */
router.get('/books',async function(req, res, next) {
  try{
  var books= await Book.find();
  res.status(200).send({'book':books});
  }
   catch(e){
     res.status(400).send({'text':e});
  }
});

/* POST /api/books: Create a new book.  */
router.post('/books', async (req, res, next)=>{

  try{
 var {title, author, publishedYear} = req.body;
  console.log(title);
  const newBook= new Book({title, author, publishedYear});
  const insertedBook = await newBook.save();
  return res.status(201).json(insertedBook);
  }
  catch(e){
     res.status(400).send({'text':e});
  }

});

/* PUT /api/books/:id: Update an existing book  */
router.put('/books/:id', function(req, res, next) {
  //test
  res.status(200).send({'text':'api call'});
});

/* DELETE  /api/books/:id: Delete a book by its ID. */
router.delete('/books/:id', function(req, res, next) {
  //test
  res.status(200).send({'text':'api call'});
});

module.exports = router;