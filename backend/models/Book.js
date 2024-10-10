const {Schema, model} = require("mongoose");

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishedYear: {
    type: Number,
    required: true
  },
});

const BookModel = model("Book", BookSchema)

module.exports = BookModel