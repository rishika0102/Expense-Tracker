import React, {useState, useEffect} from 'react';
import Expense from './Expense';
import ExpenseTrackerForm from './ExpenseTrackerForm';

import 'bootstrap/dist/css/bootstrap.min.css';

import {uniqueId} from '../utils';
import api from '../api/transaction';
import {useNavigate} from "react-router-dom";
import {Button} from 'reactstrap';

const transationData = [];
const balanceData = [];

function ExpenseTracker() {

  const navigate = useNavigate();
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [name, setName] = useState(0);
  const [transactionDetails, setTransactionDetails] = useState([]);
  const [balanceDetails, setbalanceDetails] = useState([]);

  const getTransactionDetails = async () => {
    return api.get("/transaction").then((response) =>
      setTransactionDetails(response.data)
    );
  };

  const getBalanceDetails = () => {
    return api.get("/details").then((response) =>
      setbalanceDetails(response.data)
    );
  };

  const goToTransactionHistory = () => {
    calculatedExpense();
    navigate('/transactionHistory', {state: balanceDetails});
  };

  const calculatedExpense = () => {
    console.log("transationDetail", transactionDetails);
    let income = 0, expense = 0, name="CurrentAccount";
    transactionDetails.forEach((data) => {
      // console.log("data..", data);
      if(data.type == 'income') {
        income = income + data.amount;
      } else if(data.type === 'expense') {
        expense = expense + data.amount;
      }
    });
    setIncome(income);
    setExpense(expense);
    setName(name);
    const balances = income - expense;
    const balanceDetail = {
      id: uniqueId(),
      name: name,
      balance: (balances),
      income: parseInt(income),
      expense: parseInt(expense)
    };
    const response = api.post("/details",balanceDetail);
    console.log("balanceDetail...", balanceDetail);
  }

  useEffect(() => {
    getTransactionDetails();
    if(transactionDetails) {
     calculatedExpense();
    }
    getBalanceDetails();
    console.log("income", income);
    console.log("expense", expense);
  }, [])

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <Expense income={income} expense={expense} />
      <ExpenseTrackerForm/>
      <Button className="btn-lg" color="primary" onClick={ () => goToTransactionHistory()}>
           Transaction history
      </Button>
    </div>
  )
}

export default ExpenseTracker
