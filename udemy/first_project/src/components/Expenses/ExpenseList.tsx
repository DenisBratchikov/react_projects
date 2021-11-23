import ExpenseItem, {IExpenseItemProps} from './ExpenseItem';
import './ExpenseList.css';

export interface IExpenseListProps {
    expenses: IExpenseItemProps[];
};

export default function ExpenseList({expenses}: IExpenseListProps) {
    if (!expenses.length) {
        return (<h2 className="expenses-list__fallback">No expenses found.</h2>);
    }

    return (
        <ul className="expenses-list">
            {expenses.map(
                ({title, amount, date, key}) => (
                    <ExpenseItem
                        key={key}
                        title={title}
                        amount={amount}
                        date={date} />
                )
            )}
        </ul>
    )
}
