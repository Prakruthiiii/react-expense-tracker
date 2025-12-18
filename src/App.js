import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (savedExpenses) {
      setExpenses(savedExpenses);
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = () => {
    if (!expenseName || !amount) return;

    setExpenses([
      ...expenses,
      { id: Date.now(), name: expenseName, amount: Number(amount) },
    ]);

    setExpenseName("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="app-container">
      <h2>Smart Expense Manager</h2>

      <div className="expense-form">
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={addExpense}>Add Expense</button>
      </div>

      <h3>Expenses</h3>

      {expenses.length === 0 ? (
        <p>No expenses added yet</p>
      ) : (
        <ul>
          {expenses.map((e) => (
            <li key={e.id}>
              <span>{e.name}</span>
              <span>₹{e.amount}</span>
              <button onClick={() => deleteExpense(e.id)}>X</button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total Expense: ₹{total}</h3>
    </div>
  );
}

export default App;
