import './App.css';
import ExpenseTracker from './components/ExpenseTracker';
import ExpenseTrackerForm from './components/ExpenseTrackerForm';
import TransactionHistory from './components/TransactionHistory';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router';

function App() {
  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseTracker/>
      <ExpenseTrackerForm />
    </div>
  );
}

export default App;
