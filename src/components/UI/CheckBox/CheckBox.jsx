import React from 'react';

import style from './CheckBox.module.css';

const CheckBox = ({label, checked, name, id}) => {
    return (

        <label className={style.CheckBox}>
            <span className={style.Label}>{label && label}</span>
            <input type="checkbox" checked={checked} name={name && name} id={id && id}/>
            <span class={style.CheckMark}></span>
        </label>
    );
}

export default CheckBox;
