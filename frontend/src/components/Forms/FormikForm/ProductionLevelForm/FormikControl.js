import React from 'react'

// components
import Input from './Wrapper/Input'
import TextArea from './Wrapper/TextArea'
import Select from './Wrapper/Select'
import Radio from './Wrapper/Radio'
import CheckBoxGroup from './Wrapper/CheckBoxGroup'

function FormikControl(props) {
    // console.log("FormikControl Props: ", props)
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
            return <TextArea {...rest}/>
        case 'select':
            return <Select {...rest}/>
        case 'radio':
            return <Radio {...rest} />
        case 'checkbox':
            return <CheckBoxGroup {...rest} />
        case 'date':
        default: return null
    }
}

export default FormikControl
