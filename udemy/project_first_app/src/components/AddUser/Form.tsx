import {ChangeEvent, FormEvent, useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import style from './Form.module.css';

interface IUserInput {
    age: string;
    name: string;
}

export interface IFormProps {
    onAddUser: (data: IUserInput) => void;
}

export default function Form(props: IFormProps) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const addUser = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onAddUser({name, age});
        setName('');
        setAge('');
    }
    const onNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setName(value);
    }
    const onAgeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setAge(value);
    }
    return (
        <Card className={style.form}>
            <form onSubmit={addUser}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" value={name} onChange={onNameChangeHandler}></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={age} onChange={onAgeChangeHandler}></input>
                <Button title="Add User" type="submit"/>
            </form>
        </Card>
    )
}
