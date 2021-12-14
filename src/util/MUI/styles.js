import { makeStyles } from "@material-ui/core";

const MuiInputStyles = makeStyles((theme) => ({
    input: {
        backgroundColor: "none",
        borderRadius: "0.25rem",
        width: "100%"
    },
    inputLabel: {
        color: "",
        "&.focused": {
            color: "#532e15"
        }
    },
    underline: {
        color: "",
        '&::after': {
            borderBottom: `2px solid #532e15`,
        },
        '&::before': {
            borderBottom: `0.5px solid rgba(0,0,0,0.009)`,
        },
    },
}));

const MuiButtonStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing[1],
        borderRadius: "0.2rem",
        height: "2.5rem"
    }, 
    
    typography: {
        color: "#ffd166",
        fontSize: "0.8rem",
        fontWeight: 400
    },

    others: {
        width: "100%",
        height: "3rem"
        // [theme.breakpoints.up('576')] : {
        //     width: "10rem"
        // },
    }
}));

const MuiSelectStyles = (props) => makeStyles(theme => ({
    formControl: {
        minWidth: 120,
        width: props.width,
    },
    select: {
        backgroundColor: "none",
        borderRadius: "0.25rem",
        textAlign: "left",
        '&::after': {
            borderBottom: "0.13rem solid #532e15"
        },
        '&::before': {
            borderBottom: "0.5px solid rgba(0,0,0,0.009)"
        },
    },
    gap: {
        marginTop: "0"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export {
    MuiInputStyles,
    MuiButtonStyles,
    MuiSelectStyles
};