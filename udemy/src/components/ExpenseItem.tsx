import ExpenseDate, {IExpenseDateProps} from './ExpenseDate';

import './ExpenseItem.css';

export interface IExpenseItemProps extends IExpenseDateProps {
    title: string;
    amount: number;
}

export default function ExpenseItem({title, date, amount}: IExpenseItemProps) {


    return (
        <div className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </div>
    )
}
