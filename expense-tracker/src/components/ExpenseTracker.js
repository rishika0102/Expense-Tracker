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
  const [amount, setAmount] = useState(0);

  const goToTransactionHistory = () => {
    debugger
    navigate('/transactionHistory');
  };

  const handleTransaction = (transaction, amount) => {
    debugger
    let income = 0, expense = 0, newAmount=0, newName=0;
    transaction.forEach((data) => {
      if(data.type === "income") {
       income+=data.amount;
       newAmount = data.amount;
       newName = data.name;
      } else {
        expense = income - data.amount;
      }
    })
    setIncome(income);
    setExpense(expense);
    const transationDetail = {
      income: income,
      expense: expense
    }
    setTransactionDetails(transationDetail);
    const balanceDetail = {
      id: transactionId(),
      name: newName,
      balance: income - expense,
      Amount: newAmount,
      expense: expense
   }
    debugger
    setbalanceDetails(balanceDetail);
    const response = api.post("/details", balanceDetail);
    // setbalanceDetails(response.data);
    console.log("baalcne details",balanceDetails);
  }

  useEffect(()=> {
    debugger
    const saveIncomeValue = window.localStorage.getItem('saveIncomeStates');
    const saveExpenseValue = window.localStorage.getItem('saveExpenseStates');
    setIncome(JSON.parse(saveIncomeValue));
    setExpense(JSON.parse(saveExpenseValue));
  }, [])

  useEffect(() => {
    window.localStorage.setItem('saveIncomeStates',JSON.stringify(income));
    window.localStorage.setItem('saveExpenseStates',JSON.stringify(expense));
  });

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
