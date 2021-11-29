import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

let INITIAL_EXPENSES = [{
  id: "e1",
  title: "Sneakers",
  amount: 20000,
  date: new Date(2021, 1, 30)
},
{
  id: "e2",
  title: "Clothes",
  amount: 12000,
  date: new Date(2020, 5, 15)
},
{
  id: "e3",
  title: "Food",
  amount: 5000,
  date: new Date(2021, 3, 13)
},
{
  id: "e4",
  title: "Bike Insurance",
  amount: 7000,
  date: new Date(2019, 11, 3)
},
];

function App(props) {
  
  function addExpenseHandler(expense) {
    console.log("In App.js")
    setExpenses( (prevExpenses) => {   // To Add new states to the previous state we use a function call to set values.
      return [expense, ...prevExpenses]  // Takes Snapshot of all previous states function has parameter of previous states.
    })
  }

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;



