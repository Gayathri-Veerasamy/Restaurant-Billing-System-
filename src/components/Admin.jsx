import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [itemName, setItemName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newItem = {
        itemName,
        startTime,
        endTime,
        amount,
        quantity,
        category,
        itemImage: imageURL // Use the URL directly
      };

      await axios.post('https://billing-system-6.onrender.com/items', newItem, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setItemName('');
      setStartTime('');
      setEndTime('');
      setAmount(0);
      setQuantity(0);
      setCategory('');
      setImageURL('');
      alert('Item added successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to add item. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
        </div>
        <div>
          <label>Availability Start Time:</label>
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
        </div>
        <div>
          <label>Availability End Time:</label>
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div>
          <label>Available Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="drinks">Drinks</option>
            <option value="sides">Sides</option>
            <option value="main_course">Main Course</option>
            <option value="chats">Chats</option>
          </select>
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} required />
        </div>
        <button type="submit">Add Item</button>
      </form><span>
      <div className='link'>
      <Link to="/Admin_to_show"><button id="start_btn">Get Started</button></Link>
    </div>
    </span></div>
  );
};

export default Admin;
