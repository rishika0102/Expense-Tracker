import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ExpenseTracker from './components/ExpenseTracker';
import TransactionHistory from './components/TransactionHistory';

import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ExpenseTracker/>} />
        <Route path='transactionHistory' element={<TransactionHistory/>}/>
      </Routes>
    </>
  );
}

export default App;
