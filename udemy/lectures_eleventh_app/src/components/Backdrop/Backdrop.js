import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClasses = [
        'Backdrop',
        props.show ? 'Backdrop_opened' : 'Backdrop_closed',
    ];
    return <div className={cssClasses.join(' ')}></div>;
};

export default backdrop;
