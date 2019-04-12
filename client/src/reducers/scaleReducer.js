import C from './../constants/scale';

export const scale = (state = {}, action) => {
    switch (action.type) {
        case C.NEW_SCALE:
            //call backend for a new scale, give id of current, so that you don't get the same
            const newScale = {
                scale: {
                    image: 'path-to-image.png',
                    scale: ['A','B','C#','D','E','F#','G#']
                },
                toGuess: {
                    scale: ['A', null, null, 'D', 'E', 'F#', null]
                }
            }
            return newScale;
        case C.VALIDATE:
            return state;
        default:
            return state;
    }
}