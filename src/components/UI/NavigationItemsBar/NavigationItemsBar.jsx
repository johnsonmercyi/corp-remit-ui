import React from 'react';

import style from './NavigationItemsBar.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItemsBar = (props) => {
    const { items } = props;
    return (
        <ul className={style.NavigationItemsBar}>
            {
                Object.keys(items).map((itemKey, index) => {
                    return <NavigationItem
                        key={itemKey + "_" + index}
                        active={items[itemKey].active ? true : false}
                        label={items[itemKey].label}
                        icon={items[itemKey].icon}
                        iconFilled={items[itemKey].iconFilled}
                        showIcon={items[itemKey].showIcon} />
                })
            }
        </ul>
    );
}

export default NavigationItemsBar;
