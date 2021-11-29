import React from 'react'
// import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020")

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter((ele) => {
        return ele.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}


