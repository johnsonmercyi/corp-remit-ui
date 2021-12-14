import React from 'react';

import style from './Spinner.module.css';
import { LayoutContextConsumer } from '../../containers/Layout/Layout';

const Spinner = (props) => {
    return (

        <LayoutContextConsumer >
            {
                context => {

                    console.log("Context: ", context);

                    const extraStyle = {
                        marginLeft: context.width > context.mobileDeviceSize ?
                            context.toggled ? "18rem" : "4rem" : "0"
                    };

                    return (
                        <div className={style.SpinnerWrapper} >
                            <div className={style.Spinner} style={extraStyle}>
                                <div className={"d-flex flex-column align-items-center justify-content-center"}>
                                    <div className="spinner-border" role="status" style={{ color: "#ef476f" }}></div>

                                    <span className="visually-hidden" style={{ color: "#073b4c" }}>{props.message ? props.message : "Please wait..."}</span>
                                </div>
                            </div>

                        </div >
                    );
                }
            }
        </LayoutContextConsumer>

    );
}

export const NonLacedSpinner = (props) => {
    return (
        <LayoutContextConsumer >
            {
                context => {

                    // const extraStyle = {
                    //     marginLeft: context.width > context.mobileDeviceSize ?
                    //         context.toggled ? "18rem" : "4rem" : "0"
                    // };

                    return (
                        <div className={style.Spinner} /**style={extraStyle}**/>
                            <div className={"d-flex flex-row align-items-center justify-content-center"} style={{
                                justifyContent: "space-evenly !important",
                                width: "100%"
                            }}>
                                <div className="spinner-border" role="status" style={{ color: "#ef476f", width: props.width && props.width, height: props.height && props.height, borderWidth: props.borderWidth && props.borderWidth }}></div>

                                <span className="visually-hidden" style={{ color: "#073b4c", fontSize: props.fontSize && props.fontSize }}>{props.message ? props.message : "Please wait..."}</span>
                            </div>
                        </div>
                    );
                }
            }
        </LayoutContextConsumer>

    );
}

export default Spinner;
