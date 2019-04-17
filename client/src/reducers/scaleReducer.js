import C from './../constants/scale';
import _ from 'lodash';

export const scale = (state = { position: 0 }, action) => {
    switch (action.type) {
        case C.NEW_SCALE: {

            //Consider putting this logic somewhere else.
            //call backend for a new scale, give id of current, so that you don't get the same
            const scale = action.scale && [...action.scale.scale]; // consider something else that scale scale!

            const numberOfRands = Math.floor(Math.random() * 4) + 1; // here I do a plus 1, to avoid Zero :)

            let positions = _.range(scale.length);

            positions = [...positions].sort(() => Math.random() - 0.5) //This means that sorting can be either the smallest or the biggest number, for everytime it has taken an number; 

            positions = [...positions].slice(0, numberOfRands);

            let toGuess = scale.map((value, i) => {
                if (positions.includes(i)) return { note: '?', isRight: false };
                return { note: value, isRight: true };
            });

            return { ...state, scale, toGuess, isValidated: false };
        }
        case C.VALIDATE_SCALE:

            const { toGuess } = state;
            let isValidated = false;
            if(toGuess.every((note => note.isRight))){
                isValidated = !isValidated;
            }

            return { ...state, isValidated: isValidated };
        case C.ATTEMPT_NOTE: {
            const { position, note } = action;
            let resultingPosition = position;
            let toGuess = [...state.toGuess];

            if (state.scale[position] === note) {
                toGuess[position] = { note, isRight: true };
                resultingPosition = null;
            } else {
                toGuess[position] = { note, isRight: false }
            }

            return { ...state, toGuess, position: resultingPosition };
        }
        case C.SET_POSITION: {
            const { position } = action;

            return { ...state, position };
        }
        default:
            return state;
    }
}