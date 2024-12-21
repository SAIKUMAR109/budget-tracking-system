import React, { useState } from "react";

function BudgetForm() {
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ category, budget });
    alert("Budget set!");
  };

  return (
    <div className="budget-form">
      <h2>Set Budget</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Budget Amount"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <button type="submit">Set Budget</button>
      </form>
    </div>
  );
}

export default BudgetForm;
