import C from './../constants/scale';
import _ from 'lodash';

export const scale = (state = {}, action) => {
    switch (action.type) {
        case C.NEW_SCALE:
            //Consider putting this logic somewhere else.
            //call backend for a new scale, give id of current, so that you don't get the same
            const scale = action.scale && [...action.scale.scale];

            const numberOfRands = Math.floor(Math.random() * 4) + 1; // here I do a plus 1, to avoid Zero :)

            let positions = _.range(scale.length);

            positions = [...positions].sort(() => Math.random() - 0.5) //This means that sorting can be either the smallest or the biggest number, for everytime it has taken an number; 

            positions = [...positions].slice(0, numberOfRands);

            let toGuess = scale.map((value, i) => {
                if (positions.includes(i)) return null;
                return value;
            });

            return { scale, toGuess };
        case C.VALIDATE:
            return state;
        default:
            return state;
    }
}