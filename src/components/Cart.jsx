import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './Cart.css';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.amount * item.count, 0);
  };

  const handleGenerateBill = async () => {
    for (const cartItem of cartItems) {
      try {
        await axios.put(`https://billing-system-6.onrender.com/items/${cartItem._id}`, {
          quantity: cartItem.quantity - cartItem.count,
        });
      } catch (err) {
        console.error('Error updating item quantity:', err);
      }
    }

    generatePDF();
    navigate('/');
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Get current date and time
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();

    // Add date and time to the PDF
    doc.setFontSize(10);
    doc.text(`Date: ${date}`, 10, 10);
    doc.text(`Time: ${time}`, 180, 10);

    doc.setFontSize(18);
    doc.text('Bill', 14, 20);

    const tableColumn = ['Item Name', 'Amount', 'Quantity', 'Total'];
    const tableRows = [];

    cartItems.forEach((item) => {
      const itemData = [
        item.itemName,
        `₹${item.amount}`,
        item.count,
        `₹${item.amount * item.count}`,
      ];
      tableRows.push(itemData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.setFontSize(12);
    doc.text(`Total Amount: ₹${calculateTotal()}`, 14, doc.lastAutoTable.finalY + 10);

    doc.save('bill.pdf');
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Item Name</th>
                <th>Amount</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => (
                <tr key={cartItem._id} className="cart-item">
                  <td><img src={cartItem.itemImage} alt={cartItem.itemName} className="cart-item-image" /></td>
                  <td>{cartItem.itemName}</td>
                  <td>₹{cartItem.amount}</td>
                  <td>{cartItem.count}</td>
                  <td>₹{cartItem.amount * cartItem.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Amount: ₹{calculateTotal()}</h3>
          <button className="generate-bill-button" onClick={handleGenerateBill}>
            Generate Bill
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
