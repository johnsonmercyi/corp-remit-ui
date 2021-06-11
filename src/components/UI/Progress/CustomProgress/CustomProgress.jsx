import React from 'react';

import style from './CustomProgress.module.css';
import { CoopRemitLogo } from '../../../../util/icons/Icon';

const CustomProgress = ({width, height, strokeColor}) => {
    return (
        <div className={[style.CustomProgress, style.Rotate,  style.Infinite].join(" ")}>
            <CoopRemitLogo
                width={width}
                height={height}
                strokeColor={strokeColor} />
        </div>
    );
}

export default CustomProgress;
