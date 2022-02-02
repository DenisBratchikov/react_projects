import React from 'react';
import TodoModel from '../models/todo';

import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
    title: TodoModel['text'];
    onRemoveTodo: () => void;
}> = (props) => {
    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>
            {props.title}
        </li>
    );
};

export default TodoItem;
