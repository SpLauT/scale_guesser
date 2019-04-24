import C from './../constants/scale';
import fetch from 'isomorphic-fetch';

export const newScale = () =>
    (dispatch, getState) => {
        fetch('/api/major')
            .then(response => response.json())
            .then(scale => dispatch({
                type: C.NEW_SCALE,
                scale: scale,
                validate: false
            }))
            .catch(err => {
                console.log('error happened: ', err.message);
                throw err;
            });
    }

export const attemptNote = (position, note) =>
    (dispatch, getState) => {
        const promise = new Promise((resolve, reject) => {
            dispatch({
                type: C.ATTEMPT_NOTE,
                position,
                note 
            });

            resolve();
        });

        return promise;
    }


export const setPosition = (position) => ({
    type: C.SET_POSITION,
    position
});

export const findNewPosition = () => ({
    type: C.FIND_NEW_POSITION
});

export const validateScale = () =>
    (dispatch, getState) => {

        const promise = new Promise((resolve, reject) => {
            dispatch({
                type: C.VALIDATE_SCALE
            });

            const { isValidated } = getState();
            resolve(isValidated);
        });

        return promise;
    };