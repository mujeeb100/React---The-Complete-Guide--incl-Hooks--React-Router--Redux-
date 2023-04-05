import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NexExpense = (props) => {
  /* child to parent data transfer */

  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* child to parent data transfer newExpense to ExpenseForm*/}
      <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} />
    </div>
  );
};

export default NexExpense;
