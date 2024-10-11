import React, { useState } from 'react';
import axios from 'axios';

function BookForm() {
   const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post('http://localhost:5000/api/books', {
    ...inputs
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  return (
    <div>
      <h1>Add Book</h1>
       <form onSubmit={handleSubmit}>
      <label>Enter Book title:
      <input
        type="text"
        name="title"
        value={inputs.title || ""}
        onChange={handleChange}
      />
      </label><br/>
      <label>Enter author :
      <input
        type="text"
        name="author"
        value={inputs.author || ""}
        onChange={handleChange}
      />
      </label><br/>
      <label>Enter published year:
        <input
          type="number"
          name="publishedYear"
          value={inputs.publishedYear || ""}
          onChange={handleChange}
        />
        </label><br/>
        <input type="submit" />
    </form>
    </div>
  )
}

export default BookForm