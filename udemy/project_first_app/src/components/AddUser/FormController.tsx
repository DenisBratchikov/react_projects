import React, {useState} from 'react';
import Popup from '../UI/Popup';

import Form, {IFormProps} from './Form';

export type IFormControllerProps = IFormProps;

const enum ERROR_MESSAGES {
    empty = 'Please enter a valid name and age (non-empty values).',
    age = 'Please enter a valid age (>0).'
}

export default function FormController(props: IFormControllerProps) {
    const [errorMessage, setErrorMessage] = useState('');
    const onAddUserHandler: IFormProps['onAddUser'] = (data) => {
        if (!data.age.trim() || !data.name.trim()) {
            return setErrorMessage(ERROR_MESSAGES.empty);
        }
        if (parseInt(data.age) <= 0) {
            return setErrorMessage(ERROR_MESSAGES.age);
        }
        // PopupDialog.show({errorMessage: ERROR_MESSAGES.empty, onClose: onCloseHandler})
        props.onAddUser(data);
    }
    const onCloseHandler = () => {
        // PopupDialog.hide();
        setErrorMessage('');
    }
    if (!errorMessage) {
        return <Form onAddUser={onAddUserHandler} />
    }
    return (
        <div>
            <Popup errorMessage={errorMessage} onClose={onCloseHandler}/>
            <Form onAddUser={onAddUserHandler}/>
        </div>
    )
}
