import React from 'react'
import "./ExpensesList.css"
import ExpenseItem from './ExpenseItem'
export default function ExpensesList(props) {

    if (props.items.length === 0) {      
        return <h2 className="expenses-list__fallback">Found No Expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((ele) => {
                return <ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date} />
            })}
        </ul>
    )
}
