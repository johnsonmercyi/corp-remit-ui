import React from 'react';

import style from './NavigationItemsBar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';

const NavigationItemsBar = (props) => {
    const { items } = props;
    return (
        <ul className={style.NavigationItemsBar}>
            {
                Object.keys(items).map((itemKey, index) => {
                    return <NavigationItems
                        key={itemKey + "_" + index}
                        label={items[itemKey].label}
                        icon={items[itemKey].icon}
                        showIcon={items[itemKey].showIcon} />
                })
            }
        </ul>
    );
}

export default NavigationItemsBar;
