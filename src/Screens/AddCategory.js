import React, { useState } from 'react';
import axios from 'axios';
import '../css/category.css';

const AddCategory = () => {
  const [formData, setFormData] = useState({
    type: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/v1/inventory/api/categories/', formData)
      .then(response => {
        alert('Category added successfully!');
        setFormData({
          type: '',
        });
      })
      .catch(error => {
        console.log(error);
        alert('Error adding category!');
      });
  };

  return (
    <div align="center">
      <h1 className="title">Add Category</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">Type:</label>
        <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} /><br />

        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;