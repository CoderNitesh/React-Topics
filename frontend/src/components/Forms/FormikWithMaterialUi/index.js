import React from 'react'

// material ui
import { Container, Grid, Typography } from '@material-ui/core'

// custom hooks
import useStyles from './useStyles'

// Formik
import { Formik, Form } from 'formik'

// Yup (Validation Library)
import * as Yup from 'yup';

// components
import TextfieldWrapper from './FormUI/TextfieldWrapper';
import SelectfieldWrapper from './FormUI/SelectfieldWrapper'
import DataTimePickerWrapper from './FormUI/DataTimePicker'
import CheckboxWrapper from './FormUI/CheckboxWrapper';
import ButtonWrapper from './FormUI/Button'

// data
import countries from '../../../data/countries.json'

const INITIAL_FORM_STATE ={
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    city: '',
    country: '',
    arrivealDate: '', 
    departureDate: '',
    message: '',
    termsOfService: false,
}

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Enter Valide Email ID')
        .required('Required'),
    phone: Yup.number()
        .integer()
        .typeError('Please Enter Valid Phone Number')
        .required('Required'),
    addressLine1: Yup.string()
        .required('Required'),
    addressLine2: Yup.string()
        .required('Required'),
    city: Yup.string()
        .required('Required'),
    state: Yup.string()
        .required('Required'),
    country: Yup.string()
        .required('Required'),
    arrivealDate: Yup.date()
        .required('Required'),
    departureDate: Yup.date()
        .required('Required'),
    message: Yup.string(),
    termsOfService: Yup.boolean()
        .oneOf([true], 'The terms and conditions must be accepted.')
        .required('The terms and conditions must be accepted.')
});


export default function FormikWithMaterialUi(props) {
    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} >
                <Container maxWidth='md'>
                    <div className={classes.formWrapper}>
                        <Formik 
                            initialValues={{...INITIAL_FORM_STATE}} 
                            validationSchema={FORM_VALIDATION} 
                            onSubmit={(values) => console.log(values)}
                        >

                            <Form>

                                <Grid container spacing={2}>

                                    <Grid item xs={12}>
                                        <Typography>
                                            Your Details
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={6} >
                                        <TextfieldWrapper name='firstName' label='First Name'/>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <TextfieldWrapper name='lastName' label='Last Name'/>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextfieldWrapper name='email' label='Email'/>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextfieldWrapper name='phone' label='Phone'/>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>
                                            Address
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} >
                                        <TextfieldWrapper name='addressLine1' label='Address Line 1'/>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextfieldWrapper name='addressLine2' label='Address Line 2'/>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <TextfieldWrapper name='state' label='State'/>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <TextfieldWrapper name='city' label='City'/>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <SelectfieldWrapper name='country' label='Country' options={countries} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography>
                                            Booking Information
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={6} >
                                        <DataTimePickerWrapper name='arrivealDate' label='Arriveal Date'/>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <DataTimePickerWrapper name='departureDate' label='Departure Date'/>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextfieldWrapper 
                                            name='message'
                                            label='Message'
                                            multiline={true}
                                            rows={4}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <CheckboxWrapper 
                                            name='termsOfService'
                                            legend='Terms Of Service'
                                            label='I agree'
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <ButtonWrapper>
                                            Submit
                                        </ButtonWrapper>
                                    </Grid>
                                </Grid>

                            </Form>
                        
                        </Formik>
                    </div>
                </Container>
            </Grid>            
        </Grid>
    )
}
