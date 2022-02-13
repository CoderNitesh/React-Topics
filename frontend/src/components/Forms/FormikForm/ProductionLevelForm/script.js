/*
******************* REUSABLE FORMIK CONTROL *******************
stpe1: create FormikContainer component and render that in App.js (in our case index.js is FormikContainer) 
step2: create FormikControl component which take the props and distructure and take control from it which use for switch statment 
step3: create the Input component for input similary TextArea component for textarea and so on and import them in FormikControl component
    and pass required props like control, type, label, name etc...
    what Input component containes 1) Label 2) Field 3)ErrorMessage 
step4: now import FormikControl component in FormikContainer and give all the nessecary props
    Ex... <FormikControl control='input' type='email' label='Email' name='email'  />

*/