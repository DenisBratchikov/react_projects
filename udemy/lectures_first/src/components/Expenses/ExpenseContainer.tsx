import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList, {IExpenseListProps} from './ExpenseList';
import ExpenseChart from './ExpenseChart';

import './ExpenseContainer.css';

export type IExpenseContainerProps = IExpenseListProps;

const ExpenseContainer: React.FunctionComponent<IExpenseContainerProps> = ({expenses}: IExpenseContainerProps) => {
    const [selectedYear, setSelectedYear] = useState('');
    const onExpenseFilterChangeHandler = (year: string) => {
        setSelectedYear(year);
    }
    const filteredExpenses = selectedYear
        ? expenses.filter(({date}) => !selectedYear || date.getFullYear().toString() === selectedYear)
        : expenses
    return (
        <div className="expenses">
            <ExpenseFilter year={selectedYear} onExpenseFilterChange={onExpenseFilterChangeHandler}/>
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseList expenses={filteredExpenses}/>
        </div>
    )
}

ExpenseContainer.defaultProps = {expenses: []};

export default ExpenseContainer;
