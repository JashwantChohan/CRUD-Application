import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/items', { name, description })
      .then(response => {
        setName('');
        setDescription('');
        alert('Item added!');
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <div className=''>
        <h2 className='text-3xl	font-bold m-6	'>Add Item</h2>
        <form onSubmit={handleSubmit}>
          <input className='p-1 rounded border-2 '
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input  className='p-1 rounded border-2 m-3'
            type="text"
            placeholder="Age"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className='border-2 border-green-300 px-4 py-1	' type="submit">Add Item</button>
        </form>
      </div>
    </>
  );
};

export default AddItem;
