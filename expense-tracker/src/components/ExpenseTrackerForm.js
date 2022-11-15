import React, {useState, useEffect} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validName, validAmount } from './formValidate.js';
import {transactionId} from '../utils';
import api from '../api/transaction';

function ExpenseTrackerForm({transactions}) {

  const [name, setName] = useState();
  const [type, setType] = useState();
  const [amount, setAmount] = useState();
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balances , setBalances] = useState(0);
  const [prevIncome, setPrevIncome] = useState(0);
  const [transactionDetails, setTransactionDetails] = useState([]);

  const addTransactionDetails = (e) => {
    debugger
    console.log("type", type);
    if(!validName.test(name)) {
      toast.success("Income Name Successfully Added");
    } else {
      toast.error("Please Follow the Format");
    }
    const transationDetail = {
      id: transactionId(),
      name: name,
      type: type,
      amount: parseInt(amount)
    };
    const response = api.post("/transaction", transationDetail);
    getTransactionDetails();
    setName("");
    setType("choose from drop-down")
    setAmount("");
  }

  const getType = (e) => {
    setType(e.target.value);
  }

  const getTransactionDetails = () => {
     return api.get("/transaction").then((response) =>
      transactions(response.data)
    );
  }

  return (
    <div>
      <div className="transaction-form-container">
        <h2>Add New Transaction</h2>
        <div className="my-4">
          <form>
            <div className="transaction-field">
               <label>
                Name
                <input type="text" pattern="[a-zA-Z ]*$" value={name} required onChange={(e) => setName(e.target.value)}/>
              </label>
             </div>
             <div className="transaction-field">
               <label>
                Type
                <select className="drop-down" value={type} onChange={getType}>
                  <option value="choose from drop-down">Choose from dropdown</option>
                  <option value="income">income</option>
                  <option value="expense">expense</option>
                </select>
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
