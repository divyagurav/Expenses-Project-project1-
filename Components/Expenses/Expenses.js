import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredyear, setFilteredYear] = useState(2020);
  function filterChangeHandler(seletedYear) {
    setFilteredYear(seletedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
