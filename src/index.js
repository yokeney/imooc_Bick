import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
// import configureStore from './redux/store/configureStore'
import configureStore from './redux/store/configureStore'
// import App from './App';
import IRouter from './router';
// import registerServiceWorker from './registerServiceWorker';
const store=configureStore();
ReactDOM.render(
    <Provider store={store}>
        <IRouter  />
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();
