import React, {useState, useEffect} from 'react';
import usePrevious from '../Hooks/usePrevious';
import Expense from './Expense';
import ExpenseTrackerForm from './ExpenseTrackerForm';
// import axios from "axios";
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
  const [balance , setBalance] = useState(0);

  const prevIncome = usePrevious(income);
  console.log("previous", prevIncome);

  const goToTransactionHistory = () => {
    navigate('/transactionHistory');
  };

  const handleTransaction = (transaction) => {
    let income = 0, expense = 0, newAmount=0, newName=0;

    transaction.forEach((data, key) => {
      debugger
      if(key == transaction.length - 1) {
        if(data.type=="income") {
          income = data.amount;
          newName = data.name
        } else {
          income = prevIncome;
          expense = data.amount;
          newName = data.name;
        }
      }
    })

    const isIncome = transaction.filter(data => data.type ==
      "income");

    const isExpense = transaction.filter(data => data.type == "expense");

    const incomeBalance = isIncome.map((data) => {return data.amount});

    const totalIncomeBalance = incomeBalance.reduce((incomeBalance, item)=> (incomeBalance += item), 0).toFixed(2);

    const expenseBalance = isExpense.map((data) => {return data.amount});

    const totalExpenseBalance = expenseBalance.reduce((expenseBalance, item)=> (expenseBalance += item), 0).toFixed(2);

    setIncome(income);
    setExpense(expense);
    debugger
    const balanceDetail = {
      id: transactionId(),
      name: newName,
      balance: totalIncomeBalance - totalExpenseBalance,
      Amount: income,
      expense: expense
    }
    setBalance(totalIncomeBalance - totalExpenseBalance);
    setbalanceDetails(balanceDetail);
    const response = api.post("/details", balanceDetail);
  }

  useEffect(()=> {
    const saveIncomeValue = window.localStorage.getItem('saveIncomeStates');
    const saveExpenseValue = window.localStorage.getItem('saveExpenseStates');
    const saveBalanceValue = window.localStorage.getItem('saveBalanceStates');
    setIncome(JSON.parse(saveIncomeValue));
    setExpense(JSON.parse(saveExpenseValue));
    setBalance(JSON.parse(saveBalanceValue))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('saveIncomeStates',JSON.stringify(income));
    window.localStorage.setItem('saveExpenseStates',JSON.stringify(expense));
    window.localStorage.setItem('saveBalanceStates',JSON.stringify(balance));
  });

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <Expense income={income} expense={expense} balance={balance}/>
      <ExpenseTrackerForm transactions={handleTransaction} />
      <Button className="btn-lg" color="primary" onClick={ () => goToTransactionHistory()}>
           Transaction history
      </Button>
    </div>
  )
}

export default ExpenseTracker
