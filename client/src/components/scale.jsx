import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { newScale } from './../actions/scaleAction';
import Note from './note.jsx';
import './../stylesheets/scale.scss';

const Scale = ({ scale, onMissingScale, currentPosition }) => {
    if (!scale) {
        onMissingScale();
    }
    return (
        <div className="scale">
            {
                (scale) ?
                    scale.map((sca, i) =>
                        <div key={i}>
                            <Note key={i} position={i} note={sca} />
                            <br />
                            {
                                (currentPosition === i) ?
                                    <p>
                                        {`{${i + 1}}`}
                                    </p>
                                    :
                                    <p>
                                        {i + 1}
                                    </p>
                            }
                        </div>
                    ) :
                    <p>No Scale</p>
            }
        </div>
    )
};

const mapStateToProps = state => ({
    scale: state.toGuess && state.toGuess,
    currentPosition: state.position

});

const mapDispatchToProps = dispatch => ({
    onMissingScale() {
        dispatch(newScale())
    }
});

Scale.contextTypes = {
    store: PropTypes.object
};


export default connect(mapStateToProps, mapDispatchToProps)(Scale);