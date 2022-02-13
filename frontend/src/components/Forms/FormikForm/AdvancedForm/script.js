/*
FIRST_CHANGE:
    use validationSchema to validate our form removed the vaildate method which we created manually
SECOUND_CHANGE:
    onBlur, onChange, onSubmit methods we use in all input field so over this we can use {...formik.getFieldProps('Name of that input')}
THIRD_CHANGE: 
    useFormik replace with Formik component and pass the useFormik methods as props 
FOURTH_CHANGE:
    replace the html form with Form component (No more need to send the onSubmit event.)
FIFTH_CHANGE:
    replace the html input with Feild component (No more need to send SECOUND_CHANGE)
        --> Hook up inputs to top level Formik component using name attribute
        --> Use name attribut to matche up with Formik state 
        --> By default field will render input element
SIXTH_CHANGE:
    replace the errors message "div" with ErrorMessage Component (NOTE: to get ErrorMessage you need to set your input as Field component)


****** ALL ABOUT FIELD COMPONENT
1)  Field is by default work as input to work as textarea or something else 
    just pass one extra attribute
    Example:
        --> as='textarea'
                OR
        --> component='textarea'

2) Field component with render props pattern
    <Field name='address'>
        {
            (props)=>{
                // console.log('RENDER PROPS: ', props)
                const {field, form, meta}= props
                return (
                    <div>
                        <input id='address' {...field} />   
                        {meta.touched && meta.error ? <div>{meta.error}</div>: null}
                    </div>
                )
            }
        }
    </Field>


****** ALL ABOUT ERROR MESSAGE
1) By default error msg is a plane text not wrap in any div 
   to wrap a error msg in div 
        --> component='div'
                OR
        --> component={TextError} //Custom component
2) ErrorMessage component with render props pattern
    <ErrorMessage name='channel'> 
        {
            errorMsg => <div className='error'>{errorMsg}</div>
        }
    </ErrorMessage>

****** WHAT IS NESTED OBJECT
till now you get all the data after submiting in on object as you see 
now see a social presence field 
1) nested object in inintial values
    const initialValues = {
        fullname: '',
        and so on...,
        social: {
            facebook: '',
            twitter: ''
        }
    }
2) remember the name in Field component must be name=social.facebook and name=social.twitter

****** ARRAY IN FIELD COMPONENT
see in intital values phoneNumber

insted of this we use FieldArray
step1: initialValues set empty array
    ex. phNumbers = ['']
step2: setup the FieldArray
        as render props method

****** FASTFIELD INSTED OF FIELD
the differnce is when we used field the change in state will result all field renders again 
but the fastField is not render each time when other field state change 
basically use fastField used when the input is not depend on other inputs

****** WHEN DOES VALIDATION RUNS IN FORMIK
    1) onChange
    2) onBlur
    3) attempt to Submit
To avoid this automatic validation you can set the props to Formik component
    1)validateOnChange = {false}
    2)validateOnBlur = {false}

****** IMPLEMENTING FIELD LEVEL VALIDATION
its similer What we do in OldForm but just for one perticular field
lets make comment validate using field level validation 
for that lets make the validateComments and @ pass as props @ to Field component of Comments
EX. const validateComments = value => {
        let error
        if(!value){
            error = 'Required man'
        }
        return error
    }

****** MANUALLY TRIGGERING VALIDATION
for this first of all we need to return Form component as per the render Props method
for that
<Formik>
    {
        formik => {
            return <Form>...</Form>
        }
    }
</Formik>
and use this below functions on the button click event
    1) formik.validateField(name of field)
    2) formik.validateForm()
    3) formik.setTouched({
            name: true,
            email: true,
            ...
        })
    4) formik.setFieldTouched(name of field)

****** Disabling the Submit Button
there is method avaliable isSubmiting, isValid, or dirty

****** LOAD SAVE DATA
for now lets consider data come from api and sotred in savedData object
step1: lets create the savedData object which containe some field already filled (below initialValues)
step2: Add the button for Load Saved Data
step3: use useState and set the state null as formValues and the button which create onClick set the state to savedData
step4: in the props of Formik in initialValues={formValues || initialValues}
step5: add one more prop in Formik "enableReinitailize"

****** RESET THE DATA
step1: create the Reset btn and set type to reset
or 
step1: inside the onSubmit at last call the onSubmitProps.resetForm()
*/