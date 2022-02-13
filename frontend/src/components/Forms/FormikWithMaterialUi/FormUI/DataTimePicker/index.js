import React from 'react'

import {TextField} from '@material-ui/core'
import { useField } from 'formik'

export default function DataTimePickerWrapper({name, ...otherProps}) {

    const [field, mata] = useField(name)

    const configDataTimePicker = {
        ...field,
        ...otherProps,
        type: 'date',
        variant: 'outlined',
        fullWidth: true,
        InputLabelProps: {
            shrink: true,
        }
    }

    if(mata && mata.touched && mata.error){
        configDataTimePicker.error = true;
        configDataTimePicker.helperText = mata.error;
    }
    return (
        <TextField 
            {...configDataTimePicker}
        />        
    )
}
