import React, { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-context';

import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const textRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = textRef.current!.value;

        if (!enteredText.trim().length) {
            return;
        }

        todosCtx.addTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input ref={textRef} type="text" id="text" />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
