import {useState} from 'react';
import ExpenseDate, {IExpenseDateProps} from './ExpenseDate';

import './ExpenseItem.css';

export interface IExpenseItemProps extends IExpenseDateProps {
    title: string;
    amount: number;
    key: string;
}

export default function ExpenseItem({title, date, amount}: IExpenseItemProps) {
    const [titleValue, setTitle] = useState(title);
    function clickHandler() {
        setTitle("sdfsdf");
    }

    return (
        <div className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{titleValue}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}></button>
        </div>
    )
}
