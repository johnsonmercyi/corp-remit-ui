import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import React from "react";
import { MuiInputStyles } from "../../../../util/MUI/styles.js";

const mouseDownHandler = event => event.preventDefault();

const PasswordField = (props) => {

    const classes = MuiInputStyles();
    return (
        <TextField
            // fullWidth
            InputProps={{
                classes: {
                    underline: classes.underline,
                },
                className: classes.input,
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={props.showPasswordHandler}
                            onMouseDown={mouseDownHandler}
                            edge="end"
                        >
                            {props.showPassword ? <VisibilityOff style={{color: "#532e15"}}/> : <Visibility style={{color: "#532e15"}}/>}
                        </IconButton>
                    </InputAdornment>
                )

            }}
            InputLabelProps={{
                classes: {
                    root: classes.inputLabel,
                    focused: "focused"
                }
            }}

            type={props.showPassword ? "text" : "password"}
            error={props.error}
            disabled={props.disabled}
            className={[classes.input].join(" ")}
            id={props.id && props.id}
            multiline={props.multiline && props.multiline}
            rows={props.multiline ? 4 : 1}
            label={props.label && props.label}
            value={props.value && props.value}
            helperText={props.error ? props.helperText && props.helperText : null}
            variant="filled"
            onChange={props.onChange}
        />
    );
}

export default React.memo(PasswordField);