import React from 'react'

import { TextField } from '@material-ui/core'

import { useField } from 'formik'

const TextfieldWrapper = ({name, ...otherProps}) => {
    // console.log('useField: ', useField(name))
    const [field, meta] = useField(name);

    // console.log("field: ", field)
    // console.log("mata: ", mata)
    
    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined'
    };

    if(meta && meta.touched && meta.error){
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }
    
    // console.log('field', field)
    // console.log('mata', mata)

    return (
        <TextField {...configTextfield} />            
    );
}

export default TextfieldWrapper;

