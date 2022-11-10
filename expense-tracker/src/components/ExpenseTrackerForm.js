import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validName, validAmount } from './formValidate.js';
import {uniqueId} from '../utils';
import api from '../api/transaction';
import {Button} from 'reactstrap';

import {useNavigate} from "react-router-dom";

function ExpenseTrackerForm() {

  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const navigate = useNavigate();
  const submitDetails = (e) => {
    e.preventDefault();
    console.log("submitted");
  }

  const goToTransactionHistory = () => {
    navigate('/TransactionHistory');
  };

  const addIncome = (e) => {
    if(!validName.test(name)) {
      toast.success("income name successfully added");
    } else {
      toast.error("Please Follow the Format");
    }
    const transationDetail = {
      id: uniqueId(),
      type: name,
      amount: parseInt(amount)
    };
    const response = api.post("/transaction", transationDetail);
    console.log("transationDetail...", transationDetail);
  }

  const addExpense = (type, e) => {
    debugger
    console.log("type, e", type, e);
    toast.success("expense deduct");
  }

  return (
    <div>
      <div className="transaction-form-container">
        <h2>Add New Transaction</h2>
        <div className="my-4">
          <form onSubmit={(e) => submitDetails(e)}>
            <div className="transaction-field">
               <label>
                Name
                <input type="text" pattern="[a-zA-Z ]*$" value={name} onChange={(e) => setName(e.target.value)}/>
              </label>
             </div>
            <div className="transaction-field">
              <label>
                Amount
                <input type="number" max="9999999" value={amount} onChange={(e) => setAmount(e.target.value)}/>
              </label>
             </div>
          </form>
          <button className="transaction-form-button" onClick={(e) => addIncome(e)}>Add Income</button>
          <button className="transaction-form-button" onClick={(e) => addExpense(e)}>Add Expense</button>
          <button className="transaction-form-button" type="submit">Submit</button>
          <ToastContainer />
         </div>
      </div>
      <Button className="btn-lg" color="primary" onClick={ () => goToTransactionHistory()}>
          Click here for transaction history
      </Button>
    </div>
  )
}

export default ExpenseTrackerForm
