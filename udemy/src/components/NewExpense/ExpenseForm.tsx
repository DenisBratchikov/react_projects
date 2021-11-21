import {ChangeEvent, FormEvent, useState} from 'react';
import './ExpenseForm.css';

const DEFAULT_STATE = {
    title: '',
    amount: '',
    date: ''
};

interface IExpenseFormProps {
    onSaveExpenseDate: Function;
}

export default function ExpenseForm(prors: IExpenseFormProps): JSX.Element {
    /**
     * Various state updates:
     * + several independant states
     * + one object state with callback to update
     */
    const [userInput, setUserInput] = useState(DEFAULT_STATE);
    const fieldChangeHandler = (field: string, event: ChangeEvent<HTMLInputElement>) => {
        setUserInput((prevState) => ({...prevState, [field]: event.target.value}))
    }
    const submitHanler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUserInput(DEFAULT_STATE);
        prors.onSaveExpenseDate(userInput)
    };
    return (
        <form action="submit" onSubmit={submitHanler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={userInput.title}
                        onChange={fieldChangeHandler.bind(null, 'title')} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={userInput.amount}
                        onChange={fieldChangeHandler.bind(null, 'amount')} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={userInput.date}
                        onChange={fieldChangeHandler.bind(null, 'date')} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
