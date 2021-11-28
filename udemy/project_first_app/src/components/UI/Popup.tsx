import React, {MouseEventHandler, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import style from './Popup.module.css';

export interface IDialogProps extends IOverlayProps {
    errorMessage: string;
}

interface IOverlayProps {
    onClose: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

interface IPopupProps extends IOverlayProps, IDialogProps {}

function Overlay(props: IOverlayProps) {
    return (<div className={style.backdrop} onClick={props.onClose}></div>);
}

function Dialog(props: IDialogProps) {
    return (
        <Card className={style.modal}>
            <header className={style.header}>
                <h2>Invalid input</h2>
            </header>
            <div className={style.content}>
                <p>{props.errorMessage}</p>
            </div>
            <footer className={style.actions}>
                <Button title="Okay" type="button" onClick={props.onClose} />
            </footer>
        </Card>
    )
}

export default function Popup({onClose, errorMessage}: IPopupProps) {
    const overlay_container = document.getElementById('root_overlay');
    const dialog_container = document.getElementById('root_dialog');
    if (overlay_container && dialog_container) {
        return (
            <Fragment>
                {ReactDOM.createPortal(<Overlay onClose={onClose} />, overlay_container)}
                {ReactDOM.createPortal(<Dialog onClose={onClose} errorMessage={errorMessage} />, dialog_container)}
            </Fragment>
        )
    }
    return (<div></div>)
}

// export class PopupDialog {
//     static show({onClose, errorMessage}: IPopupProps) {
//         const container = document.getElementById('root_modal');
//         if (container) {
//             ReactDOM.render(
//                 <Fragment>
//                     <Overlay onClose={onClose} />
//                     <Dialog onClose={onClose} errorMessage={errorMessage} />
//                 </Fragment>,
//                 container
//             )
//         }
//     }

//     static hide() {
//         const container = document.getElementById('root_modal');
//         if (container) {
//             ReactDOM.unmountComponentAtNode(container)
//         }
//     }
// }
