import Card from '../UI/Card';
import style from './List.module.css';

export interface IListItem {
    key: string;
    name: string;
    age: number
}

export interface IListProps {
    users: IListItem[];
}

export default function List(props: IListProps) {
    return (
        <Card className={style.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.key}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}
