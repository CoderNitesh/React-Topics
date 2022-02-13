import { useField,useFormikContext } from 'formik';
import React from 'react';

import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel
} from '@material-ui/core';

const CheckboxWrapper = ({
    name, 
    label,
    legend,
    ...otherProps
}) => {
    const {setFieldValue} = useFormikContext();
    const [field, meta] = useField(name)
    console.log('fieldCheckBox', field)
    console.log('metaCheckBox', meta)

    const handleChange = (e) =>{
        const {checked} = e.target;
        setFieldValue(name, checked)
    }
    const configCheckBox = {
        ...field,
        onChange: handleChange
    }

    const configFormControl ={};

    if(meta && meta.touched && meta.error){
        configFormControl.error = true;
    }

    return (
        <FormControl {...configFormControl}>
            <FormLabel component='legend'>{legend}</FormLabel>
            <FormGroup>
                <FormControlLabel 
                    control={<Checkbox {...configCheckBox}/>}
                    label={label}
                />
            </FormGroup>
        </FormControl>
    )
}

export default CheckboxWrapper;