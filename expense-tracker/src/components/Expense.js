import React,{useState} from 'react';
import ExpenseTracker from "./ExpenseTracker";

function Expense({income, expense, balance}) {

  const [transactionDetails, setTransactionDetails] = useState([]);
  console.log("income", income);
  console.log("expense", expense);
  console.log("balance", balance);

  return (
   <div>
      <div className="expense-container">
        <div className="total-expense-heading">
        <h2>Your Balance</h2>
        <div className="balance">{balance}</div>
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
