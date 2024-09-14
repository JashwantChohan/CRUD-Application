import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(response => setItems(response.data))
      .catch(err => console.error(err));
  }, []);

  const updateItem = (id, updatedItem) => {
    axios.put(`http://localhost:5000/api/items/${id}`, updatedItem)
      .then(() => {
        setItems(items.map(item => item._id === id ? { ...item, ...updatedItem } : item));
      })
      .catch(err => console.error(err));
  };


  return (
    <>
    <div className='border-2 rounded-md	 p-3'>
      <h2 className='text-3xl	font-bold my-6	'>Update List</h2>
      <ul className='m-5 p-5'>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - {item.description}
            <button className='border-2 border-blue-300 px-4 py-1 my-2 mx-9 ' onClick={() => {
              const updatedName = prompt("Enter new name", item.name);
              const updatedDescription = prompt("Enter new Age", item.description);
              const updatedItem = { name: updatedName, description: updatedDescription };
              updateItem(item._id, updatedItem); // Call updateItem with the new values
            }}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  </>
  
  );
};

export default ItemList;
