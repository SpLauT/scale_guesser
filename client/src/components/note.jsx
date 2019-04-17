import React from 'react';
import { connect } from 'react-redux';
import { setPosition } from '../actions/scaleAction';
import './../stylesheets/note.scss';

const Note = ({ position, note, setPos }) =>
    <div className="note">
        {
            (note) ?
                (note.isRight) ?
                    <span>{note.note}</span> :
                    <span onClick={() => setPos(position)}
                        style={{ color: 'red' }}>{note.note}</span>
                : <span onClick={() => setPos(position)}>X</span>
        }
    </div>

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    setPos(position) {
        dispatch(setPosition(position));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);