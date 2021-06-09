import React, { useRef, useState } from 'react';

import style from './TextField.module.css';
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityIconOff from '@material-ui/icons/VisibilityOffOutlined';


const TextField = ({ type, name, id, className, placeholder, value, onChangeHandler }) => {

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
        <div className={style.TextField}>
            <input
                type={type}
                name={name && name}
                id={id && id}
                className={className && className}
                placeholder={placeholder && placeholder}
                value={value}
                onChange={(event)=> onChangeHandler(event)}
                ref={inputRef} />
            {
                type === "password" ?
                    <div className={style.passwordVisibilityToggler} onClick={() => passwordVisibilityToggleHandler(!passwordVisibilityToggled)}>
                        {
                            passwordVisibilityToggled ?
                                <VisibilityIcon fontSize="small" /> :
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