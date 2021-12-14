import { Button, withStyles } from "@material-ui/core";
import { blueGrey, teal,  } from "@material-ui/core/colors";
import { MuiButtonStyles } from "../../../../util/MUI/styles.js";

const CustomButton = withStyles((theme) => ({
    root: {
        backgroundColor: "#532e15",
        '&:hover': {
            backgroundColor: "#381f0e",
        },
        '&:focus': {
            outline: "none"
        }
    },
}))(Button);

const MUIButton = (props) => {
    const classes = MuiButtonStyles();
    return <CustomButton
        onClick={props.onClick}
        variant="contained"
        color="primary"
        disabled={props.disabled}
        className={[classes.margin, classes.typography, classes.others, {...props.style}].join(" ")}>
        {props.buttonText}
    </CustomButton>
}

export default MUIButton;