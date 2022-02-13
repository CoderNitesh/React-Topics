import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './App';

// css
import 'bootstrap/dist/css/bootstrap.css'

import {store} from './components/ReduxMiddelware/store' 
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
)