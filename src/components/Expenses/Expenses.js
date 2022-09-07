import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

/**
 * Passes prop data to render in ExpenseItem component
 * for the title, amount and date. It returns the expenses to 
 * render.
 */
const Expenses = (props) =>{
  const expenses = props.data

  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
}

export default Expenses;
