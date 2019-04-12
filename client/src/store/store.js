import  { createStore, combineReducers } from 'redux';
import { scale } from './../reducers/scaleReducer';

const storeFactory = (initialState={}) => createStore(
    scale,
    initialState
);

export default storeFactory;