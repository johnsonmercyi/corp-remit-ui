import React from 'react';

import style from './NavigationItems.module.css';

const NavigationItems = (props) => {
    return (
        <li className={style.NavigationItems}>
            <div className={style.MobileOnly}>
                {props.icon}
            </div>
            <p className={style.Label}>{props.label}</p>
        </li>
    );
}

export default NavigationItems;
