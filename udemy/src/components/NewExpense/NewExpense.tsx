import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

export default function NewExpense() {
    const saveExpenseDataHandler = (data: any) => {
        return {
            ...data,
            date: new Date(data.date),
            key: Math.random().toString()
        };
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}/>
        </div>
    );
}
