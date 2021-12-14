import React from 'react';

import style from './ProgressPage.module.css';

const progressPage = (props) => {
    return (
        <div 
        style={{
            backgroundColor: props.backgroundColor && props.backgroundColor
        }}
        className={[style.ProgressPage, props.load ? style.Load : null, props.action ? style.Action : null].join(" ")}>
            {props.children}
        </div>
    );
}

export default progressPage;