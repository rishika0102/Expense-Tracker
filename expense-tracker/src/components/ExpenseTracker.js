import React, {useState, useEffect} from 'react';
import Expense from './Expense';
import ExpenseTrackerForm from './ExpenseTrackerForm';

import 'bootstrap/dist/css/bootstrap.min.css';

import {transactionId} from '../utils';
import api from '../api/transaction';
import {useNavigate} from "react-router-dom";
import {Button} from 'reactstrap';

const transationData = [];
const balanceData = [];

function ExpenseTracker() {

  const navigate = useNavigate();
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactionDetails, setTransactionDetails] = useState([]);
  const [balanceDetails, setbalanceDetails] = useState([]);

  const goToTransactionHistory = () => {
    navigate('/transactionHistory', {state: balanceDetails});
  };

  const handleTransaction = (transaction) => {
    debugger
    let income = 0, expense = 0;
    transaction.forEach((data) => {
      if(data.type === "income") {
       income+=data.amount;
      } else {
        expense = income - data.amount;
      }
    })
    setIncome(income);
    setExpense(expense);
  }

  useEffect(() => {
    console.log("income", income);
    console.log("expense", expense);
  }, [])

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <Expense income={income} expense={expense}/>
      <ExpenseTrackerForm transactions={handleTransaction}/>
      <Button className="btn-lg" color="primary" onClick={ () => goToTransactionHistory()}>
           Transaction history
      </Button>
    </div>
  )
}

export default ExpenseTracker
