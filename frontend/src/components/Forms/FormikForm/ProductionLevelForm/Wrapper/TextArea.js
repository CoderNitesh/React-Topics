import React from 'react'
import { ErrorMessage, Field } from 'formik'

import TextError from '../../TextError'

function TextArea(props) {
    const {name, label, ...rest} = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} as='textarea' name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
export default TextArea
