import React, {ReactNode} from 'react';
import './ExpenseDate.css';

export interface IExpenseDateProps {
    date: Date;
}

export default class ExpenseDate extends React.Component<IExpenseDateProps> {
    protected _month: string;
    protected _day: string;
    protected _year: string;

    constructor(props: IExpenseDateProps) {
        super(props);
        this.state = ({date: props.date});
        const date = props.date;
        this._month = date.toLocaleDateString("en-US", {month: "long"});
        this._day = date.toLocaleDateString("en-US", {day: "2-digit"});
        this._year = date.getFullYear().toString();
    }

    render(): ReactNode {
        return (
            <div className="expense-date">
                <div className="expense-date__month">{this.props.date.toLocaleDateString("en-US", {month: "long"})}</div>
                <div className="expense-date__year">{this._year}</div>
                <div className="expense-date__days">{this._day}</div>
            </div>
        )
    }

    static defaultProps: IExpenseDateProps = {date: new Date()};
}
