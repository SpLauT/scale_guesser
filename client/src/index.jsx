import React from 'react';
import { Provider } from 'react-redux';
import App from './components/app.jsx';
import { render } from 'react-dom';
import storeFactory from './store/store';
import { HashRouter } from 'react-router-dom';

const store = storeFactory();
const target = document.getElementById('react-container');

render(
    <Provider store={store}>
        <HashRouter>
            <App store={store} />
        </HashRouter>
    </Provider>,
    target);