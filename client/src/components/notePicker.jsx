import React from 'react';
import { connect } from 'react-redux';
import { attemptNote, validateScale, newScale } from './../actions/scaleAction';
import './../stylesheets/notePicker.scss';

const notes = [
    ['A♭', 'A', 'A#'],
    ['B♭', 'B','B#'],
    ['C♭','C', 'C#'],
    ['D♭', 'D', 'D#'],
    ['E♭', 'E', 'E#'],
    ['F♭','F', 'F#'],
    ['G♭', 'G', 'G#']
];

const NotePicker = ({ position, pickNote }) =>
    <div className="note-picker">
        {
            notes.map((outer, outIdx) =>
                <div key={`${outIdx}-outer`}>
                    {
                        outer.map((inner, innIdx) =>
                            <div key={`${innIdx}-inner`}
                                onClick={() => pickNote(position, inner)}>
                                {inner}
                            </div>)
                    }
                </div>
            )
        }
    </div>

const mapStateToProps = (state) => ({
    position: state.position
});

const mapDispatchToProps = (dispatch) => ({
    pickNote(position, note) {
        const attemptNotePromise = dispatch(attemptNote(position, note));
        const validateScalePromise = attemptNotePromise.then(() => dispatch(validateScale()));

        validateScalePromise //TODO: consider doing something else, so people can see that they were right :)
            .then(inp => {
                console.log(inp);
                if (inp) {
                    dispatch(newScale())
                }
            })
            .catch(() => console.log('Rejected'));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NotePicker);