import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/product.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/inventory/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    axios.get('http://localhost:8000/api/v1/inventory/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
     <div align="center">
      <h1 class="title">Product List</h1>
      <table class="table">
        <thead class="table-head">
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
            {products.map(product => {
                const category = categories.find(category => category.id === product.category);
                 return (
                    <tr key={product.id}>
                        <td>{product.code}</td>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td>{category ? category.type : ''}</td>
                    </tr>
                    );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;