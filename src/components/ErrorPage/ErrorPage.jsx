import React from 'react';

import style from './ErrorPage.module.css';
import * as iconBank from '../../util/icons/Icon';
import { LayoutContextConsumer } from '../../containers/Layout/Layout';

const ErrorPage = (props) => {
    return (
        <LayoutContextConsumer>
            {
                context => {

                    // console.log("[ERROR PAGE: ]" + props.header);

                    const extraStyle = {
                        width: context.width > context.mobileDeviceSize ? context.toggled ?
                            context.clientWidth - 288 : context.clientWidth - 64 : "100%",

                        marginLeft: context.width > context.mobileDeviceSize ?
                            context.toggled ? "18rem" : "4rem" : "0"
                    };

                    return (
                        <div className={style.ErrorPage} style={extraStyle}>

                            <div className={style.Content}>
                                <div className={style.ErrorImage}>
                                    <iconBank.robot
                                        width="5rem"
                                        height="5rem" />
                                </div>
                                <div className={style.ErrorText}>
                                    <h5 className={style.Header}>{props.header ? props.header.toUpperCase() : null}</h5>
                                    <p className={style.Desc}>{props.description ? props.description : null}</p>

                                    <div className={style.ErrorCause}>
                                        <span>POSSIBLE CAUSE:</span>
                                        <div>{props.possibleCause ? props.possibleCause : "Not resolved!"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
        </LayoutContextConsumer>

    );
}

export default ErrorPage;
