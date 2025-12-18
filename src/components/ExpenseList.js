import React from "react";

function ExpenseList({ expenses }) {
  return (
    <ul>
      {expenses.map((item) => (
        <li key={item.id}>
          {item.name} - ₹{item.amount}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
