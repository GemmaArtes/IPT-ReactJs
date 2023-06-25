import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/category.css';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/inventory/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

const handleDelete = (categoryId) => {
    axios.delete(`http://localhost:8000/api/v1/inventory/api/categories/${categoryId}/`)
      .then(response => {
        // Filter out the deleted category from the state
        setCategories(categories.filter(category => category.id !== categoryId));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div align="center">
      <h1 class="title">Category List</h1>
      <table class="table">
        <thead class="table-head">
          <tr>
            <th>Category #</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="table-body">
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.type}</td>
              <td>
                <button onClick={() => handleDelete(category.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;