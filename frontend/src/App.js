import React from 'react'

import './App.css'

// FORMIK FORM
// import SimpleForm from './components/Forms/FormikForm/SimpleForm';
// import AdvancedForm from './components/Forms/FormikForm/AdvancedForm'
// import ProductionLevelForm from './components/Forms/FormikForm/ProductionLevelForm'
// import FormikWithMaterialUi from './components/Forms/FormikWithMaterialUi'

// HOOKS
// import UseStateHook from './components/Hooks/01_useState'
// import UseReducerHook from './components/Hooks/02_useReducer'
// import UseEffectHook from './components/Hooks/03_useEffect'
import UseRefHook from './components/Hooks/04_useRef'
// import UseLayoutEffect from './components/Hooks/05_useLayoutEffect'
// import UseImperativeHook from './components/Hooks/ImperativeHook/UseImperativeHook'

// MULTER
// import MulterFileUpload from './components/Multer';

// PAGINATION
// import Users from './components/Pagination/Users'

// REDUX (look reduxIndex.js)
// import NavBar from './components/Redux/containers/NavBarContainer'
// import Home from './components/Redux/containers/HomeContainer'
// import Home from './components/ReduxMiddelware/components/Home';
// import About from './components/ReduxMiddelware/components/About';

// CONTEXT API (look App.js in Context API folder)
// import Home from './components/ContextApi/components/Home'
// import About from './components/ContextApi/components/About'
// import CounterState from './components/ContextApi/context/CounterState'


// ERROR BOUNDARY (look App.js in ErrorBoundary folder)
// import Home from './components/ErrorBoundary/components/Home'
// import About from './components/ErrorBoundary/components/About'
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

function App() {
    return (
        <div>
            <UseRefHook />
        </div>
    )
}

export default App;
