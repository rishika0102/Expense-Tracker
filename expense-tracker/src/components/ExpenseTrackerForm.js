import React, {useState, Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validName, validAmount } from './formValidate.js';
import {uniqueId} from '../utils';
import api from '../api/transaction';

function ExpenseTrackerForm() {

  const [name, setName] = useState();
  const [type, setType] = useState();
  const [amount, setAmount] = useState();

  const addTransactionDetails = (e) => {
    if(!validName.test(name)) {
      toast.success("Income Name Successfully Added");
    } else {
      toast.error("Please Follow the Format");
    }
    const transationDetail = {
      id: uniqueId(),
      name: name,
      type: type,
      amount: parseInt(amount)
    };
    const response = api.post("/transaction", transationDetail);
    // newTransaction(transationDetail);
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
          <form onSubmit={submitDetails}>
            <div className="transaction-field">
               <label>
                Name
                <input type="text" pattern="[a-zA-Z ]*$" value={name} required onChange={(e) => setName(e.target.value)}/>
              </label>
             </div>
             <div className="transaction-field">
               <label>
                Type
                <input type="text" pattern="[a-zA-Z ]*$" required value={type} onChange={(e) => setType(e.target.value)}/>
              </label>
             </div>
            <div className="transaction-field">
              <label>
                Amount
                <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)}/>
              </label>
             </div>
          </form>
          <button className="transaction-form-button" onClick={(e) => addTransactionDetails(e)}>Add Details</button>
          <ToastContainer />
         </div>
      </div>
    </div>
  )
}

export default ExpenseTrackerForm
