import React, { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../Ui/Card";
import "../Expenses/ExpenseItem.css";
function ExpenseItem(props) {
  // const [count, setCount] = useState(0);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <h1>You Clicked this button {count} times</h1>
      <button onClick={() => setCount(count + 2)}> Click Me</button> */}
    </Card>
  );
}

export default ExpenseItem;
