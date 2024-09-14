import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(response => setItems(response.data))
      .catch(err => console.error(err));
  }, []);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:5000/api/items/${id}`)
      .then(() => setItems(items.filter(item => item._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <>
    <div className='border-2 rounded-md 	w-900'>
      <h2 className='text-3xl	font-bold my-6	'>Item List</h2>
      <ul className='m-5 p-5  '>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - {item.description}
            <button className='border-2 border-red-300 px-4 py-1 my-2 mx-9 ' onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default ItemList;
