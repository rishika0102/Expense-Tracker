import React,{useState, useEffect} from 'react';
import ExpenseTracker from "./ExpenseTracker";

function Expense({transactionDetails, income, expense}) {

  console.log("transationDetail from expense", transactionDetails);
  // const [income, setIncome] = useState(0);
  // const [expense, setExpense] = useState(0);

  // const calculatedExpense = () => {
  //   let income = 0, expense = 0;
  //   transactionDetails.forEach((data) => {
  //     if(data.type !== 'expense') {
  //       debugger
  //       income = income + data.amount;
  //     } else if(data.type === 'expense') {
  //       expense = expense + data.amount;
  //       setExpense(expense)
  //     }
  //   });
  //   setIncome(income);
  //   setExpense(expense);
  // }

  // useEffect(() => {
  //   if(transactionDetails.length > 0) {
  //    calculatedExpense();
  //   }
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
