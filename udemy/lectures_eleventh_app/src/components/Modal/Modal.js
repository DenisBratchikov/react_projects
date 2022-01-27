import React from 'react';
// import Transition from 'react-transition-group/Transition';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 400
};

const modal = (props) => {
    return (
        // <Transition
        //     in={props.show}
        //     timeout={animationTiming}
        //     mountOnEnter
        //     unmountOnExit>
        //     {(state) => (
        //         <div
        //             className={`Modal ${
        //                 state === 'entering'
        //                     ? 'Modal_opened'
        //                     : state === 'exiting'
        //                     ? 'Modal_closed'
        //                     : null
        //             }`}>
        //             <h1>A Modal</h1>
        //             <button className="Button" onClick={props.closed}>
        //                 Dismiss
        //             </button>
        //         </div>
        //     )}
        // </Transition>
        <CSSTransition
            in={props.show}
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            classNames={{
                enter: '',
                enterActive: 'Modal_opened',
                exit: '',
                exitActive: 'Modal_closed'
            }}>
            <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>
                    Dismiss
                </button>
            </div>
        </CSSTransition>
    );
};

export default modal;
