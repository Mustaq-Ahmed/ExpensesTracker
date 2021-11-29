import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)
    function clickHandler() {
        setTitle("Updated")
    }
    function doubleClickHandler() {
        setTitle(props.title)
    }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">{props.amount}</div>
                    <button onClick={clickHandler} onDoubleClick={doubleClickHandler}>Button</button>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;