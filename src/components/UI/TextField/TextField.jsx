import React, { useRef, useState } from 'react';

import style from './TextField.module.css';
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityIconOff from '@material-ui/icons/VisibilityOffOutlined';


const TextField = ({ type, name, id, className, placeholder, value, onChangeHandler, isError = false, errorMessage }) => {

    const [passwordVisibilityToggled, setPasswordVisibility] = useState(false);
    const inputRef = useRef(null);

    const passwordVisibilityToggleHandler = (isVisible) => {

        if (isVisible) {
            inputRef.current.type = "text";
        } else {
            inputRef.current.type = "password";
        }

        setPasswordVisibility(isVisible);
    }

    return (
        <div className={[style.TextField, isError ? style.Error : null].join(" ")}>

            <div style={{
                width: "100%",
                height: "fit-content",
                margin: "0.25rem 0"
            }}>
                <div className={style.InputWrapper}>
                    <input
                        type={type}
                        name={name && name}
                        id={id && id}
                        className={[className && className, "Input"].join(" ")}
                        placeholder={placeholder && placeholder}
                        value={value}
                        onChange={(event) => onChangeHandler(event)}
                        ref={inputRef} />
                    <span className={style.Border}></span>
                </div>
                <span style={{
                    width: "100%",
                    height: "1rem",
                    color: "red",
                    fontSize: "0.9rem",
                    padding: "0 0.2rem",
                    // backgroundColor: "green",
                    alignItems: "flex-start",
                    transition: "all 0.5s",
                    opacity: isError ? 1 : 0

                }}>{errorMessage && errorMessage}</span>
            </div>

            {
                type === "password" ?
                    <div className={style.passwordVisibilityToggler} onClick={() => passwordVisibilityToggleHandler(!passwordVisibilityToggled)}>
                        {
                            passwordVisibilityToggled ?
                                <VisibilityIcon style={{
                                    fontSize: "22"
                                }} /> :
                                <VisibilityIconOff style={{
                                    fontSize: "22"
                                }} />
                        }
                    </div> :
                    null
            }
        </div>

    );
}

export default TextField;