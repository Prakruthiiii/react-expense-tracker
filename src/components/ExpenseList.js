import React from "react";

function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p>No expenses added yet.</p>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.title} - ₹{expense.amount}
          <button onClick={() => onDelete(expense.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
