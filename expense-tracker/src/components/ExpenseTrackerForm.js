import React, {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ExpenseTrackerForm() {

  const [nameValue, setNameValue] = useState('');
  const [amountValue, setAmountValue] = useState('');

  const submitDetails = (e) => {
    console.log("submitted");
  }

  const addIncome = () => {
    toast.success("income successfully added");
  }

  const addExpense = () => {
    toast.success("expense deduct");
  }

  return (
    <div className="transaction-form-container">
        <h2>Add New Transaction</h2>
        <div>
          <form>
            <div className="transaction-field">
               <label>
                Name
                <input type="text" pattern="[a-zA-Z ]*$"/>
              </label>
             </div>
            <div className="transaction-field">
              <label>
                Amount
                <input type="number" max="9999999"/>
              </label>
             </div>
          </form>
          <button className="transaction-form-button" onClick={addIncome}>Add Income</button>
          <button className="transaction-form-button" onClick={addExpense}>Add Expense</button>
          <button className="transaction-form-button" type="submit" onSubmit={(e) => submitDetails(e)}>Submit</button>
          <ToastContainer />
         </div>
      </div>
  )
}

export default ExpenseTrackerForm
