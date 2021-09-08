import "./AddNewExpenseButton.css";
import { useState } from "react";

const AddNewExpenseButton = (props) => {
  return (
    <button onClick={props.onAddNewExpenseButtonHandler}>
      Add New Expense
    </button>
  );
};

export default AddNewExpenseButton;
