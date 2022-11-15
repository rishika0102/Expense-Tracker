import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate, useLocation} from "react-router-dom";
import {Button} from 'reactstrap';
import api from '../api/transaction';

const item = [{id: null , editing: false}];

function TransactionHistory() {
  const navigate = useNavigate();
  const balance = useLocation();
  const [name, setName] = useState();
  const [calculatedbalance, setCalculatedBalance] = useState();
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [editing, setEditing] = useState(false);
  const [editElement, setEditElement] = useState(0);
  const [balanceHistory, setBalanceHistory] = useState([]);
  console.log("transationDetail from history", balance.state);
  // console.log("transationDetail from history", balanceHistory);

   const getBalanceDetails = () => {
    debugger
    return api.get("/details").then((response) =>
      setBalanceHistory(response.data)
    );
    console.log("details");
  };

  const edit = (id, data) => {
    debugger
    setEditElement(id);
  }

  const editField = (e, id, data)  => {
    debugger
    console.log("data", data);
    setIncome(data.income);
    setExpense(data.expense);
    setCalculatedBalance(data.calculatedbalance);
    const editDetails = {
      id: id,
      name: e,
      calculatedbalance: calculatedbalance,
      income: income,
      expense: expense
    }
    console.log("editDetails", editDetails);
    const response = api.put(`/details/${id}`, editDetails);
    getBalanceDetails();
  }

  const deleteTransaction = (id) => {
    debugger
    const response = api.delete(`/details/${id}`);
    const updatedDetails = balanceHistory.filter((balanceHistory)=>{
      return balanceHistory.id != id;
    })
    getBalanceDetails();
  }

  useEffect(()=> {
    getBalanceDetails();
  }, [])

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
          {balanceHistory.map( (data) =>
            <tr key={data.id}>
              <td>{ editElement===data.id ? <input value={name} onChange={ (e) => editField(e.target.value, data.id, data) }/> : <span>{data.name}</span>}</td>
              <td>{data.balance}</td>
              <td>{data.Amount}</td>
              <td>{data.expense}</td>
              <td><button type="button" className="btn btn-outline-dark btn-sm" onClick={() => edit(data.id)}>Edit</button></td>
              <td><button type="button" className="btn btn-outline-dark btn-sms" onClick={() => deleteTransaction(data.id)}>Delete</button></td>
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
