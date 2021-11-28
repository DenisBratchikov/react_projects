import {ChangeEvent, FormEvent, useRef, useState} from 'react';
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
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);

    const addUser = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onAddUser({
            name: nameRef.current?.value || '',
            age: ageRef.current?.value || ''
        });
    }
    return (
        <Card className={style.form}>
            <form onSubmit={addUser}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" ref={nameRef}></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" ref={ageRef}></input>
                <Button title="Add User" type="submit" />
            </form>
        </Card>
    )
}
