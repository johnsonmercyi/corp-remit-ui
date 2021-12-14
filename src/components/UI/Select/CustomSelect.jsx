import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import { MuiSelectStyles } from '../../../util/MUI/styles';
import style from './CustomSelect.module.css';



const CustomSelect = (props) => {

    const classes = MuiSelectStyles(props)();

    return (
        <div className={style.CustomSelect}>
            <FormControl error={props.error} variant="filled" className={classes.formControl}>
                <InputLabel
                    id="demo-simple-select-filled-label">{props.label && props.label}</InputLabel>
                <Select
                    
                    disabled={props.disabled}
                    className={[classes.select, classes.underline].join(" ")}
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={props.value && props.value}
                    onChange={props.onChange}>
                    {
                        props.menuItems.map((menuItem, index) => {
                            return <MenuItem
                                key={index}
                                value={menuItem.value && menuItem.value}>
                                {
                                    String(menuItem.label).toLowerCase() === "none" ?
                                        <em>Select {menuItem.label}</em> : menuItem.label
                                }
                            </MenuItem>
                        })
                    }
                </Select>
                <FormHelperText className={classes.gap}>{props.helperText && props.helperText}</FormHelperText>
            </FormControl>
        </div>
    );
}

const CustomMenuItem = (props) => {
    return <MenuItem value={props.value}>{props.text}</MenuItem>
}

export default CustomSelect;
export {
    CustomMenuItem
};

