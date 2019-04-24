import React from 'react';
import { Provider } from 'react-redux';
import App from './components/app.jsx';
import { render } from 'react-dom';
import storeFactory from './store/store';
import { HashRouter } from 'react-router-dom';
import './stylesheets/stylesheet.scss';

const store = storeFactory();
const target = document.getElementById('react-container');

render(
    <div id="layout">
        <Provider store={store}>
            <header>
                <h1>Scale guesser</h1>
            </header>
            <nav>
                <ul>
                    <li>Major</li>
                </ul>
            </nav>
            <App store={store} />
            <footer></footer>
        </Provider>
    </div>,
    target);