import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useAppDispatch } from './store/hooks';
import { fetchOrders } from './store/order';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
