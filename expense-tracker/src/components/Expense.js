import React,{useState, useEffect} from 'react';
import ExpenseTracker from "./ExpenseTracker";
import api from '../api/transaction';

function Expense({income, expense}) {

  const [transactionDetails, setTransactionDetails] = useState([]);
  console.log("income", income);
  console.log("expense", expense);
  // const [income, setIncome] = useState(0);
  // const [expense, setExpense] = useState(0);

  // const getTransactionDetails = async () => {
  //   debugger
  //   return api.get("/transaction").then((response) =>
  //     setTransactionDetails(response.data)
  //   );
  //   console.log("transationDetail", transactionDetails);
  // };

  // const calculatedExpense = () => {
  //   debugger
  //   console.log("transationDetail", transactionDetails);
  //   let income = 0, expense = 0, name="";
  //   transactionDetails.forEach((data) => {
  //     console.log("data..", data);
  //     if(data.type == 'income') {
  //       income = income + data.amount;
  //     } else if(data.type === 'expense') {
  //       expense = expense + data.amount;
  //     }
  //   });
  //   setIncome(income);
  //   setExpense(expense);
  // }
  // useEffect(() => {
  //   getTransactionDetails();
  //   calculatedExpense();
  // }, [])

  return (
   <div>
      <div className="expense-container">
        <div className="total-expense-heading">
        <h2>Your Balance</h2>
        <div className="balance">{income - expense}</div>
        </div>
        <div className="total-expense-heading">
        <h2>Amount</h2>
        <div className="amount">{income}</div>
        </div>
        <div className="total-expense-heading">
        <h2>Expense</h2>
        <div className="expense">{expense}</div>
        </div>
      </div>
    </div>
  )
}

export default Expense
