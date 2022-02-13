import React from 'react'

import {Formik, Form} from 'formik'
import * as Yup from 'yup'

import './productionLevelForm.css'
import FormikControl from './FormikControl'

function ProductionLevelForm() {

    const dropdownOptions = [
        {key: 'Select an Option', value: ''},
        {key: 'Adit', value: 'adit shirodkar'},
        {key: 'Sumedh', value: 'sumedh tandel'},
        {key: 'Shlock', value: 'shlock raut'},
        {key: 'Manish', value: 'manish patil'},
        {key: 'Nitesh', value: 'nitesh shetye'}
    ]
    const radioOptions = [
        {key: 'Adit', value: 'adit shirodkar'},
        {key: 'Sumedh', value: 'sumedh tandel'},
        {key: 'Shlock', value: 'shlock raut'},
        {key: 'Manish', value: 'manish patil'},
        {key: 'Nitesh', value: 'nitesh shetye'}
    ]
    const checkboxOptions = [
        {key: 'Adit', value: 'adit shirodkar'},
        {key: 'Sumedh', value: 'sumedh tandel'},
        {key: 'Shlock', value: 'shlock raut'},
        {key: 'Manish', value: 'manish patil'},
        {key: 'Nitesh', value: 'nitesh shetye'}
    ]


    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOptions: '',
        checkboxOption: [],
    }
    
    const validationSchema = Yup.object({
        email: Yup.string()
            .required('Email is Required!')
            .email('Enter Valid Email id!'),
        description: Yup.string()
            .required("Description is Required!")
            .max(50, 'Maximum 50 Words can enter'),
        selectOption: Yup.string()
            .required('Please Select Option'),
        radioOptions: Yup.string()
            .required('Please Select Radio Option'),
        checkboxOption: Yup.array()
            .required('Please Check one of the Option'),
    })
    const onSubmit = values => console.log('form values: ', values) 

    return (
        <div className='App'>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => {
                        return (
                            <Form>
                                <FormikControl control='input' type='email' label='Email' name='email'  />
                                <FormikControl control='textarea' type='input' label='Description' name='description'  />
                                <FormikControl control='select' type='select' options={dropdownOptions} label='Select an Option' name='selectOption'  />
                                <FormikControl control='radio' options={radioOptions} label='Radio Topic' name='radioOptions'  />
                                <FormikControl control='checkbox' options={checkboxOptions} label='Check Topic' name='checkboxOption' />
                                <button type='submit'>Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default ProductionLevelForm

