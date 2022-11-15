import React,{useState} from 'react';
import ExpenseTracker from "./ExpenseTracker";

function Expense({income, expense}) {

  const [transactionDetails, setTransactionDetails] = useState([]);
  console.log("income", income);
  console.log("expense", expense);

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
