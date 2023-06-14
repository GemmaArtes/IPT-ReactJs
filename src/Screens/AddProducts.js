import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/product.css';

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    quantity: '',
    price: '',
    category: '',
  });

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/inventory/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/v1/inventory/api/products/', formData)
      .then(response => {
        alert('Product added successfully!');
        setFormData({
          code: '',
          name: '',
          quantity: '',
          price: '',
          category: '',
        });
      })
      .catch(error => {
        alert('Ensure that the Code value is less than or equal to 1000!');
      });
  };

  return (
    <div align="center">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="code">Code:</label>
        <input type="text" id="code" name="code" value={formData.code} onChange={handleChange} /><br />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br />

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} /><br />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} /><br />

        <label htmlFor="category">Category:</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange}>
          <option value="">Select a Category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.type}</option>
          ))}
        </select><br />

         <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;