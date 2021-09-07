import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const addFilterExpensesHandler = (selectedYear) => {
    console.log("filtered from Expenses");
    setFilterYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={addFilterExpensesHandler}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
