import React from "react";

function Dashboard() {
  const totalIncome = 5000; // Example data
  const totalExpenses = 3200;
  const remainingBudget = totalIncome - totalExpenses;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Remaining Budget: ${remainingBudget}</p>
    </div>
  );
}

export default Dashboard;
