import React,{useState} from 'react';

import { Formik,Form,Field, ErrorMessage, FieldArray, FastField } from 'formik'; 

import * as Yup from 'yup';

import TextError from '../TextError';



const initialValues = {
    fullname: '',
    email: '',
    channel: '',
    comment: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    // phoneNumber: ['', ''],
    phNumbers: ['']
}

const savedData = {
    fullname: 'nitesh shetye',
    email: 'niteshshetye204@gmail.com',
    channel: 'CodeWithNitesh',
    comment: 'This is nice channel as well knowledge heavy, attend the session with very attentive minde set.',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phNumbers: ['']
}

const onSubmit = (values, onSubmitProps) => {
    console.log('Values: ', values)
    console.log('onSubmitProps: ', onSubmitProps)
    onSubmitProps.resetForm()

}

const validationSchema = Yup.object({
    fullname: Yup.string()
                .required('Full Name is Required'),
    email: Yup.string()
            .email('Enter Valide Email ID')
            .required('Email is Required'),
    channel: Yup.string()
                .required('Channel Name is Required'),
    address: Yup.string()
                .required('Address is Required'),
})

export default function AdvancedForm() {
    const [formValue, setFormValue] = useState(null)

    const validateComments = value => {
        let error
        if(!value){
            error = 'Required man'
        }
        return error
    }

    return (
        <Formik
            initialValues={initialValues}
            // initialValues={formValue || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            // validateOnMount
            // enableReinitialize
        >
            {
                formik => {
                    console.log('formik props: ', formik)
                    return (
                        <Form className='form-container'style={{background: 'rgb(222, 251, 255)'}}>
                            <div className='field-div'>
                                <label htmlFor='fullname'>Full Name</label>
                                <Field id='fullname' name='fullname' placeholder='Enter your Name' />
                                <ErrorMessage name='fullname' component='div' className='error' />
                            </div>
                            <div className='field-div'>
                                <label htmlFor='email'>Email</label>
                                <Field id='email' name='email' placeholder='Enter your Email' />
                                <ErrorMessage name='email' component={TextError}/>
                            </div>
                            <div className='field-div'>
                                <label htmlFor='channel'>Channel</label>
                                <Field id='channel' name='channel' placeholder='Enter your Channel' />
                                <ErrorMessage name='channel'> 
                                    {
                                        errorMsg => <div className='error'>{errorMsg}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className='field-div'>
                                <label htmlFor='comment'>Comments</label>
                                <Field as='textarea' id='comment' name='comment' validate={validateComments}  placeholder='Comment here...!' />
                                <ErrorMessage name='comment' component={TextError}/>
                            </div>
                            <div className='field-div'>
                                <label htmlFor='address'>Address</label>
                                <FastField name='address'>
                                    {
                                        (props)=>{
                                            // console.log('Fast Field')
                                            const {field,meta}= props
                                            return (
                                                <div>
                                                    <input id='address' {...field} />   
                                                    {meta.touched && meta.error ? <div className='error'>{meta.error}</div>: null}
                                                </div>
                                            )
                                        }
                                    }
                                </FastField>
                            </div>
                            <h3>Social presence Nested Object</h3>
                            <div className='field-div'>
                                <label htmlFor='facebook'>FaceBook ID</label>
                                <Field name='social.facebook' id='facebook'/>
                            </div>
                            <div className='field-div'>
                                <label htmlFor='twitter'>Twitter ID</label>
                                <Field name='social.twitter' id='twitter'/>
                            </div>
                            <h3>Field Arrays</h3>
                            <div className='field-div'>
                                <label htmlFor='phNumbers'>Phone Number</label>
                                <FieldArray name='phNumbers' id='phNumbers'>
                                    {
                                        (fieldArrayProps) => {
                                            const {push, remove, form} = fieldArrayProps
                                            const {values} = form 
                                            const {phNumbers} = values
                                            // console.log('form errors: ', form.errors)
                                            return <div>
                                                {
                                                    phNumbers.map((phNumber, index)=>{
                                                        return (
                                                            <div key={index}>
                                                                <Field name={`phNumbers[${index}]`} />
                                                                {
                                                                    index > 0 &&
                                                                    <button type='button' onClick={() => remove(index) }>-</button>
                                                                }
                                                                <button type='button' onClick={() => push('') }>+</button>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                    }
                                </FieldArray>
                            </div>
                            <div>
                                <button type='submit' disabled={!(formik.isValid)}>Submit</button>
                                <button type='button' onClick={() => setFormValue(savedData) }>Load Saved Data</button>
                                <button type='reset'>Reset</button>
                                {
                                    // <button type='button' onClick={() => formik.validateField('comment') }>Validate Comments</button>
                                    // <button type='button' onClick={() => formik.validateForm() }>Validate All</button>
                                    // <button type='button' onClick={() => formik.setFieldTouched('comment') }>Visited Comments</button>
                                    // <button 
                                    //     type='button' 
                                    //     onClick={() => formik.setTouched({
                                    //             fullname: true,
                                    //             email: true,
                                    //             channel: true
                                    //         }) 
                                    //     }
                                    // >Visited All</button>
                                }

                            </div>
                        </Form>
                    )
                }
            }
            
        </Formik>
    )
}
