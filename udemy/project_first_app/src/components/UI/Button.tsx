import {MouseEventHandler} from 'react';
import style from './Button.module.css';

export interface IButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    title: string;
    type: 'button' | 'submit';
}

export default function Button(props: IButtonProps) {
    return (
        <button
            type={props.type}
            className={style.button}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}
