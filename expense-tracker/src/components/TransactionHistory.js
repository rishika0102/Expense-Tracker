import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import {Button} from 'reactstrap';
import api from '../api/transaction';

function TransactionHistory() {

  const navigate = useNavigate();
  const [transactionDetails, setTransactionDetails] = useState();
  const getTransactionDetails = () => {
    debugger
    const response = api.get("/transaction");
    setTransactionDetails(response.data);
  };

  useEffect(() =>{
    getTransactionDetails();
  })

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
          {transactionDetails?.map((transaction) =>
            <tr>
              <td>{transaction.id}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.amount}</td>
              <td><button type="button" className="btn btn-outline-dark btn-sm">Edit</button></td>
              <td><button type="button" className="btn btn-outline-dark btn-sms">Delete</button></td>}
            </tr>
          )}
        </tbody>
      </table>
      <div className="my-4">
        <Button className="btn-sm" color="primary" onClick={ () => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  )
}

export default TransactionHistory
