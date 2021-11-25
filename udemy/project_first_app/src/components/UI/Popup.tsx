import {MouseEventHandler} from 'react';
import Button from './Button';
import Card from './Card';
import style from './Popup.module.css';

export interface IPopupProps {
    errorMessage: string;
    onClose: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

export default function Popup(props: IPopupProps) {
    return (
        <div>
            <div className={style.backdrop} onClick={props.onClose}></div>
            <Card className={style.modal}>
                <header className={style.header}>
                    <h2>Invalid input</h2>
                </header>
                <div className={style.content}>
                    <p>{props.errorMessage}</p>
                </div>
                <footer className={style.actions}>
                    <Button title="Okay" type="button" onClick={props.onClose}/>
                </footer>
            </Card>
        </div>
    )
}
