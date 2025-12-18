import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";


function App() {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!expense || !amount) return;

    setExpenses([
      ...expenses,
      { id: Date.now(), name: expense, amount }
    ]);

    setExpense("");
    setAmount("");
  };

  return (
    <div style={{ padding: "30px", maxWidth: "400px", margin: "auto" }}>
      <h2>Smart Expense Manager</h2>

      <input
        type="text"
        placeholder="Expense name"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <button onClick={addExpense}>Add Expense</button>

      <ExpenseList expenses={expenses} />

    </div>
  );
}

export default App;
