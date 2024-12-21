import React from "react";

function Report() {
  const data = [
    { category: "Food", amount: 200 },
    { category: "Transport", amount: 500 },
    { category: "Rent", amount: 1000 },
  ];

  return (
    <div className="report">
      <h2>Spending Report</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.category}: ${item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Report;
