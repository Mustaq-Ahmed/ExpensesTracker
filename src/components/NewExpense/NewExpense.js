import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"
import { useState } from 'react';


export default function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    function saveExpenseDataHandler(newExpenseData){
        const expenseData = {     // we can use same variables name in different components both will have different meanings.
            ...newExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }
    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditing={stopEditingHandler}/>}
        </div>
    )
}

