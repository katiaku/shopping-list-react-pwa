import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater'

const App = (props) => {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;

  const [newItem, setNewItem] = React.useState("");
  const [items, setItems] = React.useState([]);

  const addNewItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List v8</h1>
        {newServiceWorkerDetected && <div style={{ backgroundColor: 'red', marginBottom: 20 }}>
          <h3>New Actualization Available</h3>
          <button onClick={ onLoadNewServiceWorkerAccept }>Actualize Now!</button>
        </div>}
        <input style={{ fontSize: 24 }} type='text' onKeyPress={e => e.key === 'Enter' && addNewItem()} onChange={e => setNewItem(e.target.value)} value={newItem} />
        <button style={{ fontSize: 24 }} onClick={addNewItem}>Add</button>
        <ul>
          {items.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default withServiceWorkerUpdater(App);
