import {useState} from 'react';
import ExpenseForm, {IExpenseFormData} from './ExpenseForm';

import './NewExpense.css';

type TOverrideFields = 'date' | 'amount';

export interface INewExpenseItem extends Omit<IExpenseFormData, TOverrideFields> {
    key: string;
    amount: number;
    date: Date;
}

export interface INewExpenseProps {
    onAddExpense: (data: INewExpenseItem) => void;
}

export default function NewExpense(props: INewExpenseProps) {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (formData: IExpenseFormData) => {
        props.onAddExpense({
            ...formData,
            amount: parseFloat(formData.amount),
            date: new Date(formData.date),
            key: Math.random().toString()
        });
        setIsEditing(false);
    };
    const cancelAddingDataHandler = () => {
        setIsEditing(false);
    }
    const startEditing = () => {
        setIsEditing(true);
    }
    if (!isEditing) {
        return (
            <div className="new-expense">
                <button onClick={startEditing} type="button">Add New Expense</button>
            </div>
        )
    }
    return (
        <div className="new-expense">
            <ExpenseForm
                onCancelAddingData={cancelAddingDataHandler}
                onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}
