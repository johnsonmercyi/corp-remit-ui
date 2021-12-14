import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import React from 'react';

const UseStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    button: {
        backgroundColor: "transparent",
        '&:focus': {
            outline: "none"
        }
    }
}));

const CustomAlert = ({
    buttonText = "",
    message = "",
    alertActionHandler = () => { },
    alertCloseHandler = () => { },
    severity = "",
    open = false,
    showAction
}) => {

    const classes = UseStyles();

    console.log(open);

    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <Alert
                    severity={severity ? severity : "success"}
                    action={showAction ?
                        <Button
                            className={classes.button}
                            color="inherit"
                            size="small"
                            onClick={alertActionHandler}>
                            {buttonText}
                        </Button> :

                        <IconButton
                            className={classes.button}
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={alertCloseHandler}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }>
                    {message}
                </Alert>
            </Collapse>

        </div>
    );
}

export default React.memo(CustomAlert);

