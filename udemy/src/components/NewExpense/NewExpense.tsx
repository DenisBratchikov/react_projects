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
    const saveExpenseDataHandler = (formData: IExpenseFormData) => {
        props.onAddExpense({
            ...formData,
            amount: parseFloat(formData.amount),
            date: new Date(formData.date),
            key: Math.random().toString()
        });
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}/>
        </div>
    );
}
