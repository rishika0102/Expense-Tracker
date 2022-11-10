import React, {useState, useEffect} from 'react';
import Expense from './Expense';
import ExpenseTrackerForm from './ExpenseTrackerForm';

import 'bootstrap/dist/css/bootstrap.min.css';

function ExpenseTracker() {

  const name = 0, amount = 0;
  const transationDetails = [];
  const [transaction, setTransaction] = useState();

  useEffect(() => {
  })

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <Expense name={name} amount={amount}/>
      <ExpenseTrackerForm/>
    </div>
  )
}

export default ExpenseTracker
