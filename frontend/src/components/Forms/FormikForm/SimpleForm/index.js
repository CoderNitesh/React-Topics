import React from 'react';

import { useFormik } from 'formik'; // state management

import * as Yup from 'yup';


const initialValues = {
    fullname: '',
    email: '',
    channel: ''
}

// onSubmit function automatically get the current values of form 
const onSubmit = values => {
    console.log('Values: ', values)
}

// **************************************************** Without Yup Validation Start ****************************************************
// Validate function automatically get the values of form 
// Validate function should always return the object
// the keys of the returning object should be equal to keys of values object

// const validate = values => {
//     // values.fullname values.email values.channel
//     // errors.fullname errors.email errors.channel
//     // errors.fullname = 'Full name is required'. // disired output 
//     const errors = {};
    
//     if(!values.fullname){
//         errors.fullname = 'Required'
//     }

//     if(!values.email){
//         errors.email = 'Required'
//     } else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(values.email)){
//         errors.email = 'Enter Valid Email ID'
//     }

//     if(!values.channel){
//         errors.channel = 'Required'
//     }

//     return errors;
// }

// **************************************************** Without Yup Validation Ends ****************************************************


// **************************************************** With Yup Validation Start ****************************************************
const validationSchema = Yup.object({
    fullname: Yup.string()
                .required('Full Name is Required'),
    email: Yup.string()
            .email('Enter Valide Email ID')
            .required('Email is Required'),
    channel: Yup.string()
                .required('Channel Name is Required')
})

// **************************************************** With Yup Validation Ends ****************************************************


export default function SimpleForm() {
    
    // useFormik **takes an object** and **return an object** which containe methods and property
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema, 
    })

    // console.log('formik: ', formik)
    // console.log('formik Values: ', formik.values)
    // console.log('formik Errors: ', formik.errors)
    console.log('formik Visited: ', formik.touched)
    

    return (
        <React.Fragment>
            <h1 style={{'textAlign': 'center'}}>Simple Form | Html Form and Formik for Validation</h1>
            <form  onSubmit={formik.handleSubmit} className='form-container'>
                <div className='field-div'>
                    <label htmlFor='fullname'>Full Name</label>
                    <input type='text' id='fullname' name='fullname' placeholder='Enter your Name'  onChange={formik.handleChange} value={formik.values.fullname} onBlur={formik.handleBlur} />
                    { formik.touched.fullname && formik.errors.fullname? <div className='error'> {formik.errors.fullname} </div>: null}
                </div>

                <div className='field-div'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' placeholder='Enter your Email'  onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                    { formik.touched.email &&formik.errors.email? <div className='error'> {formik.errors.email} </div>: null}
                </div>

                <div className='field-div'> 
                    <label htmlFor='channel'>Channel</label>
                    <input type='text' id='channel' name='channel' placeholder='Enter your Channel'  onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur}/>
                    { formik.touched.channel &&formik.errors.channel? <div className='error'> {formik.errors.channel} </div>: null}
                </div>

                <div>  
                    <button type='submit' className='btn-submit' >Submit</button>
                </div>
            </form>
        </React.Fragment>
    )
}
