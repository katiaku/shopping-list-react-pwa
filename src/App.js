import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [newItem, setNewItem] = React.useState("");
  const [items, setItems] = React.useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List</h1>
        <input style={{ fontSize: 24 }} type='text' onChange={e => setNewItem(e.target.value)} value={newItem} />
        <button style={{ fontSize: 24 }} onClick={() => setItems([...items, newItem])}>Add</button>
        <ul>
          {items.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
