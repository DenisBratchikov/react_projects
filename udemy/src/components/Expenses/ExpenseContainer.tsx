import ExpenseItem, {IExpenseItemProps} from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

import './ExpenseContainer.css';
import React, {useState} from 'react';

export interface IExpenseContainerProps {
    expenses: IExpenseItemProps[];
};

const ExpenseContainer: React.FunctionComponent<IExpenseContainerProps> = (props: IExpenseContainerProps) => {
    const [selectedYear, setSelectedYear] = useState('');
    const onExpenseFilterChangeHandler = (year: string) => {
        setSelectedYear(year);
    }
    return (
        <div className="expenses">
            <ExpenseFilter year={selectedYear} onExpenseFilterChange={onExpenseFilterChangeHandler}/>
            {props.expenses.map(({title, amount, date, key}) => <ExpenseItem key={key} title={title} amount={amount} date={date} />)}
        </div>
    )
}

ExpenseContainer.defaultProps = {expenses: []};

export default ExpenseContainer;
