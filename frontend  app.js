import React from "react";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import BudgetForm from "./components/BudgetForm";
import Report from "./components/Report";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Budget Tracking System</h1>
      <Dashboard />
      <TransactionForm />
      <TransactionList />
      <BudgetForm />
      <Report />
    </div>
  );
}

export default App;
