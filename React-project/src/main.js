import React from 'react';
import { render } from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
// import store from './store'

render(
    // <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    // </Provider>
    ,
    document.querySelector('#app')
)