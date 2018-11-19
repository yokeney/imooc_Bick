import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import configStore from './redux/store/index'
// import App from './App';
import IRouter from './router';
// import registerServiceWorker from './registerServiceWorker';
const store=configStore();
ReactDOM.render(
    <Provider store={store}>
        <IRouter  />
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();
