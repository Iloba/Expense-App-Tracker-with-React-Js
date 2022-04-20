import React, { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../Ui/Card";
import "../Expenses/MainExpense.css";
import ExpensesFilter from "../Filter/ExpensesFilter";
function MainExpense(props) {
  const [SelectedData, setSelectedData] = useState("2019");

  const handleSelectData = (selectData) => {
    setSelectedData(selectData);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={SelectedData}
          onGetSelectData={handleSelectData}
        ></ExpensesFilter>


        {props.items.map((expense) => (
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date }/>
        ))}
      </Card>
    </div>
  );
}

export default MainExpense;
