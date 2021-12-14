import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";


const CircularIndeterminate = ({ progressColor, textColor, text }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "& > * + *": {
                marginLeft: theme.spacing(2)
            }
        },
        progress: {
            color: progressColor ? progressColor : "inherit"
        },
        text: {
            color: textColor ? textColor : "#fff"
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress className={classes.progress} />
            <span className={classes.text}>{text ? text : "Please wait..."}</span>
        </div>
    );
}

export default CircularIndeterminate;