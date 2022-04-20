import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const handleSavedExpenseData = (savedData) => {
    const ExpenseData = {
      ...savedData,
      id: Math.random().toString(),
    };

    props.ongetData(ExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleSavedExpenseData}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
