import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, useLocation} from "react-router-dom";
import {Button} from 'reactstrap';


function TransactionHistory({balanceDetails}) {

  const navigate = useNavigate();
  const balance = useLocation();
  const [name, setName] = useState();
  const [balanceHistory, setBalanceHistory] = useState([]);
  console.log("transationDetail from history", balance.state);
  console.log("transationDetail from history", balanceHistory);

  const edit = (id) => {
    console.log("editing", id);
  }

  const deleteTransaction = () => {

    console.log("deleting");
  }

  return (
    <div className="transaction-history-container">
      <h2>Transaction History</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Your Balance</th>
            <th>Amount</th>
            <th>Expense</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {balance.state.map( (data) =>
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.balance}</td>
              <td>{data.income}</td>
              <td>{data.expense}</td>
              <td><button type="button" className="btn btn-outline-dark btn-sm" onClick={() => edit(data.id)}>Edit</button></td>
              <td><button type="button" className="btn btn-outline-dark btn-sms" onClick={deleteTransaction}>Delete</button></td>
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
