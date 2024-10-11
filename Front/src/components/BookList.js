import React , { useState, useEffect } from 'react'
import axios from 'axios';

function BookList() {
 const [books, setBooks] = useState([]);

  useEffect(()=>{
    var getBooks=()=>{
axios
            .get(
                `http://localhost:5000/api/books`
            )
            .then((response) => {
                const bookArray = response.data;
                console.log(bookArray)
                setBooks(bookArray);
            });
    }
    getBooks();
  },[])
  return (
    <div>
      <h1>List of Books</h1>
      <ul>

      </ul>
    </div>
  )
}

export default BookList