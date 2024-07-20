// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '/src/components/Admin_to_show.css';

// const Admin_to_show = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get('https://billing-system-6.onrender.com/items');
//         setItems(response.data.items);
//       } catch (err) {
//         console.error('Error fetching items:', err);
//       }
//     };

//     fetchItems();
//   }, []);

//   return (
//     <div>
//       <h2>Items List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Item Name</th>
//             <th>Start Time</th>
//             <th>End Time</th>
//             <th>Amount</th>
//             <th>Quantity</th>
//             <th>Category</th>
//             <th>Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item._id}>
//               <td>{item.itemName}</td>
//               <td>{item.startTime}</td>
//               <td>{item.endTime}</td>
//               <td>{item.amount}</td>
//               <td>{item.quantity}</td>
//               <td>{item.category}</td>
//               <td>
//                 <img src={`https://billing-system-6.onrender.com/${item.itemImage}`} alt={item.itemName} width="100" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Admin_to_show;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Admin_to_show.css';



// const Admin_to_show = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get('https://billing-system-6.onrender.com/items');
//         setItems(response.data.items);
//       } catch (err) {
//         console.error('Error fetching items:', err);
//       }
//     };

//     fetchItems();
//   }, []);

//   const handleEdit = (itemId) => {
//     // Implement edit functionality here
//   };

//   const handleDelete = async (itemId) => {
//     try {
//       await axios.delete(`https://billing-system-6.onrender.com/items/${itemId}`);
//       setItems(items.filter(item => item._id !== itemId));
//       alert('Item deleted successfully!');
//     } catch (err) {
//       console.error('Error deleting item:', err);
//       alert('Failed to delete item. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Items List</h2>
//       <div className="card-container">
//         {items.map((item) => (
//           <div className="card" key={item._id}>
//             <img src={`https://billing-system-6.onrender.com/${item.itemImage}`} alt={item.itemName} className="card-image" onError={(e) => console.error('Error loading image:', e)} />
//             <div className="card-details">
//               <p><strong>Item Name:</strong> {item.itemName}</p>
//               <p><strong>Start Time:</strong> {item.startTime}</p>
//               <p><strong>End Time:</strong> {item.endTime}</p>
//               <p><strong>Amount:</strong> {item.amount}</p>
//               <p><strong>Quantity:</strong> {item.quantity}</p>
//               <p><strong>Category:</strong> {item.category}</p>
//             </div>
//             <div className="card-buttons">
//               <button onClick={() => handleEdit(item._id)}>Edit</button>
//               <button onClick={() => handleDelete(item._id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Admin_to_show;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Admin_to_show.css';

// const Admin_to_show = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get('https://billing-system-6.onrender.com/items');
//         setItems(response.data.items);
//       } catch (err) {
//         console.error('Error fetching items:', err);
//       }
//     };

//     fetchItems();
//   }, []);

//   return (
//     <div>
//       <h2>Items List</h2>
//       <div className="item-list">
//         {items.map((item) => (
//           <div key={item._id} className="item-card">
//             <h3>{item.itemName}</h3>
//             <p>Start Time: {item.startTime}</p>
//             <p>End Time: {item.endTime}</p>
//             <p>Amount: {item.amount}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Category: {item.category}</p>
//             {/* Displaying image */}
//             <img src={`https://billing-system-6.onrender.com/${item.itemImage}`} alt={item.itemName} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Admin_to_show;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Admin_to_show.css'; // Ensure this CSS file exists and is styled as needed

// const Admin_to_show = () => {
//     const [items, setItems] = useState([]);

//     function getCookieValue(name) {
//         const cookies = document.cookie.split(';');
//         for (let cookie of cookies) {
//             cookie = cookie.trim();
//             if (cookie.startsWith(name + '=')) {
//                 return cookie.substring(name.length + 1);
//             }
//         }
//         return null;
//     }

//     const token = getCookieValue('token');

//     const fetchItems = async () => {
//         try {
//             const res = await axios.get('https://billing-system-6.onrender.com/items', {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             setItems(res.data.items);
//         } catch (error) {
//             console.error('Error fetching items:', error);
//         }
//     };

//     useEffect(() => {
//         fetchItems();
//     }, []);

//     return (
//         <div className="item-grid">
//             {items.map((item) => (
//                 <div key={item._id} className="item-card">
//                     <img src={`https://billing-system-6.onrender.com/${item.itemImage}`} alt={item.itemName} className="item-image" />
//                     <h3>{item.itemName}</h3>
//                     <p>Category: {item.category}</p>
//                     <p>Start Time: {item.startTime}</p>
//                     <p>End Time: {item.endTime}</p>
//                     <p>Amount: {item.amount}</p>
//                     <p>Quantity: {item.quantity}</p>
//                     <div className="buttons">
//                         <button>Edit</button>
//                         <button>Delete</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Admin_to_show;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin_to_show.css'; // Ensure this CSS file exists and is styled as needed
import { Link } from 'react-router-dom'; // Import Link for navigation

const Admin_to_show = () => {
    const [items, setItems] = useState([]);

    function getCookieValue(name) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

    const token = getCookieValue('token');

    const fetchItems = async () => {
        try {
            const res = await axios.get('https://billing-system-6.onrender.com/items', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setItems(res.data.items);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);
    

    return (
        <div className="item-grid">
            {items.map((item) => (
                <div key={item._id} className="item-card">
                    

                    <img src={item.itemImage} alt={item.itemName} className="item-image" />
                    <h3>{item.itemName}</h3>
                    <p>Category: {item.category}</p>
                    <p>Start Time: {item.startTime}</p>
                    <p>End Time: {item.endTime}</p>
                    <p>Amount: {item.amount}</p>
                    <p>Quantity: {item.quantity}</p>
                    <div className="buttons">
                        <Link to={`/edit/${item._id}`}><button>Edit</button></Link>
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );

    async function handleDelete(id) {
        try {
            await axios.delete(`https://billing-system-6.onrender.com/items/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setItems(items.filter(item => item._id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }
};

export default Admin_to_show;
