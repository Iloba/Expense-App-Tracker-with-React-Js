import React, { useState } from "react";
import MainExpense from "../src/components/Expenses/MainExpense";
import NewExpense from "./components/NewExpense/NewExpense";
const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



const App = () => {

 const [expenses, setExpenses] = useState(INITIAL_EXPENSES);



  const handleGottenData = (gottenData) => {
    setExpenses((PrevExpense) => {
      return [gottenData, ...PrevExpense]
    })
  };


  return (
    <div>
      <NewExpense ongetData={handleGottenData}></NewExpense>
      <MainExpense items={expenses}></MainExpense>
    </div>
  );
};

export default App;
