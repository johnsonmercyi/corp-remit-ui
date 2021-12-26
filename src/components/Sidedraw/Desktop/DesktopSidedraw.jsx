import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import style from './DesktopSidedraw.module.css';

const DesktopSidedraw = ({open}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(open);
    }, [open])

    return (
        <div className={style.Sidedraw}>
            Sidedraw            
        </div>
    );
}

export default DesktopSidedraw;
