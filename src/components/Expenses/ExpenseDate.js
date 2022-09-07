import "./ExpenseDate.css";

/**
 * Creates the date format and returns the component needed to represent
 *  the expense item's date. To render the date, it pulls the information
 *  from the parent element "ExpenseItem".
 */
const ExpenseDate = (props) =>{
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
