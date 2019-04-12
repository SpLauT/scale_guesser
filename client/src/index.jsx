import React from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import App from './components/app.jsx';
import { render } from 'react-dom';
import storeFactory from './store/store';

const store = storeFactory();

const target = document.getElementById('react-container');

// store.dispatch({type: 'NEW_SCALE'});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    target);