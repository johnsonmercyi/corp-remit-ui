import React from 'react';
import style from './Grid.module.css';


const Row = (props) => {
    return (
        <div className={["row", style.Row, props.extraClasses ? props.extraClasses.join(" ") : null].join(" ")}>
            {props.children}
        </div>
    );
}

const Column = (props) => {
    return (
        <div className={["col", style.Column, props.extraClasses ? props.extraClasses.join(" ") : null].join(" ")}>
            {props.children}
        </div>
    );
}

export {
    Row,
    Column
};
