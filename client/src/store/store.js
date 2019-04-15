import { createStore, combineReducers, applyMiddleware } from 'redux';
import { scale } from './../reducers/scaleReducer';
import thunk from 'redux-thunk';

const clientLogger = store => next => action => {
    if (action.type) {
        let result;
        console.groupCollapsed("dispacthing", action.type);
        console.log('prev state', store.getState());
        console.log('action', action);
        result = next(action);
        console.log('next state', store.getState());
        console.groupEnd();
        return result;
    } else {
        return next(action);
    }
}

const serverLogger = store => next => action => {
    console.log('\n dispatching server action \n');
    console.log(action);
    console.log('\n');
}

const middleware = server => [
    (server) ? serverLogger : clientLogger,
    thunk
];

const storeFactory = (server = false, initialState = {}) =>
    createStore(
        scale,
        initialState,
        applyMiddleware(...middleware(server))
    );

export default storeFactory;