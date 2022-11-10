import React from 'react';

function Expense({name, amount}) {
  return (
   <div>
      <div className="expense-container">
        <div className="total-expense-heading">
        <h2>Your Balance</h2>
        <div className="balance">$8998089</div>
        </div>
        <div className="total-expense-heading">
        <h2>Amount</h2>
        <div className="amount">$7889000</div>
        </div>
        <div className="total-expense-heading">
        <h2>Expense</h2>
        <div className="expense">$2333</div>
        </div>
      </div>
    </div>
  )
}

export default Expense
