import { useState, useEffect } from 'react'

import ItemList from './components/itemlist.jsx'; 

import AddItem from './components/additem.jsx';
import EditItem from './components/edit-item.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/api/items')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setItems(data))
      .catch(error => {
        console.error('There was an error fetching the items:', error);
      });
  }, []);
  

  return (
    <div className="App bg">
      <h1>MERN CRUD App</h1>
      <AddItem />
      <ItemList />
      <EditItem/>

    </div>

  ) 
}

export default App
