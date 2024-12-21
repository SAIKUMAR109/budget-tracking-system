import React from "react";

function TransactionList() {
  const transactions = [
    { id: 1, type: "income", amount: 3000, category: "Salary" },
    { id: 2, type: "expense", amount: 200, category: "Food" },
    { id: 3, type: "expense", amount: 500, category: "Transport" },
  ];

  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.type}: ${transaction.amount} - {transaction.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
