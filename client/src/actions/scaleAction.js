import C from './../constants/scale';
import fetch from 'isomorphic-fetch';

export const newScale = () =>
    (dispatch, getState) => {
        fetch('/api/major')
            .then(response => response.json())
            .then(scale => dispatch({
                type: C.NEW_SCALE,
                scale: scale
            }))
            .catch(err => {
                console.log('error happened: ', err.message);
                throw err;
            });
    }