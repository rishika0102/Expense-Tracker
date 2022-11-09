import React from 'react'
import transaction from '../transaction.json';

function TransactionHistory() {
  return (
    <div className="transaction-history-container">
      <h2>Transaction History</h2>
      <table>
        <tbody>
          <tr>
            <th>Your Balance</th>
            <th>Amount</th>
            <th>Expense</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td>$98988909</td>
            <td>$878879</td>
            <td>$79778</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TransactionHistory
