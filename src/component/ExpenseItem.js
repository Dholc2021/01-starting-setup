import React from "react";
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const expenseDate = new Date(2022, 10, 21);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 180.0;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
