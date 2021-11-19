import ExpenseItem, {IExpenseItemProps} from './ExpenseItem';

import './ExpenseContainer.css';

export interface IExpenseContainerProps {
    expenses: IExpenseItemProps[];
};

export default function ExpenseContainer(props: IExpenseContainerProps) {
    return (
        <div className='expenses'>
            {props.expenses.map(({title, amount, date}) => <ExpenseItem title={title} amount={amount} date={date} />)}
        </div>
    )
}
