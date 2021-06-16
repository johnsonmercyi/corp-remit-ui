import React from 'react';

import style from './MenuIcon.module.css';

const MenuIcon = (props) => {
    return (
        <div className={style.MenuIcon} style={props.style ? {...props.style} : null}>
            <div></div>
            <div id={style.Middle}></div>
            <div></div>
        </div>
    );
}

export default MenuIcon;
