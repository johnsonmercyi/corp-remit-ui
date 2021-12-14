import { TextField } from "@material-ui/core";
import React from "react";
import { MuiInputStyles } from "../../../../util/MUI/styles.js";

const CustomTextField = (props) => {

    const classes = MuiInputStyles();
    return (
        <TextField
            // fullWidth
            InputProps={{
                classes: {
                    underline: classes.underline,
                },
                className: classes.input
            }}
            InputLabelProps={{
                classes: {
                    root: classes.inputLabel,
                    focused: "focused"
                }
            }}
            //NOTE! Separate Password field from text field!
            type={"text"}
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

export default React.memo(CustomTextField);