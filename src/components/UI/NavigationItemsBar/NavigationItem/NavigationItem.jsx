import React from 'react';
import { useState } from 'react';

import style from './NavigationItem.module.css';
import ripple from '../../../../assets/css/ripple.module.css';
import { LayoutContextConsumer } from '../../../../containers/Layout/Layout';

const NavigationItem = (props) => {

    const [hover, setHover] = useState(false);

    const onHoverHandler = (isHover) => {
        setHover(isHover);
    }

    return (
        <LayoutContextConsumer>
            {
                context => {

                    let rippleClass = null;
                    if (context.width <= context.mobileDeviceSize) {
                        rippleClass = ripple.ripple;
                    }

                    return <li className={[style.NavigationItem, rippleClass].join(" ")} onMouseOver={(event) => onHoverHandler(true)} onMouseOut={(event) => onHoverHandler(false)}>
                        <div className={style.MobileOnly}>
                            {
                                hover ? props.iconFilled : props.icon
                            }
                        </div>
                        <p className={style.Label} style={{
                            color: hover ? "#ffd166" : "white"
                        }}>{props.label}</p>
                    </li>
                }
            }
        </LayoutContextConsumer>

    );
}

export default NavigationItem;
