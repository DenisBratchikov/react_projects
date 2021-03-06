import React, {ChangeEvent} from 'react';
import './ExpenseFilter.css';

export interface IExpenseFilterProps {
    year: string;
    onExpenseFilterChange: (value: string) => void;
}

const ExpenseFilter: React.FunctionComponent<IExpenseFilterProps> = (props: IExpenseFilterProps) => {
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        props.onExpenseFilterChange(event.target.value);
    }
    return (
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label>Filter by year</label>
                <select value={props.year} onChange={onChangeHandler}>
                    <option value=''>Not selected</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;
