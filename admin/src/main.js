import React from 'react';
import { render } from 'react-dom';
import { HashRouter, BrowserRouter,Route } from 'react-router-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import './sass/base.css'



render(
    // <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    // </Provider>
    ,
    document.querySelector('#app')
)