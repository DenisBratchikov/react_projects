import { useState } from 'react';
import NewExpense, {INewExpenseItem} from './components/NewExpense/NewExpense';
import ExpenseContainer from './components/Expenses/ExpenseContainer';

const INITIAL_EXPENSES = [
    {
        key: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        key: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        key: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        key: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
    const addExpenseHandler = (expense: INewExpenseItem) => {
        setExpenses((prevExpenses => [expense, ...prevExpenses]));
    }
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <ExpenseContainer expenses={expenses}/>
        </div>
    );
}

export default App;
