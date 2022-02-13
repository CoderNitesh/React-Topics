import React from 'react'

import { TextField, MenuItem } from '@material-ui/core'

import { useField, useFormikContext } from 'formik'

export default function SelectfieldWrapper({name, options,...otherProps}) {
    const {setFieldValue} = useFormikContext();
    
    // console.log(" useField(name) ", useField(name))
    const [field, mata] = useField(name)

    const handleChange = (e) => {
        const {value} = e.target;
        setFieldValue(name, value)
    }


    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        variant: 'outlined',
        fullWidth: true,
        onChange: handleChange,
    }

    if(mata && mata.touched && mata.error){
        configSelect.error = true;
        configSelect.helperText = mata.error;
    }

    return (
        <TextField {...configSelect}>
            {
                Object.keys(options).map((option, index) => {
                    return (
                        <MenuItem key={index} value={option}>
                            {options[option]}
                        </MenuItem>
                    )
                })
            }
        </TextField>
    )
}

