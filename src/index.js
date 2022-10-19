import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Lista from './components/Lista';
import Input from './components/Input';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  // const listItems = ["A", "b"];
  const [listItems, setListItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect( () => {
    if (newItem !== ""){
      setListItems([...listItems, newItem]);
      setNewItem("");
    }
  }, [newItem, listItems]);

  return (
    <>
      <h1>Lista De Compras</h1>
      <Input setNewItem = {setNewItem}/>
      <Lista listCompra={listItems}/>
    </>
  );
}

root.render(
  <App/>
);